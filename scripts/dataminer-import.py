#!/usr/bin/env python3
"""
Dataminer-to-prototype ingestion script for Mnemosyne Engine.
Reads dataminer output and writes episode .md files with YAML frontmatter.

Usage:
    python3 scripts/dataminer-import.py [--tradition {gilgamesh,iliad,mahabharata}]
"""

import argparse
import os
import re
import sys
import yaml
from pathlib import Path

# ── Paths ────────────────────────────────────────────────────────────────────
DATAMINER_OUTPUT = Path("/Users/andreyshulga/projects/experimental/axis/as.axis.dataminer/output")
PROTOTYPE_ROOT = Path("/Users/andreyshulga/projects/experimental/axis/as.axis.proto8")
EPISODES_DIR = PROTOTYPE_ROOT / "src/content/episodes"
PARALLELS_DIR = PROTOTYPE_ROOT / "src/content/parallels"

TRADITIONS = ["gilgamesh", "iliad", "mahabharata"]

# ── YAML helpers ──────────────────────────────────────────────────────────────

class LiteralStr(str):
    """String subclass that forces YAML block scalar (| style) serialisation."""
    pass


def _build_dumper():
    class CustomDumper(yaml.Dumper):
        pass

    def _literal_representer(dumper, data):
        return dumper.represent_scalar("tag:yaml.org,2002:str", data, style="|")

    CustomDumper.add_representer(LiteralStr, _literal_representer)
    return CustomDumper


CUSTOM_DUMPER = _build_dumper()


def yaml_dump(data: dict) -> str:
    return yaml.dump(
        data,
        Dumper=CUSTOM_DUMPER,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
    )


# ── Humanisation helpers ──────────────────────────────────────────────────────

# Small words that stay lowercase in title case (unless they're the first word)
_SMALL_WORDS = {
    "a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet",
    "at", "by", "in", "of", "on", "to", "up", "as", "if",
}


def slug_to_title(slug: str) -> str:
    """
    Convert an episode slug to Title Case, keeping small words lowercase.

    Examples:
        bull-of-heaven      → Bull of Heaven
        gilgamesh-of-uruk   → Gilgamesh of Uruk
        creation-of-enkidu  → Creation of Enkidu
        anukramanika        → Anukramanika
    """
    words = slug.split("-")
    result = []
    for i, word in enumerate(words):
        if i == 0 or word not in _SMALL_WORDS:
            result.append(word.capitalize())
        else:
            result.append(word)
    return " ".join(result)


def humanise_division(tradition: str, division: str) -> str:
    """
    Convert a division slug to a human-readable display label.

    tablet-vi    → Tablet VI
    book-i       → Book I
    adi-parva    → Adi Parva
    bhishma-parva → Bhishma Parva
    """
    parts = division.split("-")

    if parts[0] == "tablet":
        roman = "-".join(parts[1:]).upper()
        return f"Tablet {roman}"

    if parts[0] == "book":
        roman = "-".join(parts[1:]).upper()
        return f"Book {roman}"

    # Parva and other names — Title Case each part
    return " ".join(p.capitalize() for p in parts)


# ── Text helpers ──────────────────────────────────────────────────────────────

def strip_nas_refs(text: str) -> str:
    """Remove inline [NAS: ...] citation markers from body text."""
    return re.sub(r"\s*\[NAS:[^\]]*\]", "", text).strip()


def first_sentence(text: str, max_chars: int = 200) -> str:
    """Return the first sentence of text, stripped of NAS refs, capped at max_chars."""
    clean = strip_nas_refs(text)
    parts = clean.split(". ")
    sentence = parts[0].rstrip(".").strip()
    if len(sentence) > max_chars:
        sentence = sentence[:max_chars]
    return sentence


def ru_title_from_body(ru_body: str) -> str:
    """First 6 whitespace-split words of ru_body, with '...' if there are more."""
    clean = strip_nas_refs(ru_body)
    words = clean.split()
    if len(words) <= 6:
        return clean
    return " ".join(words[:6]) + "..."


# ── File readers ──────────────────────────────────────────────────────────────

def read_yaml(path: Path) -> dict | None:
    """Load a YAML file; return None if it does not exist."""
    if not path.exists():
        return None
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def read_fragment(tradition: str, division: str, episode: str) -> dict | None:
    path = DATAMINER_OUTPUT / tradition / "fragments" / division / f"{episode}.yaml"
    return read_yaml(path)


def read_annotation(tradition: str, division: str, episode: str, track: str) -> dict | None:
    path = (
        DATAMINER_OUTPUT
        / tradition
        / "annotation-candidates"
        / division
        / f"{episode}.{track}.yaml"
    )
    return read_yaml(path)


def read_artifacts(tradition: str, division: str, episode: str) -> list | None:
    path = (
        DATAMINER_OUTPUT
        / tradition
        / "artifacts"
        / division
        / f"{episode}.artifacts.yaml"
    )
    data = read_yaml(path)
    if not data:
        return None
    return data.get("artifacts") or None


# ── Annotation mapping ────────────────────────────────────────────────────────

def map_annotations(annotation_data: dict | None) -> list[dict]:
    """
    Extract confirmed annotations and map to the output schema shape.

    Schema allows only {code, name, tier} — extra fields (methodologyFitWarning,
    methodologyFitNote) are excluded as they are not in the Astro Zod schema.
    """
    if not annotation_data:
        return []
    items = annotation_data.get("annotations") or []
    out = []
    for item in items:
        if item.get("status") != "confirmed":
            continue
        out.append({
            "code": item["code"],
            "name": item["label"],
            "tier": item["proposed_tier"],
        })
    return out


# ── Body builder ──────────────────────────────────────────────────────────────

def build_body(content_records: list) -> tuple[dict, list[str]]:
    """
    Build body dict and layers list from content records.
    Only 'confirmed' records are included; NAS inline refs are stripped.

    Returns:
        body   – {layer: {locale: LiteralStr}} for confirmed records
        layers – ordered list of layer names that have confirmed content
    """
    body: dict = {}
    for record in content_records:
        if record.get("status") != "confirmed":
            continue
        layer = record.get("layer")
        locale = record.get("locale")
        raw = record.get("body") or ""
        clean = strip_nas_refs(raw)
        if not clean:
            continue
        if layer not in body:
            body[layer] = {}
        body[layer][locale] = LiteralStr(clean)

    # Build output in canonical layer order
    out_body: dict = {}
    layers: list[str] = []
    for layer in ("surface", "translated", "scholaria"):
        if layer in body:
            out_body[layer] = body[layer]
            layers.append(layer)

    return out_body, layers


# ── Episode writer ────────────────────────────────────────────────────────────

def process_episode(
    tradition: str,
    division: str,
    episode: str,
    written_nas: set,
) -> bool:
    """
    Build and write a single episode .md file.
    Returns True on success.
    """
    raw = read_fragment(tradition, division, episode)
    if raw is None:
        print(f"  [SKIP] {tradition}/{division}/{episode} — fragment file missing")
        return False

    frag = raw.get("fragment", {})
    content = raw.get("content") or []

    # ── Body & layers ──
    body, layers = build_body(content)
    if not layers:
        layers = []  # will emit an empty list rather than omit the field

    # ── Surface text for title / desc derivation ──
    en_surface_bodies = [
        r.get("body", "") for r in content
        if r.get("status") == "confirmed"
        and r.get("layer") == "surface"
        and r.get("locale") == "en"
    ]
    ru_surface_bodies = [
        r.get("body", "") for r in content
        if r.get("status") == "confirmed"
        and r.get("layer") == "surface"
        and r.get("locale") == "ru"
    ]
    en_surface = en_surface_bodies[0] if en_surface_bodies else ""
    ru_surface = ru_surface_bodies[0] if ru_surface_bodies else ""

    # ── Titles & descriptions ──
    title_en = slug_to_title(episode)
    title_ru = ru_title_from_body(ru_surface) if ru_surface else title_en
    desc_en = first_sentence(en_surface) if en_surface else ""
    desc_ru = first_sentence(ru_surface) if ru_surface else ""

    # ── Annotations ──
    propp_funcs = map_annotations(read_annotation(tradition, division, episode, "propp"))
    bakhtin_chrons = map_annotations(read_annotation(tradition, division, episode, "bakhtin"))
    tmi_motifs = map_annotations(read_annotation(tradition, division, episode, "tmi"))

    # ── Artifacts ──
    artifacts = read_artifacts(tradition, division, episode)

    # ── Assemble frontmatter (ordered for readability) ──
    nas = frag.get("nas", f"nms://{tradition}/{division}/{episode}")
    fm: dict = {
        "nas": nas,
        "tradition": frag.get("tradition_id", tradition),
        "tablet": humanise_division(tradition, division),
        "tier": frag.get("confidence_tier", "reconstructed"),
        "layers": layers,
        "title_en": title_en,
        "title_ru": title_ru,
        "desc_en": desc_en,
        "desc_ru": desc_ru,
    }
    if body:
        fm["body"] = body
    if propp_funcs:
        fm["proppFunctions"] = propp_funcs
    if bakhtin_chrons:
        fm["bakhtinChronotopes"] = bakhtin_chrons
    if tmi_motifs:
        fm["tmiMotifs"] = tmi_motifs
    if artifacts:
        fm["artifacts"] = artifacts
    fm["methodologyFitWarning"] = bool(frag.get("methodology_fit_warning", False))
    methodology_fit_note = frag.get("methodology_fit_note")
    if methodology_fit_note:
        fm["methodologyFitNote"] = methodology_fit_note
    fm["phase2"] = tradition == "mahabharata"

    # ── Write ──
    frontmatter_str = yaml_dump(fm)
    md_content = f"---\n{frontmatter_str}---\n"

    out_path = EPISODES_DIR / f"{tradition}-{division}-{episode}.md"
    out_path.write_text(md_content, encoding="utf-8")

    written_nas.add(nas)
    print(f"  [{tradition}] {division}/{episode} → written")
    return True


# ── Parallel validation ───────────────────────────────────────────────────────

def validate_parallels(written_nas: set) -> None:
    """Check all parallel files for unresolved NAS references."""
    print("\nValidating parallels...")
    unresolved: list[tuple[str, str]] = []

    for fpath in sorted(PARALLELS_DIR.glob("*.md")):
        if fpath.name.startswith("."):
            continue
        text = fpath.read_text(encoding="utf-8")
        if not text.startswith("---"):
            continue
        parts = text.split("---", 2)
        if len(parts) < 3:
            continue
        try:
            fm = yaml.safe_load(parts[1])
        except yaml.YAMLError:
            continue
        if not fm:
            continue
        for nas in (fm.get("episodeNasUris") or []):
            if nas not in written_nas:
                unresolved.append((fpath.name, nas))

    if unresolved:
        print(f"  WARNING: {len(unresolved)} unresolved NAS reference(s) in parallels:")
        for fname, nas in unresolved:
            print(f"    {fname}: {nas}")
    else:
        print("  All parallel NAS references resolved.")


# ── Main ──────────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(
        description="Ingest dataminer output into the Mnemosyne Engine prototype."
    )
    parser.add_argument(
        "--tradition",
        choices=TRADITIONS,
        default=None,
        help="Process a single tradition (default: all three)",
    )
    args = parser.parse_args()

    traditions_to_run = [args.tradition] if args.tradition else TRADITIONS

    EPISODES_DIR.mkdir(parents=True, exist_ok=True)

    written_nas: set = set()
    counts: dict[str, int] = {}

    for tradition in traditions_to_run:
        nas_path = DATAMINER_OUTPUT / tradition / "nas-confirmed.yaml"
        if not nas_path.exists():
            print(f"[{tradition}] nas-confirmed.yaml not found — skipping.")
            continue

        with open(nas_path, encoding="utf-8") as f:
            nas_data = yaml.safe_load(f)

        entries = nas_data.get("entries") or []
        n_written = 0

        print(f"\n[{tradition}] {len(entries)} NAS entries found...")

        for entry in entries:
            if entry.get("granularity") == "lacuna":
                continue

            division = entry["division"]
            episode = entry["episode"]

            # Guard: check fragment file exists (belt-and-suspenders)
            fpath = DATAMINER_OUTPUT / tradition / "fragments" / division / f"{episode}.yaml"
            if not fpath.exists():
                print(f"  [SKIP] {division}/{episode} — no fragment file")
                continue

            if process_episode(tradition, division, episode, written_nas):
                n_written += 1

        counts[tradition] = n_written
        print(f"[{tradition}] Done — {n_written} episodes written.")

    # ── Summary ──
    total = sum(counts.values())
    print("\n── Summary ─────────────────────────────────────────────")
    for t, n in counts.items():
        print(f"  {t}: {n} episodes")
    print(f"  Total: {total} episodes written")
    print("────────────────────────────────────────────────────────")

    # ── Post-ingest parallel validation ──
    validate_parallels(written_nas)


if __name__ == "__main__":
    main()

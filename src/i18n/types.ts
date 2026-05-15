export type Locale = 'en' | 'ru';

/**
 * Every key here must appear in both en.ts and ru.ts.
 * TypeScript enforces parity at build time: a missing key in either
 * file is a compile error caught by `astro check`.
 */
export interface Translations {
  /* ── Global chrome ─────────────────────────────────────────────── */
  skip_to_main: string;
  nav_wordmark_aria: string;
  nav_main_aria: string;
  nav_gilgamesh: string;
  nav_iliad: string;
  nav_parallels: string;
  locale_group_aria: string;
  locale_en: string;
  locale_ru: string;

  /* ── Footer ────────────────────────────────────────────────────── */
  footer_name: string;
  footer_phase_main: string;
  footer_stmt_main: string;
  footer_stmt_short: string;
  footer_about: string;
  footer_epistemic: string;
  footer_contact: string;
  footer_nav_aria: string;

  /* ── Epistemic tier labels ──────────────────────────────────────── */
  tier_documented: string;
  tier_reconstructed: string;
  tier_contested: string;
  tier_ai_reviewed: string;
  tier_documented_desc: string;
  tier_reconstructed_desc: string;
  tier_contested_desc: string;
  tier_ai_reviewed_desc: string;

  /* ── Landing page ───────────────────────────────────────────────── */
  hero_title: string;
  hero_subtitle: string;
  active_traditions: string;
  forthcoming_traditions: string;
  tradition_mesopotamian: string;
  tradition_greek: string;
  idx_title_gilgamesh: string;
  idx_title_iliad: string;
  idx_gilgamesh_epoch: string;
  idx_iliad_epoch: string;
  idx_gilgamesh_desc: string;
  idx_iliad_desc: string;
  idx_gilgamesh_stats: string;
  idx_iliad_stats: string;
  enter_gilgamesh: string;
  enter_iliad: string;
  about_platform: string;
  idx_about_p1: string;
  idx_about_p2: string;

  /* ── Breadcrumb ─────────────────────────────────────────────────── */
  bc_home: string;

  /* ── Tradition overview — Gilgamesh ─────────────────────────────── */
  trad_gilgamesh_epoch_full: string;
  trad_gilgamesh_desc_p1: string;
  trad_gilgamesh_desc_p2: string;
  cross_tradition_link: string;
  trad_cross_tradition_sub: string;
  tablets_label: string;
  trad_tablet1_label: string;
  trad_tablet1_name: string;
  trad_tablet1_desc: string;
  trad_tablet1_ep: string;
  trad_tablet2_label: string;
  trad_tablet2_name: string;
  trad_tablet2_desc: string;
  trad_tablet2_ep: string;
  trad_tablet3_label: string;
  trad_tablet3_name: string;
  trad_tablet3_desc: string;
  trad_tablet3_ep: string;
  trad_tablet4_label: string;
  trad_tablet4_name: string;
  trad_tablet4_desc: string;
  trad_tablet4_ep: string;
  trad_tablet5_label: string;
  trad_tablet5_name: string;
  trad_tablet5_desc: string;
  trad_tablet5_ep: string;
  trad_tablet11_label: string;
  trad_tablet11_name: string;
  trad_tablet11_desc: string;
  trad_tablet11_ep_parallel: string;
  trad_tablet11_ep_count: string;

  /* ── Tablet hub — Tablet XI ──────────────────────────────────────── */
  tablet_hub_heading: string;
  tablet_hub_subtitle: string;
  tablet_hub_intro: string;
  tablet_hub_breadcrumb: string;
  tablet_hub_nav_prev: string;
  tablet_hub_nav_next: string;
  tablet_ep1_nas_confirm: string;
  tab_hub_episodes_intro: string;
  tab_ep1_name: string;
  tab_ep1_desc: string;
  tab_ep2_name: string;
  tab_ep2_desc: string;
  tab_ep3_name: string;
  tab_ep3_desc: string;
  episodes_label: string;

  /* ── Common UI ──────────────────────────────────────────────────── */
  in_preparation: string;
  phase2_badge: string;
  close_x: string;
}

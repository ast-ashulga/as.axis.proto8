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

  /* ── Fragment reader — layer tabs ──────────────────────────────── */
  layer_surface: string;
  layer_narrated: string;
  layer_translated: string;
  layer_original: string;
  layer_scholaria: string;

  /* ── Fragment reader — NAS + copy ───────────────────────────────── */
  copy_btn: string;
  copied_confirm: string;
  sources_region_label: string;
  see_sources: string;
  hide_sources: string;

  /* ── Fragment reader — structure toggle ─────────────────────────── */
  show_structure: string;
  hide_structure: string;

  /* ── Fragment reader — AI disclosure + demo marker ──────────────── */
  frag_ai_disclosure_lead: string;
  frag_nas_tag_doc: string;
  demo_content_marker: string;
  honest_absence_narrated: string;
  honest_absence_original: string;

  /* ── Fragment reader — badge popup bodies ───────────────────────── */
  frag_badge_ai_pop_p1: string;
  frag_badge_ai_pop_p2: string;
  frag_badge_trans_pop_p1: string;
  frag_badge_schol_pop_p1: string;
  frag_badge_narr_pop_p1: string;
  frag_badge_orig_pop_p1: string;

  /* ── Fragment reader — tier badge labels ────────────────────────── */
  badge_documented: string;
  badge_reconstructed: string;
  badge_contested: string;
  badge_ai_reviewed: string;

  /* ── Fragment reader — Flood episode ────────────────────────────── */
  frag_flood_title: string;
  frag_flood_subtitle: string;
  frag_surf_flood_p1: string;
  frag_surf_flood_p2: string;
  frag_surf_flood_p3: string;
  frag_surf_flood_p4: string;
  frag_nav_tablet_hub: string;
  frag_nav_next_sleep: string;

  /* ── Fragment reader — Sleep-Challenge episode ───────────────────── */
  frag_ep_sleep_title: string;
  frag_surf_sleep_p1: string;
  frag_surf_sleep_p2: string;
  frag_surf_sleep_p3: string;
  frag_surf_sleep_p4: string;
  frag_nav_prev_flood: string;
  frag_nav_next_plant: string;

  /* ── Fragment reader — Plant episode ────────────────────────────── */
  frag_ep_plant_title: string;
  frag_surf_plant_p1: string;
  frag_surf_plant_p2: string;
  frag_surf_plant_p3: string;
  frag_surf_plant_p4: string;
  frag_nav_prev_sleep: string;
  frag_nav_tablet_hub_fwd: string;

  /* ── Fragment reader — parallel strip ───────────────────────────── */
  parallel_strip_heading: string;
  parallel_flood_body: string;
  parallel_type_shared: string;
  parallel_type_structural: string;
  read_this_parallel: string;

  /* ── Fragment reader — Scholaria headings ───────────────────────── */
  schol_manuscript_status: string;
  schol_textual_history: string;
  schol_key_variants: string;
  schol_scholarship_cited: string;

  /* ── Common UI ──────────────────────────────────────────────────── */
  in_preparation: string;
  phase2_badge: string;
  close_x: string;
  layer_static_2_translated: string;

  /* ── Iliad tradition overview ────────────────────────────────────── */
  trad_iliad_epoch_full: string;
  trad_iliad_desc_p1: string;
  trad_iliad_desc_p2: string;
  trad_iliad_cross_tradition_sub: string;
  books_label: string;
  iliad_book1_label: string;
  iliad_book1_name: string;
  iliad_book1_desc: string;
  iliad_book1_ep: string;
  iliad_book6_label: string;
  iliad_book6_name: string;
  iliad_book6_desc: string;
  iliad_book6_ep: string;
  iliad_book9_label: string;
  iliad_book9_name: string;
  iliad_book9_desc: string;
  iliad_book9_ep: string;
  iliad_book16_label: string;
  iliad_book16_name: string;
  iliad_book16_desc: string;
  iliad_book16_ep: string;
  iliad_book22_label: string;
  iliad_book22_name: string;
  iliad_book22_desc: string;
  iliad_book22_ep: string;
  iliad_book24_label: string;
  iliad_book24_name: string;
  iliad_book24_desc: string;
  iliad_book24_ep_parallel: string;
  iliad_book24_ep_count: string;

  /* ── Book XXIV hub ───────────────────────────────────────────────── */
  iliad_book24_hub_intro: string;
  iliad_book24_rec_pop_detail: string;
  iliad_book24_ep_coming: string;
  iliad_book24_ep1_title: string;
  iliad_book24_ep1_desc: string;
  iliad_book24_ep2_title: string;
  iliad_book24_ep2_desc: string;
  iliad_book24_ep3_desc: string;
  iliad_book24_nav_prev: string;
  iliad_book24_nav_return_overview: string;

  /* ── Ransom of Hector reader ─────────────────────────────────────── */
  iliad_frag_book24_bc: string;
  iliad_frag_ransom_crumb: string;
  iliad_frag_ransom_title: string;
  iliad_frag_ransom_subtitle: string;
  iliad_frag_badge_ai_pop_p2: string;
  iliad_frag_badge_trans_pop_p1: string;
  iliad_frag_badge_schol_pop_p1: string;
  iliad_frag_badge_scholaria_head: string;
  iliad_frag_ransom_surf_p1: string;
  iliad_frag_ransom_surf_p2: string;
  iliad_frag_ransom_surf_p3: string;
  iliad_frag_ransom_surf_p4: string;
  iliad_frag_badge_narr_pop_p1: string;
  iliad_frag_badge_orig_pop_p1: string;
  iliad_frag_ransom_schol_ms_p: string;
  iliad_frag_ransom_schol_hist_p: string;
  iliad_frag_ransom_schol_debate_head: string;
  iliad_frag_ransom_schol_debate_p: string;
  iliad_frag_ransom_cite_nagy_html: string;
  iliad_frag_ransom_cite_whitman_html: string;
  iliad_frag_ransom_cite_west_html: string;
  iliad_frag_ransom_cite_kirk_html: string;
  iliad_frag_parallel_card_body: string;
  iliad_frag_track_head: string;
  iliad_frag_propp_exp_title: string;
  iliad_frag_propp_exp_body: string;
  iliad_frag_propp8_name: string;
  iliad_frag_propp8_panel_head: string;
  iliad_frag_propp8_panel_p: string;
  iliad_frag_propp19_name: string;
  iliad_frag_propp19_panel_head: string;
  iliad_frag_propp19_panel_p: string;
  iliad_frag_propp31_name: string;
  iliad_frag_propp31_panel_head: string;
  iliad_frag_propp31_panel_p: string;
  iliad_frag_campbell_exp_title: string;
  iliad_frag_campbell_exp_body: string;
  iliad_frag_campbell_return_name: string;
  iliad_frag_campbell_return_panel_head: string;
  iliad_frag_campbell_return_panel_p: string;
  iliad_frag_campbell_atone_name: string;
  iliad_frag_campbell_atone_panel_head: string;
  iliad_frag_campbell_atone_panel_p: string;
  iliad_frag_tmi_exp_title: string;
  iliad_frag_tmi_exp_body: string;
  iliad_frag_tmi_p325_name: string;
  iliad_frag_tmi325_panel_head: string;
  iliad_frag_tmi_p325_panel_p: string;
  iliad_frag_tmi_t211_name: string;
  iliad_frag_tmi211_panel_head: string;
  iliad_frag_tmi_t211_panel_p: string;
  iliad_frag_badge_annot_documented: string;
  iliad_frag_badge_annot_reconstructed: string;

  /* ── Parallels index ─────────────────────────────────────────────── */
  bc_cross_resonances: string;
  parallels_page_heading: string;
  parallels_page_intro: string;
  parallels_confirmed_count: string;
  parallels_about_heading: string;
  parallels_about_p1: string;
  parallels_about_p2: string;
  parallel_flood_heading: string;
  parallel_flood_subtitle_refs: string;
  parallel_flood_trad_lines: string;
  parallel_flood_onboarded_note: string;
  parallel_grief_heading: string;
  parallel_grief_subtitle_refs: string;
  parallel_grief_body: string;
  parallel_grief_trad_lines: string;
  parallel_grief_onboarded_note: string;
  parallel_types_section_heading: string;
  parallel_type_card_human_title: string;
  parallel_type_card_human_desc: string;
  parallel_type_card_narr_title: string;
  parallel_type_card_narr_desc: string;
  parallel_type_card_social_title: string;
  parallel_type_card_social_desc: string;
  parallels_badge_doc_body: string;
  parallels_badge_rec_body: string;

  /* ── Flood parallel view ─────────────────────────────────────────── */
  parallel_view_back: string;
  parallel_view_attributed_kovacs: string;
  parallel_view_label_mesop: string;
  parallel_view_label_hebrew_bibl: string;
  parallel_view_epi_title: string;
  parallel_view_epi_sub_flood: string;
  parallel_view_epi_date_sbv: string;
  parallel_view_credit_thompson: string;
  parallel_view_attr_thompson_excerpt: string;
  parallel_view_fragment_link: string;
  parallel_view_genesis_title: string;
  parallel_view_genesis_sub_flood: string;
  parallel_view_genesis_date_kjv: string;
  parallel_view_credit_kjv: string;
  parallel_view_attr_genesis_excerpt: string;
  parallel_view_genesis_phase_note: string;
  parallel_view_note_what_head: string;
  parallel_view_note_what_p: string;
  parallel_view_note_why_head: string;
  parallel_view_note_why_p1: string;
  parallel_view_note_why_p2: string;
  parallel_view_note_diverge_head: string;
  parallel_view_note_diverge_p1: string;
  parallel_view_note_diverge_p2: string;
  parallel_view_note_reveals_head: string;
  parallel_view_note_reveals_p1: string;
  parallel_view_note_reveals_p2: string;
  parallel_view_note_scholarship_head: string;
  parallel_view_cite_george_html: string;
  parallel_view_cite_speiser_html: string;
  parallel_view_cite_tigay_html: string;
  parallel_view_cite_heidel_html: string;

  /* ── Grief parallel view ─────────────────────────────────────────── */
  iliad_parallel_heading: string;
  iliad_parallel_attributed_pantelia: string;
  iliad_parallel_view_back: string;
  iliad_parallel_label_greek: string;
  iliad_parallel_label_mesop: string;
  iliad_parallel_iliad_sub: string;
  iliad_parallel_iliad_date: string;
  iliad_parallel_credit_iliad: string;
  iliad_parallel_attr_iliad: string;
  iliad_parallel_epi_sub_enkidu: string;
  iliad_parallel_attr_gilgamesh: string;
  iliad_parallel_fragment_link: string;
  iliad_parallel_gilgamesh_phase_note: string;
  iliad_parallel_note_what_head: string;
  iliad_parallel_note_what_p1: string;
  iliad_parallel_note_what_p2: string;
  iliad_parallel_note_why_head: string;
  iliad_parallel_note_why_p1: string;
  iliad_parallel_note_why_p2: string;
  iliad_parallel_note_diverge_head: string;
  iliad_parallel_note_diverge_p1: string;
  iliad_parallel_note_diverge_p2: string;
  iliad_parallel_note_reveals_head: string;
  iliad_parallel_note_reveals_p1: string;
  iliad_parallel_note_reveals_p2: string;
  iliad_parallel_note_reveals_p3: string;
  iliad_parallel_cite_nagy_html: string;
  iliad_parallel_cite_schein_html: string;
  iliad_parallel_cite_george_iliad_html: string;
  iliad_parallel_cite_shay_html: string;
}

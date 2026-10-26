---
layout: page
title: 연구장비
permalink: /facilities/
description: Advanced research instrumentation, fabrication tools, and analytical equipment of ACE² Lab
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% assign all_facilities = site.data.facilities %}
{% assign synthesis_items = all_facilities | where: "category", "Synthesis & Thermal/Photonic Processing" %}
{% assign thermal_items = all_facilities | where: "category", "Sample Preparation & Drying" %}
{% assign char_items = all_facilities | where: "category", "Characterization & Measurement" %}
{% assign utility_items = all_facilities | where: "category", "Infrastructure & Utility" %}
{% assign r403_items = all_facilities | where: "location", "7호관 403호" %}
{% assign r414_items = all_facilities | where: "location", "7호관 414호" %}
{% assign r313_items = all_facilities | where: "location", "8호관 313호" %}
{% assign facility_groups = all_facilities | group_by: "category" %}

{% capture hero_subtitle %}{{ all_facilities.size }}대 첨단 연구 장비 및 나노소재 합성·초고속 광열처리·전기화학 분석 시스템{% endcapture %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-fire-burner" aria-hidden="true"></i> <span data-i18n="facilities.tab_synthesis">Synthesis & Processing</span> ({{ synthesis_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-flask" aria-hidden="true"></i> <span data-i18n="facilities.tab_thermal">Sample Prep & Drying</span> ({{ thermal_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-chart-line" aria-hidden="true"></i> <span data-i18n="facilities.tab_char">Characterization</span> ({{ char_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> <span data-i18n="facilities.tab_utility">Utility & Infrastructure</span> ({{ utility_items.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.facilities"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Research Facilities & Instrumentation"
  subtitle=hero_subtitle
  subtitle_en="State-of-the-art materials synthesis, ultrafast photonic sintering, and electrochemical characterization facilities."
  badges=hero_badges
%}

<div class="ed-page ace2-tab-container">

  <!-- Location Legend (room color semantics) -->
  <div class="fac-loc-legend" role="group" aria-label="Laboratory room color legend">
    <span class="fac-loc-legend__title"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> <span data-i18n="facilities.loc_title">Location</span></span>
    <span class="fac-loc-legend__item" data-room="r403"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>7호관 403호</span><span class="fac-loc-legend__count">{{ r403_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r414"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>7호관 414호</span><span class="fac-loc-legend__count">{{ r414_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r313"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>8호관 313호</span><span class="fac-loc-legend__count">{{ r313_items.size }}</span></span>
  </div>

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Research facilities tabs">
    <button type="button" role="tab" class="ace2-tab" id="tab-all" aria-controls="panel-all" aria-selected="false" tabindex="-1" data-hash="all" data-default="true">
      <span data-i18n="facilities.tab_all">All Instruments</span><span class="ace2-tab__count">{{ all_facilities.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-synthesis" aria-controls="panel-synthesis" aria-selected="false" tabindex="-1" data-hash="synthesis" data-aliases="material-synthesis,thermal-processing,processing">
      <span data-i18n="facilities.tab_synthesis">Synthesis & Processing</span><span class="ace2-tab__count">{{ synthesis_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-thermal" aria-controls="panel-thermal" aria-selected="false" tabindex="-1" data-hash="sample-prep" data-aliases="thermal,prep,drying">
      <span data-i18n="facilities.tab_thermal">Sample Prep & Drying</span><span class="ace2-tab__count">{{ thermal_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-characterization" aria-controls="panel-characterization" aria-selected="false" tabindex="-1" data-hash="characterization" data-aliases="measurement,analysis">
      <span data-i18n="facilities.tab_char">Characterization & Measurement</span><span class="ace2-tab__count">{{ char_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-utility" aria-controls="panel-utility" aria-selected="false" tabindex="-1" data-hash="utility" data-aliases="infrastructure,utilities">
      <span data-i18n="facilities.tab_utility">Infrastructure & Utility</span><span class="ace2-tab__count">{{ utility_items.size }}</span>
    </button>
  </div>

  <!-- Panel 0: All Instruments (Default & Print Master) -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-all" aria-labelledby="tab-all" tabindex="0">
    {% for group in facility_groups %}
      <section class="ed-section" id="all-{{ group.name | slugify }}">
        <h2 class="ed-section__title">
          <span data-i18n-term>{{ group.name | escape }}</span>
          <span class="ed-section__count">{{ group.items.size }}</span>
        </h2>
        {% include facility_table.liquid items=group.items caption=group.name %}
      </section>
    {% endfor %}
  </div>

  <!-- Panel 1: Synthesis & Thermal/Photonic Processing -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-synthesis" aria-labelledby="tab-synthesis" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_synthesis">Synthesis & Thermal/Photonic Processing</span>
        <span class="ed-section__count">{{ synthesis_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_synthesis">
        Intense pulsed light (IPL) photonic sintering, electrospinning, microwave hydrothermal synthesis, muffle and tube furnaces, inert atmosphere glove box, spin coating, corona surface treatment, and hydraulic electrode pressing.
      </p>
      {% include facility_table.liquid items=synthesis_items caption="Synthesis & Thermal/Photonic Processing" %}
    </section>
  </div>

  <!-- Panel 2: Sample Preparation & Drying -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-thermal" aria-labelledby="tab-thermal" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_thermal">Sample Preparation & Drying</span>
        <span class="ed-section__count">{{ thermal_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_thermal">
        High-power ultrasonic probe dispersion, refrigerated centrifugation, lyophilization (freeze drying), forced convection and vacuum drying ovens, and conductive sputter coating for electron microscopy.
      </p>
      {% include facility_table.liquid items=thermal_items caption="Sample Preparation & Drying" %}
    </section>
  </div>

  <!-- Panel 3: Characterization & Measurement -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-characterization" aria-labelledby="tab-characterization" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_char">Characterization & Measurement</span>
        <span class="ed-section__count">{{ char_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_char">
        Electrochemical potentiostats, source measure units (SMU), 4-point probe sheet resistance meters, hot-chuck gas sensor probe station, Mini-SEM, FT-IR and UV-Vis spectroscopy, BET surface area and zeta potential analyzers, and GC/HPLC chromatography.
      </p>
      {% include facility_table.liquid items=char_items caption="Characterization & Measurement" %}
    </section>
  </div>

  <!-- Panel 4: Infrastructure & Utility -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-utility" aria-labelledby="tab-utility" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_utility">Infrastructure & Laboratory Utility</span>
        <span class="ed-section__count">{{ utility_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_utility">
        Ultrapure deionized (DI) water purification systems, multi-channel mass flow and pressure controllers (MFC), certified gas cylinder cabinets, and dry toxic gas scrubbers.
      </p>
      {% include facility_table.liquid items=utility_items caption="Infrastructure & Utility" %}
    </section>
  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

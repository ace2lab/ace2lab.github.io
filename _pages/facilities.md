---
layout: page
title: facilities
permalink: /facilities/
description: Advanced research instrumentation, fabrication tools, and analytical equipment of ACE² Lab
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% assign all_facilities = site.data.facilities %}
{% assign synthesis_items = all_facilities | where: "category", "Material Synthesis" %}
{% assign thermal_items = all_facilities | where: "category", "Sample Preparation & Thermal Processing" %}
{% assign char_items = all_facilities | where: "category", "Characterization & Measurement" %}
{% assign utility_items = all_facilities | where: "category", "Infrastructure & Utility" %}
{% assign r403_items = all_facilities | where: "location", "7호관 403호" %}
{% assign r414_items = all_facilities | where: "location", "7호관 414호" %}
{% assign r313_items = all_facilities | where: "location", "8호관 313호" %}
{% assign facility_groups = all_facilities | group_by: "category" %}

{% capture hero_subtitle %}{{ all_facilities.size }}대 첨단 연구 장비 및 나노소재 합성·초고속 광열처리·전기화학 분석 시스템{% endcapture %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-flask" aria-hidden="true"></i> Material Synthesis ({{ synthesis_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-fire-burner" aria-hidden="true"></i> Sample Prep & Thermal ({{ thermal_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-chart-line" aria-hidden="true"></i> Characterization ({{ char_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> Utility & Infrastructure ({{ utility_items.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Research Facilities & Instrumentation"
  subtitle=hero_subtitle
  subtitle_en="State-of-the-art materials synthesis, ultrafast photonic sintering, and electrochemical characterization facilities."
  badges=hero_badges
%}

<div class="ed-page ace2-tab-container">

  <!-- Location Legend (room color semantics) -->
  <div class="fac-loc-legend" role="group" aria-label="Laboratory room color legend">
    <span class="fac-loc-legend__title"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Location</span>
    <span class="fac-loc-legend__item" data-room="r403"><span class="fac-loc-legend__dot" aria-hidden="true"></span>7호관 403호<span class="fac-loc-legend__count">{{ r403_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r414"><span class="fac-loc-legend__dot" aria-hidden="true"></span>7호관 414호<span class="fac-loc-legend__count">{{ r414_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r313"><span class="fac-loc-legend__dot" aria-hidden="true"></span>8호관 313호<span class="fac-loc-legend__count">{{ r313_items.size }}</span></span>
  </div>

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Research facilities tabs">
    <button type="button" role="tab" class="ace2-tab" id="tab-all" aria-controls="panel-all" aria-selected="false" tabindex="-1" data-hash="all" data-default="true">
      All Instruments<span class="ace2-tab__count">{{ all_facilities.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-synthesis" aria-controls="panel-synthesis" aria-selected="false" tabindex="-1" data-hash="synthesis" data-aliases="material-synthesis">
      Material Synthesis<span class="ace2-tab__count">{{ synthesis_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-thermal" aria-controls="panel-thermal" aria-selected="false" tabindex="-1" data-hash="thermal" data-aliases="sample-prep,thermal-processing,prep">
      Sample Prep & Thermal<span class="ace2-tab__count">{{ thermal_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-characterization" aria-controls="panel-characterization" aria-selected="false" tabindex="-1" data-hash="characterization" data-aliases="measurement,analysis">
      Characterization & Measurement<span class="ace2-tab__count">{{ char_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-utility" aria-controls="panel-utility" aria-selected="false" tabindex="-1" data-hash="utility" data-aliases="infrastructure,utilities">
      Infrastructure & Utility<span class="ace2-tab__count">{{ utility_items.size }}</span>
    </button>
  </div>

  <!-- Panel 0: All Instruments (Default & Print Master) -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-all" aria-labelledby="tab-all" tabindex="0">
    {% for group in facility_groups %}
      <section class="ed-section" id="all-{{ group.name | slugify }}">
        <h2 class="ed-section__title">
          {{ group.name | escape }}
          <span class="ed-section__count">{{ group.items.size }}</span>
        </h2>
        {% include facility_table.liquid items=group.items caption=group.name %}
      </section>
    {% endfor %}
  </div>

  <!-- Panel 1: Material Synthesis -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-synthesis" aria-labelledby="tab-synthesis" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        Material Synthesis
        <span class="ed-section__count">{{ synthesis_items.size }}</span>
      </h2>
      <p class="ed-lede">
        Advanced electrospinning, intense pulsed light flash photothermal processing, spin coating, and precision sputtering for nanomaterials.
      </p>
      {% include facility_table.liquid items=synthesis_items caption="Material Synthesis" %}
    </section>
  </div>

  <!-- Panel 2: Sample Prep & Thermal Processing -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-thermal" aria-labelledby="tab-thermal" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        Sample Preparation & Thermal Processing
        <span class="ed-section__count">{{ thermal_items.size }}</span>
      </h2>
      <p class="ed-lede">
        Corona surface treatment, ultrasonic probe cell disruptors, freeze dryers, high-temperature muffle furnaces, and vacuum curing ovens.
      </p>
      {% include facility_table.liquid items=thermal_items caption="Sample Preparation & Thermal Processing" %}
    </section>
  </div>

  <!-- Panel 3: Characterization & Measurement -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-characterization" aria-labelledby="tab-characterization" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        Characterization & Measurement
        <span class="ed-section__count">{{ char_items.size }}</span>
      </h2>
      <p class="ed-lede">
        Multi-channel electrochemical potentiostats, Mini-SEM, FTIR/UV-Vis spectroscopy, BET surface area analyzers, GC/HPLC chromatography, and 4-point probe sheet resistance meters.
      </p>
      {% include facility_table.liquid items=char_items caption="Characterization & Measurement" %}
    </section>
  </div>

  <!-- Panel 4: Infrastructure & Utility -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-utility" aria-labelledby="tab-utility" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        Infrastructure & Laboratory Utility
        <span class="ed-section__count">{{ utility_items.size }}</span>
      </h2>
      <p class="ed-lede">
        High-purity inert atmosphere glove boxes, deionized (DI) water purification systems, certified gas cabinets, dry toxic gas scrubbers, and mass flow controller (MFC) delivery lines.
      </p>
      {% include facility_table.liquid items=utility_items caption="Infrastructure & Utility" %}
    </section>
  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

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

{% capture hero_subtitle %}<span data-i18n-ko="{{ all_facilities.size }}대 첨단 연구 장비 및 나노소재 합성·초고속 광열처리·전기화학 분석 시스템" data-i18n-en="{{ all_facilities.size }} state-of-the-art nanomaterials synthesis, ultrafast photonic sintering, and electrochemical characterization systems" data-i18n-ja="{{ all_facilities.size }}台の先端研究設備およびナ노材料合成・超高速光熱処理・電気化学分析システム" data-i18n-zh="{{ all_facilities.size }}台先进科研仪器及纳米材料合成、超快光热烧结与电化学表征分析系统">{{ all_facilities.size }}대 첨단 연구 장비 및 나노소재 합성·초고속 광열처리·전기화학 분석 시스템</span>{% endcapture %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-fire-burner" aria-hidden="true"></i> <span data-i18n="facilities.tab_synthesis">합성 및 광열 공정</span> ({{ synthesis_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-flask" aria-hidden="true"></i> <span data-i18n="facilities.tab_thermal">시료 전처리 및 건조</span> ({{ thermal_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-chart-line" aria-hidden="true"></i> <span data-i18n="facilities.tab_char">물성 분석 및 측정</span> ({{ char_items.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-shield-halved" aria-hidden="true"></i> <span data-i18n="facilities.tab_utility">인프라 및 유틸리티</span> ({{ utility_items.size }})</span>
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

<div class="ed-page ace2-tab-container is-tabbed">

  <!-- Location Legend (room color semantics) -->
  <div class="fac-loc-legend" role="group" aria-label="Laboratory room color legend">
    <span class="fac-loc-legend__title"><i class="fa-solid fa-location-dot" aria-hidden="true"></i> <span data-i18n="facilities.loc_title">실험실 위치</span></span>
    <span class="fac-loc-legend__item" data-room="r403"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>7호관 403호</span><span class="fac-loc-legend__count">{{ r403_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r414"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>7호관 414호</span><span class="fac-loc-legend__count">{{ r414_items.size }}</span></span>
    <span class="fac-loc-legend__item" data-room="r313"><span class="fac-loc-legend__dot" aria-hidden="true"></span><span data-i18n-term>8호관 313호</span><span class="fac-loc-legend__count">{{ r313_items.size }}</span></span>
  </div>

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Research facilities tabs">
    <button type="button" role="tab" class="ace2-tab is-active" id="tab-all" aria-controls="panel-all" aria-selected="true" tabindex="0" data-hash="all" data-default="true">
      <span data-i18n="facilities.tab_all">전체 장비 (All Instruments)</span><span class="ace2-tab__count">{{ all_facilities.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-synthesis" aria-controls="panel-synthesis" aria-selected="false" tabindex="-1" data-hash="synthesis" data-aliases="material-synthesis,thermal-processing,processing">
      <span data-i18n="facilities.tab_synthesis">합성 및 광열 공정</span><span class="ace2-tab__count">{{ synthesis_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-thermal" aria-controls="panel-thermal" aria-selected="false" tabindex="-1" data-hash="sample-prep" data-aliases="thermal,prep,drying">
      <span data-i18n="facilities.tab_thermal">시료 전처리 및 건조</span><span class="ace2-tab__count">{{ thermal_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-characterization" aria-controls="panel-characterization" aria-selected="false" tabindex="-1" data-hash="characterization" data-aliases="measurement,analysis">
      <span data-i18n="facilities.tab_char">물성 분석 및 측정</span><span class="ace2-tab__count">{{ char_items.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-utility" aria-controls="panel-utility" aria-selected="false" tabindex="-1" data-hash="utility" data-aliases="infrastructure,utilities">
      <span data-i18n="facilities.tab_utility">인프라 및 유틸리티</span><span class="ace2-tab__count">{{ utility_items.size }}</span>
    </button>
  </div>

  <!-- Panel 0: All Instruments (Default & Print Master) -->
  <div class="ace2-tabpanel is-active" role="tabpanel" id="panel-all" aria-labelledby="tab-all" tabindex="0">
    {% for group in facility_groups %}
      {% assign grp_term = site.data.i18n.terms[group.name] %}
      <section class="ed-section" id="all-{{ group.name | slugify }}">
        <h2 class="ed-section__title">
          <span data-i18n-term data-orig-term="{{ group.name | escape }}">{{ grp_term.ko | default: group.name | escape }}</span>
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
        <span data-i18n="facilities.sec_synthesis">나노소재 합성 및 광열 공정 장비 (Synthesis & Thermal/Photonic Processing)</span>
        <span class="ed-section__count">{{ synthesis_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_synthesis">
        초고속 펄스광(IPL) 광소결 시스템, 전기방사기, 마이크로파 수열합성기, 머플/튜브 전기로, 불활성 분위기 글로브박스, 스핀 코터, 코로나 표면처리기 및 전극 압착 프레스.
      </p>
      {% include facility_table.liquid items=synthesis_items caption="Synthesis & Thermal/Photonic Processing" %}
    </section>
  </div>

  <!-- Panel 2: Sample Preparation & Drying -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-thermal" aria-labelledby="tab-thermal" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_thermal">시료 전처리 및 정밀 건조 장비 (Sample Preparation & Drying)</span>
        <span class="ed-section__count">{{ thermal_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_thermal">
        고출력 초음파 프로브 분산기, 냉각 고속 원심분리기, 동결건조기(Lyophilizer), 강제순환 및 진공 건조 오븐, 전자현미경 전처리용 이온 스퍼터 코터.
      </p>
      {% include facility_table.liquid items=thermal_items caption="Sample Preparation & Drying" %}
    </section>
  </div>

  <!-- Panel 3: Characterization & Measurement -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-characterization" aria-labelledby="tab-characterization" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_char">전기화학·광학·물성 분석 및 센서 측정 장비 (Characterization & Measurement)</span>
        <span class="ed-section__count">{{ char_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_char">
        전기화학 포텐쇼스탯/충방전기, 정밀 소스미터(SMU), 4탐침 면저항 측정기, 핫척 가스 센서 프로브 스테이션, 주사전자현미경(Mini-SEM), FT-IR·UV-Vis 분광기, BET 비표면적 및 제타전위 분석기, GC/HPLC 크로마토그래피.
      </p>
      {% include facility_table.liquid items=char_items caption="Characterization & Measurement" %}
    </section>
  </div>

  <!-- Panel 4: Infrastructure & Utility -->
  <div class="ace2-tabpanel fac-panel-cat" role="tabpanel" id="panel-utility" aria-labelledby="tab-utility" tabindex="0" hidden>
    <section class="ed-section">
      <h2 class="ed-section__title">
        <span data-i18n="facilities.sec_utility">실험실 안전 인프라 및 유틸리티 (Infrastructure & Laboratory Utility)</span>
        <span class="ed-section__count">{{ utility_items.size }}</span>
      </h2>
      <p class="ed-lede" data-i18n="facilities.lede_utility">
        초순수(DI Water) 제조 시스템, 다채널 질량유량/압력 제어기(MFC), 고압 독성·특수가스 실린더 캐비닛 및 건식 유해가스 스크러버.
      </p>
      {% include facility_table.liquid items=utility_items caption="Infrastructure & Utility" %}
    </section>
  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

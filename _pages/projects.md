---
layout: page
title: 연구분야
permalink: /research/
description: >-
  경북대학교(경북대) 에너지화학공학과 ACE² Lab의 3대 화학공학·에너지공학 핵심 연구분야. 이차전지·슈퍼커패시터용 에너지 저장 소재(2D MXene·MOF), 초고속 광열(IPL) 나노공정, 웨어러블 유연 생체·환경 가스 센서 소자 기술을 임창용·김태욱 교수 연구팀이 연구합니다.
keywords: >-
  경북대학교 에너지화학공학과 연구분야, 경북대 화학공학 연구실, 경북대학교 에너지공학부, 경북대 에너지공학부, 경북대 에너지공학 연구실, 대구경북 화학공학 연구실, 에너지 저장 소재, 이차전지 음극재, 슈퍼커패시터,
  고강도 펄스광, IPL 광소결, 2D MXene, MOF, 레이저 유도 그래핀, 유연 센서, 웨어러블 바이오센서, 가스 센서
nav: true
nav_order: 3
ace2_editorial: true
---

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-battery-half" aria-hidden="true"></i> <span data-i18n="research.badge_p1">에너지 저장 소재 (Pillar 01)</span></span>
<span class="hero-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i> <span data-i18n="research.badge_p2">광열 소결 공정 (Pillar 02)</span></span>
<span class="hero-badge"><i class="fa-solid fa-wave-square" aria-hidden="true"></i> <span data-i18n="research.badge_p3">유연 센서 소자 (Pillar 03)</span></span>
<a href="{{ '/facilities/' | relative_url }}" class="hero-badge"><i class="fa-solid fa-cubes-stacked" aria-hidden="true"></i> <span data-i18n-ko="연구장비 바로가기 ({{ site.data.facilities.size }}대)" data-i18n-en="View Lab Facilities ({{ site.data.facilities.size }})" data-i18n-ja="研究設備を見る ({{ site.data.facilities.size }}台)" data-i18n-zh="查看实验仪器 ({{ site.data.facilities.size }}台)">연구장비 바로가기 ({{ site.data.facilities.size }}대)</span> <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.research"
  label="ACE² LAB · RESEARCH PILLARS"
  title="Core Research Areas & Scientific Innovations"
  subtitle="차세대 에너지 저장 및 변환 소재부터 초고속 광열처리 나노공정, 유연 생체·환경 센서 소자까지"
  subtitle_en="Pioneering ultrafast photonic nanomanufacturing, multifunctional energy storage, and flexible sensory electronics."
  badges=hero_badges
%}

<div class="ed-page ace2-tab-container is-tabbed">

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Research pillar tabs">
    <button type="button" role="tab" class="ace2-tab is-active" id="tab-energy-storage" aria-controls="panel-energy-storage" aria-selected="true" tabindex="0" data-hash="energy-storage" data-default="true" data-aliases="energy,battery,supercapacitor">
      <i class="fa-solid fa-battery-three-quarters" aria-hidden="true"></i> <span data-i18n="research.tab.p1">에너지 저장 및 기능성 소재</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-photonic" aria-controls="panel-photonic" aria-selected="false" tabindex="-1" data-hash="photonic" data-aliases="photonic-processing,ipl,laser">
      <i class="fa-solid fa-bolt" aria-hidden="true"></i> <span data-i18n="research.tab.p2">초고속 광열 나노공정</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-sensors" aria-controls="panel-sensors" aria-selected="false" tabindex="-1" data-hash="sensors" data-aliases="flexible-sensors,devices">
      <i class="fa-solid fa-wave-square" aria-hidden="true"></i> <span data-i18n="research.tab.p3">유연 센서 및 스마트 소자</span>
    </button>
  </div>

  <!-- Panel 1: Energy Storage & Materials -->
  <div class="ace2-tabpanel is-active" role="tabpanel" id="panel-energy-storage" aria-labelledby="tab-energy-storage" tabindex="0">
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p1.kicker">Pillar 01 · Energy Systems</span>
        <h2 class="ed-pillar__title" data-i18n="research.p1.title">차세대 에너지 저장 및 기능성 나노소재 (Advanced Energy Storage & Nanomaterials)</h2>
        <p class="ed-pillar__desc" data-i18n="research.p1.lead">
          본 연구실은 차세대 전기화학 에너지 저장 및 환경 촉매 시스템을 위한 저차원 나노소재의 합리적 구조 설계와 계면 공학에 집중하고 있습니다. 빠른 이온 전달 동역학과 장기 충·방전 안정성을 갖춘 하이브리드 슈퍼커패시터, 다공성 2D MXene 이차전지 음극재, 그리고 고내구성 환경·에너지 변환 촉매를 개발합니다.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p1_f1_thumb = '/assets/img/research/area1_energy_storage.jpg' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p1_f1_thumb != "" %}<source srcset="{{ p1_f1_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/research/area1_energy_storage.jpg' | relative_url }}"
                alt="Room-temperature synthesis of Co-MOF and Ni-Co sulfide composite nanopetal arrays on Ni foam for hybrid coin-cell supercapacitors"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p1.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 1(a).</span> 하이브리드 코인셀 슈퍼커패시터 응용을 위한 3D 니켈 폼 위 Co-MOF/Ni–Co 황화물(NCS) 복합 나노페탈 어레이의 상온 연속 합성 <a href="https://doi.org/10.1016/j.est.2024.111764" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>J. Energy Storage</em>, 2024)</a>.
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p1_f2_thumb = '/assets/img/publication_preview/hong2024flashlight.jpg' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p1_f2_thumb != "" %}<source srcset="{{ p1_f2_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/publication_preview/hong2024flashlight.jpg' | relative_url }}"
                alt="Flashlight-induced structuring of dense Ti₃C₂Tₓ MXene film into porous MXene/TiO₂ nanocomposite for Li-ion battery anodes"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p1.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 1(b).</span> 리튬이온전지 음극 응용을 위해 재적층된 Ti₃C₂Tₓ MXene 필름을 3차원 다공성 MXene/TiO₂ 나노복합체로 순간 전환하는 제논 플래시광(IPL) 구조화 공정 <a href="https://doi.org/10.1016/j.cej.2024.149598" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>Chem. Eng. J.</em>, 2024)</a>.
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t1.title">하이브리드 슈퍼커패시터 및 구조형 전극</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t1.body">
            금속-유기 골격체(Co-MOF) 및 전이금속 황화물(Ni–Co sulfide) 복합 나노페탈 어레이 합성과 더불어, 레이저 및 초고속 펄스광(IPL)으로 설계된 Co₃O₄·Co(OH)₂ 탄소나노섬유 전극을 통해 출력 특성 저하 없이 높은 에너지 밀도를 구현합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t2.title">2D MXene 및 차세대 이차전지 음극재</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t2.body">
            2차원 Ti₃C₂Tₓ 및 바나듐계 MXene의 토포케미컬 전환, 수직 배향 및 광열 다공성 구조화를 통해 나노시트 재적층(restacking)을 방지하고 리튬이온 및 전고체전지의 충·방전 부피 팽창을 완충합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t3.title">환경 촉매(De-NOₓ SCR) 및 적층제조 소재 내구성</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t3.body">
            질소산화물(NOₓ)의 선택적 촉매 환원(SCR)을 위한 V₂O₅–WO₃/TiO₂ 촉매 설계, 산업용 나트륨계 탈황 흡착제 재생 공정, 그리고 3D 적층제조 합금의 in-situ 수소취화 저항성 진단 기술을 연구합니다.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">대표 발표 논문 (Representative Publications)</span></h3>
      <ul class="ed-pillar__pub-list">
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Journal of Energy Storage (2024)</span>
          <span class="ed-pillar__pub-title">Cobalt-Based Metal-Organic Framework/Nickel-Cobalt Sulphide Composite Nanopetal Arrays for High-Performance Hybrid Coin Cell Supercapacitor</span>
          <a href="https://doi.org/10.1016/j.est.2024.111764" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1016/j.est.2024.111764 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Chemical Engineering Journal (2024)</span>
          <span class="ed-pillar__pub-title">Flashlight Treatment for Instantaneous Structuring of Dense MXene Film into Porous MXene/TiO<sub>2</sub> Nanocomposite for Lithium-Ion Battery Anodes</span>
          <a href="https://doi.org/10.1016/j.cej.2024.149598" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1016/j.cej.2024.149598 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">ACS Applied Energy Materials (2024)</span>
          <span class="ed-pillar__pub-title">Laser-Assisted Rapid Fabrication of Cobalt Hydroxide@Carbon Fiber Composites for High-Performance, Robust Structural Supercapacitors</span>
          <a href="https://doi.org/10.1021/acsaem.4c02261" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsaem.4c02261 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>

      <footer class="ed-pillar__footer-action">
        <a href="{{ '/facilities/#characterization' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-microscope" aria-hidden="true"></i> <span data-i18n="research.p1.cross_inst">핵심 장비: 충방전기·포텐쇼스탯, 글로브박스 및 BET 비표면적 분석기 →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p1.cross_pubs">연구성과 페이지에서 에너지 분야 논문 전체 보기 →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 2: Photonic Nanomanufacturing -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-photonic" aria-labelledby="tab-photonic" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p2.kicker">Pillar 02 · Photonic Processing</span>
        <h2 class="ed-pillar__title" data-i18n="research.p2.title">초고속 광열 나노공정 (Ultrafast Photonic Nanomanufacturing)</h2>
        <p class="ed-pillar__desc" data-i18n="research.p2.lead">
          기존의 고온 전기로 열처리 공정은 수 시간이 소요되며 열에 취약한 유연 고분자 기판을 손상시키고 원치 않는 상분리를 유발합니다. ACE² Lab은 상온·밀리초(ms) 단위의 나노제조 플랫폼으로서 초고속 제논 펄스광(IPL) 광열 소결과 레이저 유도 그래핀(LIG) 공정을 선도하고 있습니다.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p2_f1_thumb = '/assets/img/research/area2_photonic_ipl.jpg' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p2_f1_thumb != "" %}<source srcset="{{ p2_f1_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/research/area2_photonic_ipl.jpg' | relative_url }}"
                alt="Millisecond flashlight annealing of PbS colloidal quantum dot solids for surface trap suppression and solar cell efficiency enhancement"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p2.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 2(a).</span> 콜로이드 양자점(PbS CQD) 박막의 열유도 표면 트랩 억제를 위한 밀리초 플래시광 어닐링(FLA) 광열 표면 처리 <a href="https://doi.org/10.1002/smll.202400380" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>Small</em>, 2024, 표지논문 선정)</a>.
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p2_f2_thumb = '/assets/img/research/ipl_cu_ag_sintering.png' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p2_f2_thumb != "" %}<source srcset="{{ p2_f2_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/research/ipl_cu_ag_sintering.png' | relative_url }}"
                alt="Xenon flash lamp photothermal reduction and sintering of oxidation-resistant Cu-Ag hybrid conductive tracks"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p2.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 2(b).</span> 포름산구리 및 Cu–Ag 하이브리드 나노입자의 제논 플래시 램프 광열 환원·소결을 통한 내산화성 고전도성 전극 형성 <a href="https://doi.org/10.1021/acsami.6b07826" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>ACS Appl. Mater. Interfaces</em>, 2016)</a>.
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t1.title">초고속 펄스광(IPL) 소결 및 상전이 제어</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t1.body">
            광대역 제논 플래시 램프에서 방출되는 고에너지 밀리초 광학 펄스를 통해 선택적 광열 전환을 유도하며, 열변색 스마트 윈도우용 VO₂(B) → VO₂(M) 초고속 상전이 제어 및 유연 기판 위 내산화성 금속 배선 소결을 달성합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t2.title">광열 표면 개질 및 결함 제어 공학</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t2.body">
            밀리초 펄스광 표면 처리와 계면 공학을 통해 하부 기능성 박막 손상 없이 열유도 표면 트랩 준위를 치유하고 산소 공공(Oxygen vacancy) 농도를 제어하며 다공성 2D MXene/산화물 나노복합체를 구조화합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t3.title">플래시 및 레이저 유도 그래핀 (FIG / LIG)</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t3.body">
            폴리이미드 필름, 셀룰로오스 종이 및 인쇄 토너를 대기 중에서 마스크 없이 광열 흑연화하여 마이크로 슈퍼커패시터, 수분 유도 발전 소자 및 웨어러블 전자소자용 3차원 다공성 그래핀 전극을 직접 제작합니다.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">대표 발표 논문 (Representative Publications)</span></h3>
      <ul class="ed-pillar__pub-list">
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Small (2024, Front Cover)</span>
          <span class="ed-pillar__pub-title">Suppression of Thermally Induced Surface Traps in Colloidal Quantum Dot Solids via Ultrafast Pulsed Light</span>
          <a href="https://doi.org/10.1002/smll.202400380" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1002/smll.202400380 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">ACS Applied Electronic Materials (2023)</span>
          <span class="ed-pillar__pub-title">Highly Efficient Moisture-Induced Power Generators through Flashlight-Induced Graphitization of FeCl₃-Impregnated Cellulose Papers</span>
          <a href="https://doi.org/10.1021/acsaelm.3c00920" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsaelm.3c00920 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">ACS Applied Energy Materials (2023)</span>
          <span class="ed-pillar__pub-title">Exploring the Effect of Ultrafast Intensive Pulsed Light (IPL) Annealing on the Structure and Performance of Cobalt Oxide Electrodes for Supercapacitors</span>
          <a href="https://doi.org/10.1021/acsaem.3c00656" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsaem.3c00656 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>

      <footer class="ed-pillar__footer-action">
        <a href="{{ '/facilities/#synthesis' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-bolt" aria-hidden="true"></i> <span data-i18n="research.p2.cross_inst">핵심 장비: PSTEK 제논 플래시광(IPL) 시스템, 스퍼터 코터 및 스핀 코터 →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p2.cross_pubs">연구성과 페이지에서 광열 나노공정 논문 전체 보기 →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 3: Flexible Sensors & Devices -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-sensors" aria-labelledby="tab-sensors" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p3.kicker">Pillar 03 · Sensor Technologies</span>
        <h2 class="ed-pillar__title" data-i18n="research.p3.title">유연 센서 및 생체·환경 모니터링 소자 (Flexible Sensors & Bio-Environmental Devices)</h2>
        <p class="ed-pillar__desc" data-i18n="research.p3.lead">
          ACE² Lab은 실시간 헬스케어 생체신호 모니터링, 호기(날숨) 기반 질병 진단, 유해 환경가스 감지를 위한 유연 웨어러블 센싱 시스템을 설계합니다. 2D MXene, 레이저 유도 그래핀(LIG), 반도체 나노구조체와 머신러닝 데이터 분석을 결합하여 높은 민감도·선택성·기계적 신뢰성을 달성합니다.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p3_f1_thumb = '/assets/img/research/area3_flexible_sensors.jpg' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p3_f1_thumb != "" %}<source srcset="{{ p3_f1_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/research/area3_flexible_sensors.jpg' | relative_url }}"
                alt="MXene-coated mulberry paper flexible tactile sensor with wireless Bluetooth communication for real-time CPR feedback"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p3.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 3(a).</span> 실시간 심폐소생술(CPR) 압박 깊이·속도 피드백을 위해 무선 모바일 텔레메트리와 결합된 다층 MXene/한지(닥종이) 기반 유연 촉각 센서 <a href="https://doi.org/10.1002/smll.74205" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>Small</em>, 2026)</a>.
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            {% assign p3_f2_thumb = '/assets/img/publication_preview/Shanmugasundaram_2026_cej.jpg' | ace2_thumb_webp %}
            <picture class="ace2-pic">
              {% if p3_f2_thumb != "" %}<source srcset="{{ p3_f2_thumb | relative_url }}" type="image/webp">{% endif %}
              <img
                src="{{ '/assets/img/publication_preview/Shanmugasundaram_2026_cej.jpg' | relative_url }}"
                alt="Nanostructured composite electronic nose sensor array and machine learning pipeline for exhaled nitric oxide breath analysis"
                loading="lazy"
                decoding="async"
                data-zoomable
              >
            </picture>
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p3.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 3(b).</span> 호기 일산화질소(NO) 분석 및 호흡기 질환 진단을 위한 나노구조 복합 전자코(E-nose) 어레이 및 머신러닝 특징 추출 파이프라인 <a href="https://doi.org/10.1016/j.cej.2026.176545" target="_blank" rel="noopener" class="ed-pillar__fig-doi">(<em>Chem. Eng. J.</em>, 2026)</a>.
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t1.title">유연 촉각 및 호흡 헬스케어 센서</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t1.body">
            실시간 심폐소생술(CPR) 피드백 등 광대역 압력 감지가 가능한 다층 MXene 코팅 한지 촉각 센서와, 인체 호흡을 연속 추적하는 레이저 직접 패터닝 3D 다공성 그래핀(LIG) 습도 센서를 개발합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t2.title">인공지능(AI) 결합 나노 전자코 및 호기 진단</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t2.body">
            InGaN/GaN 다중양자우물(MQW) 나노와이어, Ga₂O₃/Ti₃C₂Tₓ MXene 이종접합, Pd/rGO 기능화 중공 SnO₂ 나노구체를 머신러닝 알고리즘과 결합하여 sub-ppm급 NO, NO₂, NH₃ 및 아세톤 바이오마커를 고선택성으로 판별합니다.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t3.title">마이크로 공진기 및 나노다공성 흡착 플랫폼</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t3.body">
            수정진동자 미세저울(QCM) 및 마이크로캔틸레버 어레이 표면에 나노다공성 금속-유기 골격체(ZIF-8, MIL-53, Cu-BDC)를 직접 기능화하여 휘발성 유기화합물(VOC), CO₂ 및 병원체 면역반응을 초고감도로 정량 감지합니다.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">대표 발표 논문 (Representative Publications)</span></h3>
      <ul class="ed-pillar__pub-list">
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Small (2026)</span>
          <span class="ed-pillar__pub-title">MXene‐Coated, Multi‐Layered Mulberry Paper‐Based Flexible Tactile Sensor With High Sensitivity Over a Wide Pressure Range</span>
          <a href="https://doi.org/10.1002/smll.74205" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1002/smll.74205 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Chemical Engineering Journal (2026)</span>
          <span class="ed-pillar__pub-title">Nanostructured composite E-nose for selective exhaled nitric oxide detection and machine learning-assisted respiratory disease diagnosis</span>
          <a href="https://doi.org/10.1016/j.cej.2026.176545" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1016/j.cej.2026.176545 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Sensors and Actuators B: Chemical (2026)</span>
          <span class="ed-pillar__pub-title">InGaN-GaN-MQW-ZnO based e-nose sensors for nitrogen dioxide detection using advanced machine learning approaches</span>
          <a href="https://doi.org/10.1016/j.snb.2025.138650" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1016/j.snb.2025.138650 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">ACS Applied Nano Materials (2024)</span>
          <span class="ed-pillar__pub-title">Rapid and Flexible Humidity Sensor Based on Laser-Induced Graphene for Monitoring Human Respiration</span>
          <a href="https://doi.org/10.1021/acsanm.3c05283" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsanm.3c05283 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>

      <footer class="ed-pillar__footer-action">
        <a href="{{ '/facilities/#characterization' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-satellite-dish" aria-hidden="true"></i> <span data-i18n="research.p3.cross_inst">핵심 장비: 가스 센서 측정 시스템, Mini-SEM 및 Keysight 정밀 멀티미터 →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p3.cross_pubs">연구성과 페이지에서 센서 분야 논문 전체 보기 →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url | bust_file_cache }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url | bust_file_cache }}"></script>

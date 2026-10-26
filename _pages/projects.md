---
layout: page
title: 연구분야
permalink: /research/
description: Research pillars, ultrafast photonic nanomanufacturing, energy storage, and flexible sensory electronics at ACE² Lab
nav: true
nav_order: 3
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-battery-half" aria-hidden="true"></i> Energy Materials (Pillar 01)</span>
<span class="hero-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Photonic Sintering (Pillar 02)</span>
<span class="hero-badge"><i class="fa-solid fa-wave-square" aria-hidden="true"></i> Flexible Sensors (Pillar 03)</span>
<a href="{{ '/facilities/' | relative_url }}" class="hero-badge"><i class="fa-solid fa-cubes-stacked" aria-hidden="true"></i> View {{ site.data.facilities.size }} Lab Facilities <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
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

<div class="ed-page ace2-tab-container">

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Research pillar tabs">
    <button type="button" role="tab" class="ace2-tab" id="tab-energy-storage" aria-controls="panel-energy-storage" aria-selected="false" tabindex="-1" data-hash="energy-storage" data-default="true" data-aliases="energy,battery,supercapacitor">
      <i class="fa-solid fa-battery-three-quarters" aria-hidden="true"></i> <span data-i18n="research.tab.p1">Energy Storage & Materials</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-photonic" aria-controls="panel-photonic" aria-selected="false" tabindex="-1" data-hash="photonic" data-aliases="photonic-processing,ipl,laser">
      <i class="fa-solid fa-bolt" aria-hidden="true"></i> <span data-i18n="research.tab.p2">Photonic Nanomanufacturing</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-sensors" aria-controls="panel-sensors" aria-selected="false" tabindex="-1" data-hash="sensors" data-aliases="flexible-sensors,devices">
      <i class="fa-solid fa-wave-square" aria-hidden="true"></i> <span data-i18n="research.tab.p3">Flexible Sensors & Devices</span>
    </button>
  </div>

  <!-- Panel 1: Energy Storage & Materials -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-energy-storage" aria-labelledby="tab-energy-storage" tabindex="0">
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p1.kicker">Pillar 01 · Energy Systems</span>
        <h2 class="ed-pillar__title" data-i18n="research.p1.title">Advanced Energy Storage &amp; Nanomaterials</h2>
        <p class="ed-pillar__desc" data-i18n="research.p1.lead">
          Our laboratory focuses on rational architecture design and interface engineering of low-dimensional nanomaterials for next-generation electrochemical energy storage and catalytic systems. We develop hybrid supercapacitors, porous 2D MXene battery anodes, and durable energy-conversion catalysts with rapid ion-transport kinetics and long-term cyclic stability.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/research/area1_energy_storage.jpg' | relative_url }}"
              alt="Room-temperature synthesis of Co-MOF and Ni-Co sulfide composite nanopetal arrays on Ni foam for hybrid coin-cell supercapacitors"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p1.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 1(a).</span> Room-temperature sequential synthesis of Co-MOF/Ni–Co sulfide (NCS) composite nanopetal arrays on 3D Ni foam for hybrid coin-cell supercapacitors (<em>J. Energy Storage</em>, 2024).
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/publication_preview/hong2024flashlight.jpg' | relative_url }}"
              alt="Flashlight-induced structuring of dense Ti3C2Tx MXene film into porous MXene/TiO2 nanocomposite for Li-ion battery anodes"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p1.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 1(b).</span> Instantaneous flashlight-induced structuring of restacked Ti₃C₂Tₓ MXene into a 3D porous MXene/TiO₂ nanocomposite anode for Li-ion batteries (<em>Chem. Eng. J.</em>, 2024).
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t1.title">Hybrid Supercapacitors &amp; Structural Electrodes</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t1.body">
            Synthesis of metal-organic framework (Co-MOF) and transition metal sulfide (Ni–Co sulfide) composite nanopetal arrays, alongside laser- and IPL-engineered Co₃O₄ and Co(OH)₂ carbon nanofiber electrodes delivering high energy density without sacrificing power capability.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t2.title">2D MXene &amp; Next-Generation Battery Anodes</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t2.body">
            Topochemical conversion, vertical alignment, and photothermal structuring of 2D Ti₃C₂Tₓ and vanadium-based MXenes into porous MXene/TiO₂ architectures to prevent sheet restacking and buffer volumetric expansion in Li-ion and solid-state batteries.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p1.t3.title">Environmental Catalysis &amp; Structural Durability</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p1.t3.body">
            Rational design of V₂O₅–WO₃/TiO₂ catalysts for selective catalytic reduction (SCR) of NOₓ, regeneration of industrial Na-based desulfurization sorbents, and in-situ hydrogen embrittlement diagnostics of additively manufactured alloys.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">Representative Publications</span></h3>
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
          <span class="ed-pillar__pub-title">Flashlight Treatment for Instantaneous Structuring of Dense MXene Film into Porous MXene/TiO2 Nanocomposite for Lithium-Ion Battery Anodes</span>
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
          <i class="fa-solid fa-microscope" aria-hidden="true"></i> <span data-i18n="research.p1.cross_inst">Core Instruments: Potentiostats, Glove Box &amp; BET Analyzer →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p1.cross_pubs">View all energy publications in Publications →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 2: Photonic Nanomanufacturing -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-photonic" aria-labelledby="tab-photonic" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p2.kicker">Pillar 02 · Photonic Processing</span>
        <h2 class="ed-pillar__title" data-i18n="research.p2.title">Ultrafast Photonic Nanomanufacturing</h2>
        <p class="ed-pillar__desc" data-i18n="research.p2.lead">
          Conventional thermal annealing requires hours in high-temperature furnaces, damaging flexible polymer substrates and inducing unwanted phase segregation. ACE² Lab pioneers Intense Pulsed Light (IPL) flash sintering and laser-assisted photothermal processing as a room-temperature, millisecond-scale nanomanufacturing platform.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/research/area2_photonic_ipl.jpg' | relative_url }}"
              alt="Millisecond flashlight annealing of PbS colloidal quantum dot solids for surface trap suppression and solar cell efficiency enhancement"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p2.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 2(a).</span> Millisecond flashlight annealing (FLA) photothermal surface treatment of PbS colloidal quantum dot (CQD) films for surface trap suppression (<em>Small</em>, 2024, Front Cover).
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/research/ipl_cu_ag_sintering.png' | relative_url }}"
              alt="Xenon flash lamp photothermal reduction and sintering of oxidation-resistant Cu-Ag hybrid conductive tracks"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p2.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 2(b).</span> Xenon flash lamp photothermal reduction and sintering of copper formate / Cu–Ag hybrid nanoparticles into oxidation-resistant conductive electrodes (<em>ACS Appl. Mater. Interfaces</em>).
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t1.title">Intense Pulsed Light (IPL) Sintering &amp; Phase Engineering</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t1.body">
            Broad-spectrum xenon flash lamp irradiation delivering high-energy millisecond optical pulses for selective photothermal conversion, enabling ultrafast VO₂(B) → VO₂(M) phase engineering for thermochromic smart windows and oxidation-resistant metallic tracks on flexible substrates.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t2.title">Photothermal Surface &amp; Defect Engineering</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t2.body">
            Millisecond pulsed-light surface treatment and interface engineering to heal thermally induced surface trap states, control oxygen vacancies, and structure porous 2D MXene/oxide nanocomposites without damaging underlying functional layers.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p2.t3.title">Flash- &amp; Laser-Induced Graphene (FIG / LIG)</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p2.t3.body">
            Maskless, ambient-air photothermal graphitization of polyimide films, cellulose papers, and printed toner into 3D porous graphene electrodes for micro-supercapacitors, moisture-driven power generators, and wearable electronics.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">Representative Publications</span></h3>
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
          <i class="fa-solid fa-bolt" aria-hidden="true"></i> <span data-i18n="research.p2.cross_inst">Core Instruments: PSTEK Flashlight, Sputter Coater &amp; Spin Coater →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p2.cross_pubs">View all photonic publications in Publications →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 3: Flexible Sensors & Devices -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-sensors" aria-labelledby="tab-sensors" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag" data-i18n="research.p3.kicker">Pillar 03 · Sensor Technologies</span>
        <h2 class="ed-pillar__title" data-i18n="research.p3.title">Flexible Sensors &amp; Bio-Environmental Devices</h2>
        <p class="ed-pillar__desc" data-i18n="research.p3.lead">
          ACE² Lab designs flexible, wearable, and environmental sensing systems for real-time healthcare biomonitoring, exhaled breath diagnosis, and toxic gas detection. By combining 2D MXenes, laser-induced graphene, semiconductor nanostructures, and machine-learning analytics, we achieve high sensitivity, selectivity, and mechanical reliability.
        </p>
      </header>

      <div class="ed-pillar__figure-grid">
        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/research/area3_flexible_sensors.jpg' | relative_url }}"
              alt="MXene-coated mulberry paper flexible tactile sensor with wireless Bluetooth communication for real-time CPR feedback"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p3.fig1_cap">
            <span class="ed-pillar__fig-label">Figure 3(a).</span> Multi-layered MXene/mulberry-paper flexible tactile sensor integrated with wireless mobile telemetry for real-time CPR compression depth and rate feedback (<em>Small</em>, 2026).
          </figcaption>
        </figure>

        <figure class="ed-pillar__figure">
          <div class="ed-pillar__figure-canvas">
            <img
              src="{{ '/assets/img/publication_preview/Shanmugasundaram_2026_cej.jpg' | relative_url }}"
              alt="Nanostructured composite electronic nose sensor array and machine learning pipeline for exhaled nitric oxide breath analysis"
              loading="lazy"
              data-zoomable
            >
          </div>
          <figcaption class="ed-pillar__figure-caption" data-i18n-html="research.p3.fig2_cap">
            <span class="ed-pillar__fig-label">Figure 3(b).</span> Nanostructured composite electronic-nose (E-nose) array coupled with machine-learning feature extraction for exhaled nitric oxide (NO) breathomics and respiratory diagnosis (<em>Chem. Eng. J.</em>, 2026).
          </figcaption>
        </figure>
      </div>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t1.title">Flexible Tactile &amp; Respiration Healthcare Sensors</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t1.body">
            Multi-layered MXene-coated mulberry paper tactile sensors for wide-pressure-range wearable monitoring (such as real-time CPR feedback) and direct-laser-written 3D porous graphene (LIG) humidity sensors for continuous human respiration tracking.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t2.title">AI-Assisted Electronic Nose &amp; Breathomics</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t2.body">
            Integration of InGaN/GaN multi-quantum-well (MQW) nanowires, Ga₂O₃/Ti₃C₂Tₓ MXene heterostructures, and Pd/rGO-sensitized hollow SnO₂ nanospheres with machine-learning algorithms for selective sub-ppm NO, NO₂, NH₃, and acetone biomarker detection.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> <span data-i18n="research.p3.t3.title">Microresonator &amp; Nanoporous Sorbent Platforms</span></h3>
          <p class="ed-pillar__topic-body" data-i18n="research.p3.t3.body">
            Direct functionalization of quartz crystal microbalances (QCM) and microcantilever arrays with nanoporous metal-organic frameworks (ZIF-8, MIL-53, Cu-BDC) for gravimetric VOC, CO₂, and pathogen immunoassay sensing.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> <span data-i18n="research.rep_pubs">Representative Publications</span></h3>
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
          <i class="fa-solid fa-satellite-dish" aria-hidden="true"></i> <span data-i18n="research.p3.cross_inst">Core Instruments: Gas Sensor System, Mini-SEM &amp; Keysight DMM →</span>
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="research.p3.cross_pubs">View all sensor publications in Publications →</span>
        </a>
      </footer>
    </article>

  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

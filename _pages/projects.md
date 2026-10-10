---
layout: page
title: research
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
      <i class="fa-solid fa-battery-three-quarters" aria-hidden="true"></i> Energy Storage & Materials
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-photonic" aria-controls="panel-photonic" aria-selected="false" tabindex="-1" data-hash="photonic" data-aliases="photonic-processing,ipl,laser">
      <i class="fa-solid fa-bolt" aria-hidden="true"></i> Photonic Nanomanufacturing
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-sensors" aria-controls="panel-sensors" aria-selected="false" tabindex="-1" data-hash="sensors" data-aliases="flexible-sensors,devices">
      <i class="fa-solid fa-wave-square" aria-hidden="true"></i> Flexible Sensors & Devices
    </button>
  </div>

  <!-- Panel 1: Energy Storage & Materials -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-energy-storage" aria-labelledby="tab-energy-storage" tabindex="0">
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag">Pillar 01 · Energy Systems</span>
        <h2 class="ed-pillar__title">Advanced Energy Storage & Nanomaterials</h2>
        <p class="ed-pillar__desc">
          Our laboratory focuses on rational architecture design and interface engineering of nanomaterials for next-generation electrochemical energy storage systems. We develop high-performance electrodes with enhanced ion transport kinetics, high power density, and robust cyclic stability.
        </p>
      </header>

      <figure class="ed-pillar__figure">
        <img
          src="{{ '/assets/img/research/area1_energy_storage.jpg' | relative_url }}"
          alt="Advanced Energy Storage and Nanomaterials graphical abstract"
          loading="lazy"
          data-zoomable
        >
        <figcaption class="ed-pillar__figure-caption">
          <strong>Figure 1.</strong> Nanocomposite electrode architecture engineering: MOF-derived cobalt-nickel sulphide nanopetals and porous MXene/TiO₂ structures for supercapacitors and Li-ion batteries.
        </figcaption>
      </figure>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Hybrid Coin-Cell Supercapacitors</h3>
          <p class="ed-pillar__topic-body">
            Synthesis of metal-organic framework (MOF) derived nanostructures and transition metal sulphide composite arrays (e.g. Co-MOF/Ni-Co sulphide nanopetals) establishing ultra-stable interfaces delivering high energy density without sacrificing power capability.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> 2D MXene & Nanocomposite Anodes</h3>
          <p class="ed-pillar__topic-body">
            Instantaneous restructuring of dense 2D MXene sheets into highly porous, accessible conductive architectures. Development of porous MXene/TiO₂ nanocomposites to mitigate volumetric expansion in lithium-ion battery anodes.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> In-situ / Operando Diagnostics</h3>
          <p class="ed-pillar__topic-body">
            Dynamic cyclic voltammetry (CV), electrochemical impedance spectroscopy (EIS), and galvanostatic charge-discharge (GCD) profiling under extreme operating conditions.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> Representative Publications</h3>
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
          <span class="ed-pillar__pub-journal">ACS Applied Energy Materials (2023)</span>
          <span class="ed-pillar__pub-title">Exploring the Effect of Ultrafast Intensive Pulsed Light (IPL) Annealing on the Structure and Performance of Cobalt Oxide Electrodes for Supercapacitors</span>
          <a href="https://doi.org/10.1021/acsaem.3c00656" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsaem.3c00656 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>

      <footer class="ed-pillar__footer-action">
        <a href="{{ '/facilities/#characterization' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-microscope" aria-hidden="true"></i> Core Instruments: Potentiostats, Glove Box & BET Analyzer →
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> View all energy publications in Publications →
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 2: Photonic Nanomanufacturing -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-photonic" aria-labelledby="tab-photonic" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag">Pillar 02 · Photonic Processing</span>
        <h2 class="ed-pillar__title">Ultrafast Photonic Nanomanufacturing</h2>
        <p class="ed-pillar__desc">
          Conventional thermal annealing often requires hours in high-temperature furnaces, which damages flexible polymer substrates and induces undesirable phase segregation. ACE² Lab pioneers <strong>Intense Pulsed Light (IPL)</strong> flash sintering and photonic nanomanufacturing as a room-temperature, millisecond-scale alternative.
        </p>
      </header>

      <figure class="ed-pillar__figure">
        <img
          src="{{ '/assets/img/research/area2_photonic_ipl.jpg' | relative_url }}"
          alt="Ultrafast Photonic Nanomanufacturing graphical abstract"
          loading="lazy"
          data-zoomable
        >
        <figcaption class="ed-pillar__figure-caption">
          <strong>Figure 2.</strong> Xenon flash lamp photothermal conversion mechanism: microsecond pulsed optical energy for selective annealing and trap defect healing.
        </figcaption>
      </figure>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Intense Pulsed Light (IPL) Sintering</h3>
          <p class="ed-pillar__topic-body">
            Broad-spectrum xenon flash lamp delivering high-energy optical pulses (microsecond to millisecond durations). Photothermal conversion inducing instantaneous surface temperatures exceeding 800 °C while maintaining ambient bulk substrate temperature.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Colloidal Quantum Dot (CQD) Solids</h3>
          <p class="ed-pillar__topic-body">
            Suppression and healing of thermally induced surface traps in quantum dot thin films via pulsed photonic sintering. Significant enhancement of carrier mobility, charge extraction efficiency, and optoelectronic device longevity.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Flexible Polymer Nanomanufacturing</h3>
          <p class="ed-pillar__topic-body">
            Roll-to-roll compatible sintering of metal nanoparticles, conductive metal oxides, and 2D materials directly on low-temperature PET, PI, and paper substrates.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> Representative Publications</h3>
      <ul class="ed-pillar__pub-list">
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Small (2024, Front Cover)</span>
          <span class="ed-pillar__pub-title">Suppression of Thermally Induced Surface Traps in Colloidal Quantum Dot Solids via Ultrafast Pulsed Light</span>
          <a href="https://doi.org/10.1002/smll.202400380" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1002/smll.202400380 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">Chemical Engineering Journal (2024)</span>
          <span class="ed-pillar__pub-title">Flashlight Treatment for Instantaneous Structuring of Dense MXene Film into Porous MXene/TiO2 Nanocomposite for Lithium-Ion Battery Anodes</span>
          <a href="https://doi.org/10.1016/j.cej.2024.149598" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1016/j.cej.2024.149598 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      </ul>

      <footer class="ed-pillar__footer-action">
        <a href="{{ '/facilities/#synthesis' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-bolt" aria-hidden="true"></i> Core Instruments: PSTEK Flashlight, Sputter Coater & Spin Coater →
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> View all photonic publications in Publications →
        </a>
      </footer>
    </article>

  </div>

  <!-- Panel 3: Flexible Sensors & Devices -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-sensors" aria-labelledby="tab-sensors" tabindex="0" hidden>
    <article class="ed-pillar">
      <header class="ed-pillar__header">
        <span class="ed-pillar__tag">Pillar 03 · Sensor Technologies</span>
        <h2 class="ed-pillar__title">Flexible Sensors & Environmental Devices</h2>
        <p class="ed-pillar__desc">
          ACE² Lab designs flexible, wearable, and environmental sensors capable of real-time biomonitoring, chemical gas detection, and toxic emission control. By leveraging micro-nanostructured carbon materials and resonator platforms, we develop highly sensitive, selective, and robust sensing architectures.
        </p>
      </header>

      <figure class="ed-pillar__figure">
        <img
          src="{{ '/assets/img/research/area3_flexible_sensors.jpg' | relative_url }}"
          alt="Flexible Sensors and Environmental Devices graphical abstract"
          loading="lazy"
          data-zoomable
        >
        <figcaption class="ed-pillar__figure-caption">
          <strong>Figure 3.</strong> Flexible sensor architectures: Laser-Induced Graphene (LIG) for human respiration monitoring and microresonator platforms for sub-ppm chemical detection.
        </figcaption>
      </figure>

      <div class="ed-pillar__grid">
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Laser-Induced Graphene (LIG) Sensors</h3>
          <p class="ed-pillar__topic-body">
            Direct laser writing of 3D porous graphene on commercial polyimide films without requiring masks or vacuum environments. Ultra-rapid and highly flexible humidity sensors optimized for continuous human respiration and breath-pattern monitoring.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Microresonator Chemical Sensing</h3>
          <p class="ed-pillar__topic-body">
            Direct integration of Metal-Organic Frameworks (MOFs) and functional porous polymers on microcantilever and microresonator surfaces for sub-ppm chemical vapor discrimination and VOC monitoring.
          </p>
        </div>
        <div class="ed-pillar__topic-card">
          <h3 class="ed-pillar__topic-title"><i class="fa-solid fa-circle-dot" aria-hidden="true"></i> Environmental Catalysis & Emissions</h3>
          <p class="ed-pillar__topic-body">
            Advanced sorbent regeneration and industrial plant desulfurization technology for PM2.5/fine dust reduction and continuous environmental hazard monitoring.
          </p>
        </div>
      </div>

      <h3 class="ed-pillar__section-title"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i> Representative Publications</h3>
      <ul class="ed-pillar__pub-list">
        <li class="ed-pillar__pub-item">
          <span class="ed-pillar__pub-journal">ACS Applied Nano Materials (2024)</span>
          <span class="ed-pillar__pub-title">Rapid and Flexible Humidity Sensor Based on Laser-Induced Graphene for Monitoring Human Respiration</span>
          <a href="https://doi.org/10.1021/acsanm.3c05283" target="_blank" rel="noopener" class="ed-pillar__pub-link">
            DOI: 10.1021/acsanm.3c05283 <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
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
        <a href="{{ '/facilities/#characterization' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-satellite-dish" aria-hidden="true"></i> Core Instruments: Gas Sensor System, Mini-SEM & Keysight DMM →
        </a>
        <a href="{{ '/publications/#journals' | relative_url }}" class="ed-pillar__crosslink">
          <i class="fa-solid fa-newspaper" aria-hidden="true"></i> View all sensor publications in Publications →
        </a>
      </footer>
    </article>

  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

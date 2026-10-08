---
layout: about
title: about
permalink: /
subtitle: Advanced Chemical & Energy Engineering Laboratory | KNU

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # clean academic minimalism

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 6 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

<style>
  .post > header.post-header {
    display: none;
  }
</style>

<div class="ed-hero-banner">
  <div class="ed-hero-banner__inner">
    <div class="ed-hero-banner__label">KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB</div>
    <h1 class="ed-hero-banner__title">Advanced Chemical & Energy Engineering Laboratory</h1>
    <p class="ed-hero-banner__subtitle">
      차세대 화학 및 에너지 공학 연구실 · 경북대학교 과학기술대학 에너지화학공학과
      <br>
      <span style="font-size: 0.92rem; opacity: 0.85;">
        Department of Energy Chemical Engineering, College of Science and Technology, Kyungpook National University
      </span>
    </p>
    <div class="ed-hero-banner__badges">
      <span class="hero-badge"><i class="fa-solid fa-bolt"></i> Energy Storage</span>
      <span class="hero-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> Intense Pulsed Light (IPL)</span>
      <span class="hero-badge"><i class="fa-solid fa-microchip"></i> Flexible Sensors</span>
      <span class="hero-badge"><i class="fa-solid fa-atom"></i> Colloidal Quantum Dots</span>
    </div>
  </div>
</div>

## About the Laboratory

ACE² Lab은 경북대학교 과학기술대학 에너지화학공학과에서 '김태욱 부교수'와 '임창용 부교수'가 공동 연구책임자(Co-PIs)로 이끄는 융합 나노화학 및 에너지 공학 연구실입니다.

초고속 펄스광(Intense Pulsed Light, IPL) 기반 광열처리 나노공정, 레이저 유도 그래핀(Laser-Induced Graphene, LIG), 2D 맥신(MXene) 및 금속유기골격체(MOF) 기반 복합소재 설계를 바탕으로 차세대 하이브리드 슈퍼캐패시터, 고성능 리튬이온전지 음극, 고민감도 유연 생체·환경 센서 및 고품질 양자점 광전소자를 집중적으로 연구하고 있습니다.

The laboratory is jointly directed by two Principal Investigators:

{% assign pis = site.data.members | where: "group", "pi" | sort: "order" %}

<div class="pi-showcase">
  {% for pi in pis %}
    <div class="pi-showcase-card" id="pi-{{ pi.id }}">
      <div class="pi-showcase-card__portrait">
        <img
          src="{{ pi.photo | relative_url }}"
          alt="{{ pi.name_en }}"
          class="pi-showcase-card__img"
          loading="lazy"
        >
      </div>
      <div class="pi-showcase-card__content">
        <div>
          <div class="pi-showcase-card__role">
            <span class="pi-role-tag">Co-Principal Investigator</span>
            <span class="pi-rank-tag">{{ pi.title_en }} ({{ pi.title_ko }})</span>
          </div>
          <h3 class="pi-showcase-card__name">
            {{ pi.name_en }}
            <span class="pi-showcase-card__name-ko">{{ pi.name_ko }} 교수</span>
          </h3>
          <div class="pi-showcase-card__affil">
            {{ pi.affiliation_en }} ({{ pi.affiliation_ko }})
          </div>
          <p class="pi-showcase-card__bio">{{ pi.bio }}</p>
        </div>
        <div>
          <div class="pi-showcase-card__topics">
            {% for t in pi.topics %}
              <span class="pi-topic-pill">{{ t }}</span>
            {% endfor %}
          </div>
          <div class="pi-showcase-card__actions">
            {% if pi.email and pi.email != "" %}
              <a href="mailto:{{ pi.email }}" class="pi-action-btn" title="Email" aria-label="Email">
                <i class="fa-solid fa-envelope"></i> <span>Email</span>
              </a>
            {% endif %}
            {% if pi.links.scholar and pi.links.scholar != "" %}
              <a href="{{ pi.links.scholar }}" target="_blank" rel="noopener" class="pi-action-btn" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar"></i> <span>Scholar</span>
              </a>
            {% endif %}
            {% if pi.links.orcid and pi.links.orcid != "" %}
              <a href="{{ pi.links.orcid }}" target="_blank" rel="noopener" class="pi-action-btn" title="ORCID" aria-label="ORCID">
                <i class="ai ai-orcid"></i> <span>ORCID</span>
              </a>
            {% endif %}
            {% if pi.links.github and pi.links.github != "" %}
              <a href="{{ pi.links.github }}" target="_blank" rel="noopener" class="pi-action-btn" title="GitHub" aria-label="GitHub">
                <i class="fa-brands fa-github"></i> <span>GitHub</span>
              </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

---

## Core Research Areas

<div class="research-grid">
  <div class="research-card">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area1_energy_storage.jpg' | relative_url }}"
        alt="Energy Storage & Materials"
        loading="lazy"
        data-zoomable
      >
      <span class="research-card__badge">Area 01</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Energy Storage & Materials</h3>
      <div class="research-card__desc">
        차세대 하이브리드 코인셀 슈퍼캐패시터 및 다공성 MXene/TiO₂ 복합소재 리튬이온전지 음극 설계. 고출력·고에너지밀도 전기화학 소자 구현.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">Supercapacitors</span>
        <span class="research-topic-chip">Battery Anodes</span>
        <span class="research-topic-chip">MOF / MXene</span>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area2_photonic_ipl.jpg' | relative_url }}"
        alt="Photonic Nanomanufacturing"
        loading="lazy"
        data-zoomable
      >
      <span class="research-card__badge">Area 02</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Photonic Nanomanufacturing</h3>
      <div class="research-card__desc">
        초고속 제논 플래시 펄스광(IPL) 열처리를 활용한 저온·밀리초 급 나노소재 소결, 콜로이드 양자점 표면 결함 치유 및 유연 기판 상 직접 공정.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">IPL Processing</span>
        <span class="research-topic-chip">Quantum Dots</span>
        <span class="research-topic-chip">Roll-to-Roll</span>
      </div>
    </div>
  </div>

  <div class="research-card">
    <div class="research-card__media">
      <img
        src="{{ '/assets/img/research/area3_flexible_sensors.jpg' | relative_url }}"
        alt="Sensors & Devices"
        loading="lazy"
        data-zoomable
      >
      <span class="research-card__badge">Area 03</span>
    </div>
    <div class="research-card__content">
      <h3 class="research-card__title">Sensors & Devices</h3>
      <div class="research-card__desc">
        레이저 유도 그래핀(LIG) 기반 고감도 유연 호흡/습도 센서 및 마이크로레조네이터 화학 센서 어레이를 통한 실시간 환경·생체 모니터링.
      </div>
      <div class="research-card__topics">
        <span class="research-topic-chip">LIG Sensors</span>
        <span class="research-topic-chip">Respiration</span>
        <span class="research-topic-chip">Environmental</span>
      </div>
    </div>
  </div>
</div>

For detailed project descriptions and laboratory facilities, please visit our [Research](/research/) page. Meet our team members on the [Members](/members/) page.

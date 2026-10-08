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

<div class="pi-duo-grid">
  {% for pi in pis %}
    <div class="pi-card" id="pi-{{ pi.id }}">
      <div class="pi-card__header">
        <img
          src="{{ pi.photo | relative_url }}"
          alt="{{ pi.name_en }}"
          class="pi-card__avatar"
          loading="lazy"
        >
        <div class="pi-card__meta">
          <h3 class="pi-card__name">
            {{ pi.name_en }}
            <span class="pi-card__name-ko">{{ pi.name_ko }}</span>
          </h3>
          <div class="pi-card__title">{{ pi.title_en }} ({{ pi.title_ko }})</div>
        </div>
      </div>
      <div class="pi-card__body">
        <p>{{ pi.bio }}</p>
        <div class="pi-card__topics">
          {% for t in pi.topics %}
            <span class="pi-card__topic">{{ t }}</span>
          {% endfor %}
        </div>
      </div>
      <div class="pi-card__footer">
        {% if pi.email and pi.email != "" %}
          <a href="mailto:{{ pi.email }}" class="pi-card__link" title="Email" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        {% endif %}
        {% if pi.links.scholar and pi.links.scholar != "" %}
          <a href="{{ pi.links.scholar }}" target="_blank" rel="noopener" class="pi-card__link" title="Google Scholar" aria-label="Google Scholar"><i class="ai ai-google-scholar"></i></a>
        {% endif %}
        {% if pi.links.orcid and pi.links.orcid != "" %}
          <a href="{{ pi.links.orcid }}" target="_blank" rel="noopener" class="pi-card__link" title="ORCID" aria-label="ORCID"><i class="ai ai-orcid"></i></a>
        {% endif %}
        {% if pi.links.github and pi.links.github != "" %}
          <a href="{{ pi.links.github }}" target="_blank" rel="noopener" class="pi-card__link" title="GitHub" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>

---

## Core Research Areas

<div class="research-grid">
  <div class="research-card">
    <div class="research-card__tag">Area 01</div>
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

  <div class="research-card">
    <div class="research-card__tag">Area 02</div>
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

  <div class="research-card">
    <div class="research-card__tag">Area 03</div>
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

For detailed project descriptions and laboratory facilities, please visit our [Research](/research/) page. Meet our team members on the [Members](/members/) page.

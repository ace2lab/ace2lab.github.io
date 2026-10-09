---
layout: about
title: about
permalink: /
subtitle: Advanced Chemical & Energy Engineering Laboratory | KNU

selected_papers: false # Option B: rendered in-body dual-column grid
social: false # clean academic minimalism

announcements:
  enabled: false # Option B: rendered in-body dual-column grid
  scrollable: false
  limit: 6

latest_posts:
  enabled: false
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

<style>
  .post > header.post-header {
    display: none;
  }
</style>

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Energy Storage</span>
<span class="hero-badge"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Intense Pulsed Light (IPL)</span>
<span class="hero-badge"><i class="fa-solid fa-microchip" aria-hidden="true"></i> Flexible Sensors</span>
<span class="hero-badge"><i class="fa-solid fa-atom" aria-hidden="true"></i> Colloidal Quantum Dots</span>
{% endcapture %}

{% capture hero_actions %}
<a href="#research-areas" class="hero-action-btn hero-action-btn--primary"><i class="fa-solid fa-compass" aria-hidden="true"></i> Research Areas</a>
<a href="{{ '/members/' | relative_url }}" class="hero-action-btn hero-action-btn--outline"><i class="fa-solid fa-users" aria-hidden="true"></i> Meet Our Team</a>
<a href="{{ '/publications/' | relative_url }}" class="hero-action-btn hero-action-btn--outline"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Publications</a>
{% endcapture %}

{% capture hero_subtitle %}
차세대 화학 및 에너지 공학 연구실 · 경북대학교 과학기술대학 에너지화학공학과
<br>
<span style="font-size: 0.92rem; opacity: 0.85;">
Department of Energy Chemical Engineering, College of Science and Technology, Kyungpook National University
</span>
{% endcapture %}

{% include hero_banner.liquid
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Advanced Chemical & Energy Engineering Laboratory"
  subtitle=hero_subtitle
  badges=hero_badges
  actions=hero_actions
%}

<div class="lab-mission-section">
  <div class="lab-mission-quote">
    <p class="lab-mission-quote__en">
      Pioneering ultrafast photonic nanomanufacturing and functional nanomaterials for high-capacity electrochemical energy storage and wearable bio-environmental devices.
    </p>
    <p class="lab-mission-quote__ko">
      초고속 광열처리 나노공정과 기능성 나노소재 설계를 융합하여, 차세대 하이브리드 에너지 저장 소자 및 고민감도 유연 센서 기술을 혁신합니다.
    </p>
  </div>

{% assign active_members = site.data.members | where_exp: "m", "m.group != 'alumni'" %}
{% assign total_patents = site.data.patents.size %}
{% assign total_domestic = site.data.domestic.size %}
{% assign total_intl = 82 %}
{% assign total_pubs_and_ip = total_intl | plus: total_domestic | plus: total_patents %}

  <div class="lab-stats-grid">
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-users" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">{{ active_members.size }}</div>
      <div class="lab-stat-card__label">Active Researchers</div>
      <div class="lab-stat-card__desc">2 Co-PIs · Graduate & Undergrad Researchers</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-book-bookmark" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">{{ total_pubs_and_ip }}</div>
      <div class="lab-stat-card__label">Publications & IP</div>
      <div class="lab-stat-card__desc">{{ total_intl }} Int'l Journal · {{ total_domestic }} Domestic · 14 IP (11 Filed · 3 Reg.)</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-atom" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">3</div>
      <div class="lab-stat-card__label">Research Pillars</div>
      <div class="lab-stat-card__desc">Energy · Photonics · Sensors</div>
    </div>
    <div class="lab-stat-card">
      <div class="lab-stat-card__icon"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i></div>
      <div class="lab-stat-card__number">16 Yrs</div>
      <div class="lab-stat-card__label">Research Track Record</div>
      <div class="lab-stat-card__desc">2011 – 2026 · Est. 2020 at KNU</div>
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
                <i class="fa-solid fa-envelope" aria-hidden="true"></i> <span>Email</span>
              </a>
            {% endif %}
            {% if pi.links.scholar and pi.links.scholar != "" %}
              <a href="{{ pi.links.scholar }}" target="_blank" rel="noopener" class="pi-action-btn" title="Google Scholar" aria-label="Google Scholar">
                <i class="ai ai-google-scholar" aria-hidden="true"></i> <span>Scholar</span>
              </a>
            {% endif %}
            {% if pi.links.orcid and pi.links.orcid != "" %}
              <a href="{{ pi.links.orcid }}" target="_blank" rel="noopener" class="pi-action-btn" title="ORCID" aria-label="ORCID">
                <i class="ai ai-orcid" aria-hidden="true"></i> <span>ORCID</span>
              </a>
            {% endif %}
            {% if pi.links.researchgate and pi.links.researchgate != "" %}
              <a href="{{ pi.links.researchgate }}" target="_blank" rel="noopener" class="pi-action-btn" title="ResearchGate" aria-label="ResearchGate">
                <i class="ai ai-researchgate" aria-hidden="true"></i> <span>ResearchGate</span>
              </a>
            {% endif %}
            {% if pi.links.github and pi.links.github != "" %}
              <a href="{{ pi.links.github }}" target="_blank" rel="noopener" class="pi-action-btn" title="GitHub" aria-label="GitHub">
                <i class="fa-brands fa-github" aria-hidden="true"></i> <span>GitHub</span>
              </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

---

<h2 id="research-areas">Core Research Areas</h2>

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

For detailed project descriptions and laboratory facilities, please visit our [Research]({{ '/research/' | relative_url }}) page. Meet our team members on the [Members]({{ '/members/' | relative_url }}) page.

---

<div class="home-dual-grid">
  <div class="home-dual-col--news">
    {% include news_feed.liquid %}
  </div>
  <div class="home-dual-col--papers">
    <div class="selected-papers-block">
      <div class="selected-papers-block__header">
        <h2 class="selected-papers-block__title">
          <i class="fa-solid fa-star" aria-hidden="true"></i> Selected Publications
        </h2>
        <a href="{{ '/publications/' | relative_url }}" class="selected-papers-block__all-link">
          All Publications <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <div class="publications">
        {% bibliography -q @*[selected=true]* %}
      </div>
    </div>
  </div>
</div>

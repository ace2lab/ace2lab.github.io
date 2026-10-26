---
layout: page
permalink: /publications/
title: 연구성과
description: Peer-reviewed articles, patents and conference presentations of ACE² Lab, in reverse chronological order.
nav: true
nav_order: 5
---

<!-- _pages/publications.md -->

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% capture intl_count %}{% bibliography_count %}{% endcapture %}
{% assign intl_count = intl_count | strip | plus: 0 %}
{% if intl_count == 0 %}
{% assign intl_count = 83 %}
{% endif %}
{% assign total_count = intl_count | plus: site.data.domestic.size | plus: site.data.patents.size | plus: site.data.talks.size %}

{% capture hero_subtitle %}총 {{ total_count }}편 연구 성과 (국제 SCI 학술지 {{ intl_count }}편 · 국내 학술지 {{ site.data.domestic.size }}편 · 특허 {{ site.data.patents.size }}건 · 학회 발표 {{ site.data.talks.size }}편){% endcapture %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-earth-americas" aria-hidden="true"></i> <span data-i18n="publications.badge_intl">International Journals</span> ({{ intl_count }})</span>
<span class="hero-badge"><i class="fa-solid fa-flag" aria-hidden="true"></i> <span data-i18n="publications.badge_dom">Domestic Journals</span> ({{ site.data.domestic.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-certificate" aria-hidden="true"></i> <span data-i18n="publications.badge_patents">Patents & IP</span> ({{ site.data.patents.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-microphone" aria-hidden="true"></i> <span data-i18n="publications.badge_talks">Presentations</span> ({{ site.data.talks.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.publications"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Publications & Intellectual Property"
  subtitle=hero_subtitle
  subtitle_en="Peer-reviewed international journal articles, domestic publications, registered & filed patents, and invited presentations."
  badges=hero_badges
%}

{% assign domestic_by_year = site.data.domestic | group_by: "year" | sort: "name" | reverse %}
{% assign patents_by_year = site.data.patents | group_by: "year" | sort: "name" | reverse %}
{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}
{% assign registered_patents = site.data.patents | where: "status", "등록" %}
{% assign filed_patents = site.data.patents | where: "status", "출원" %}
{% assign invited_talks = site.data.talks | where: "type", "Invited" %}
{% assign oral_talks = site.data.talks | where: "type", "Oral" %}
{% assign poster_talks = site.data.talks | where: "type", "Poster" %}
{% assign domestic_left = site.data.domestic.size %}

<div class="ed-page ace2-tab-container is-tabbed">

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Publications category tabs">
    <button type="button" role="tab" class="ace2-tab is-active" id="tab-journals" aria-controls="panel-journals" aria-selected="true" tabindex="0" data-hash="journals" data-default="true" data-aliases="international,papers,articles">
      <span data-i18n="publications.tab_journals">International Journals</span><span class="ace2-tab__count">{{ intl_count }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-domestic" aria-controls="panel-domestic" aria-selected="false" tabindex="-1" data-hash="domestic" data-aliases="domestic-journals,korean">
      <span data-i18n="publications.tab_domestic">Domestic Journals</span><span class="ace2-tab__count">{{ site.data.domestic.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-patents" aria-controls="panel-patents" aria-selected="false" tabindex="-1" data-hash="patents" data-aliases="intellectual-property,ip">
      <span data-i18n="publications.tab_patents">Patents & IP</span><span class="ace2-tab__count">{{ site.data.patents.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-talks" aria-controls="panel-talks" aria-selected="false" tabindex="-1" data-hash="talks" data-aliases="conferences,presentations">
      <span data-i18n="publications.tab_talks">Conference Presentations</span><span class="ace2-tab__count">{{ site.data.talks.size }}</span>
    </button>
  </div>

  <!-- Panel 1: International Journals (jekyll-scholar + bib_search) -->
  <div class="ace2-tabpanel is-active" role="tabpanel" id="panel-journals" aria-labelledby="tab-journals" tabindex="0">
    <section class="ed-section" id="journals">
      <div class="pub-sticky-toolbar">
        <nav class="pub-year-jump" aria-label="Jump to publication year">
          <div class="pub-year-jump__inner">
            <span class="pub-year-jump__title"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> <span data-i18n="publications.year_label">Year</span></span>
            <div class="pub-year-jump__chips" id="pubYearChips">
              <a href="#y2026" class="pub-year-chip" data-year="2026">2026<span class="pub-year-chip__count">6</span></a>
              <a href="#y2025" class="pub-year-chip" data-year="2025">2025<span class="pub-year-chip__count">2</span></a>
              <a href="#y2024" class="pub-year-chip" data-year="2024">2024<span class="pub-year-chip__count">7</span></a>
              <a href="#y2023" class="pub-year-chip" data-year="2023">2023<span class="pub-year-chip__count">8</span></a>
              <a href="#y2022" class="pub-year-chip" data-year="2022">2022<span class="pub-year-chip__count">5</span></a>
              <a href="#y2021" class="pub-year-chip" data-year="2021">2021<span class="pub-year-chip__count">7</span></a>
              <a href="#y2020" class="pub-year-chip" data-year="2020">2020<span class="pub-year-chip__count">6</span></a>
              <a href="#y2019" class="pub-year-chip" data-year="2019">2019<span class="pub-year-chip__count">3</span></a>
              <a href="#y2018" class="pub-year-chip" data-year="2018">2018<span class="pub-year-chip__count">3</span></a>
              <a href="#y2017" class="pub-year-chip" data-year="2017">2017<span class="pub-year-chip__count">11</span></a>
              <a href="#y2016" class="pub-year-chip" data-year="2016">2016<span class="pub-year-chip__count">3</span></a>
              <a href="#y2015" class="pub-year-chip" data-year="2015">2015<span class="pub-year-chip__count">10</span></a>
              <a href="#y2014" class="pub-year-chip" data-year="2014">2014<span class="pub-year-chip__count">1</span></a>
              <a href="#y2013" class="pub-year-chip" data-year="2013">2013<span class="pub-year-chip__count">2</span></a>
              <a href="#y2012" class="pub-year-chip" data-year="2012">2012<span class="pub-year-chip__count">5</span></a>
              <a href="#y2011" class="pub-year-chip" data-year="2011">2011<span class="pub-year-chip__count">4</span></a>
            </div>
          </div>
        </nav>
      </div>

      <h2 class="ed-section__title">
        <span data-i18n="publications.sec_journals">International Journals</span>
        <span class="ed-section__count">{{ intl_count }}</span>
      </h2>
      <p class="pub-pi-filter__note" id="pubPiFilterNote" data-i18n="publications.pi_note">※ Includes publications prior to the PI's appointment at Kyungpook National University.</p>

      <fieldset class="pub-pi-filter" id="pubPiFilter" role="radiogroup" aria-labelledby="pubPiFilterLegend" aria-describedby="pubPiFilterNote">
        <legend class="pub-pi-filter__legend" id="pubPiFilterLegend"><i class="fa-solid fa-user-tie" aria-hidden="true"></i> <span data-i18n="publications.pi_legend">PI</span></legend>
        <div class="pub-pi-filter__options">
          <input type="radio" class="pub-pi-filter__input" name="pub-pi" id="pubPiAll" value="all" autocomplete="off" checked>
          <label class="pub-pi-filter__pill" for="pubPiAll"><span data-i18n="publications.filter_all">All</span> <span class="pub-pi-filter__count" data-pi-count="all">{{ intl_count }}</span></label>
          <input type="radio" class="pub-pi-filter__input" name="pub-pi" id="pubPiYim" value="yim" autocomplete="off">
          <label class="pub-pi-filter__pill" for="pubPiYim"><span class="pub-pi-filter__honorific">Prof. </span>Changyong Yim <span class="pub-pi-filter__count" data-pi-count="yim">57</span></label>
          <input type="radio" class="pub-pi-filter__input" name="pub-pi" id="pubPiKim" value="kim" autocomplete="off">
          <label class="pub-pi-filter__pill" for="pubPiKim"><span class="pub-pi-filter__honorific">Prof. </span>Taewook Kim <span class="pub-pi-filter__count" data-pi-count="kim">32</span></label>
        </div>
      </fieldset>
      <p class="pub-pi-filter__status" id="pubPiStatus" role="status" aria-live="polite"></p>

      {% if site.data.covers.size > 0 %}
        <div class="pub-cover-showcase" id="pubCoverShowcase" aria-labelledby="pubCoverTitle">
          <div class="pub-cover-showcase__header">
            <h3 class="pub-cover-showcase__title" id="pubCoverTitle">
              <i class="fa-solid fa-award" aria-hidden="true"></i>
              <span data-i18n="publications.sec_covers">Featured Journal Covers</span>
              <span class="pub-cover-showcase__count">{{ site.data.covers.size }}</span>
            </h3>
          </div>
          <div class="pub-cover-grid">
            {% for cover in site.data.covers %}
              <article class="pub-cover-card" data-pi="{{ cover.pi | default: 'yim' }}" id="cover-card-{{ cover.key }}">
                <div class="pub-cover-card__poster">
                  <a href="{{ cover.image | relative_url }}" class="pub-cover-card__imglink glightbox" data-gallery="covers" data-title="{{ cover.journal }} Vol. {{ cover.volume }}, No. {{ cover.issue }} ({{ cover.date | date: '%Y' }}) · {{ cover.title | escape }}">
                    <img src="{{ cover.image | relative_url }}" alt="{{ cover.journal }} Cover Art: {{ cover.title | escape }}" loading="lazy" class="pub-cover-card__img">
                  </a>
                </div>
                <div class="pub-cover-card__body">
                  <div class="pub-cover-card__meta">
                    <span class="pub-cover-card__badge"><i class="fa-solid fa-award" aria-hidden="true"></i> <span data-i18n="publications.badge_front_cover">Front Cover</span></span>
                    <span class="pub-cover-card__journal">{{ cover.journal }}</span>
                    <span class="pub-cover-card__issue">Vol. {{ cover.volume }}, No. {{ cover.issue }} ({{ cover.date | date: "%Y" }})</span>
                  </div>
                  <h4 class="pub-cover-card__title">
                    <a href="#{{ cover.key }}" title="{{ cover.title | escape }}">{{ cover.title | escape }}</a>
                  </h4>
                  <div class="pub-cover-card__actions">
                    <a href="#{{ cover.key }}" class="pub-cover-card__action pub-cover-card__action--detail">
                      <i class="fa-solid fa-arrow-down" aria-hidden="true"></i> <span data-i18n="publications.cover_view_paper">Paper Details ↓</span>
                    </a>
                    {% if cover.toc_url %}
                      <a href="{{ cover.toc_url }}" target="_blank" rel="noopener" class="pub-cover-card__action pub-cover-card__action--toc">
                        <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> <span data-i18n="publications.cover_view_issue">Issue Cover ↗</span>
                      </a>
                    {% endif %}
                  </div>
                </div>
              </article>
            {% endfor %}
          </div>
        </div>
      {% endif %}

      {% include bib_search.liquid %}

      <div class="pub-contribution-legend" role="note" aria-label="Author contribution notation">
        <span><span class="author-symbol">†</span> <span data-i18n="publications.contrib_equal">Equal contribution (Co-first author)</span></span>
        <span>·</span>
        <span><span class="author-symbol">*</span> <span data-i18n="publications.contrib_corr">Corresponding author</span></span>
        <span>·</span>
        <span><span data-i18n="publications.contrib_member">ACE² Lab member (Underlined Bold)</span></span>
      </div>

      <div class="publications">
        {% bibliography %}
      </div>
    </section>

  </div>

  <!-- Panel 2: Domestic Journals -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-domestic" aria-labelledby="tab-domestic" tabindex="0" hidden>
    {% if site.data.domestic.size > 0 %}
      <section class="ed-section" id="domestic">
        <h2 class="ed-section__title">
          <span data-i18n="publications.sec_domestic">Domestic Journals</span>
          <span class="ed-section__count">{{ site.data.domestic.size }}</span>
        </h2>
        <p class="ed-section__note" data-i18n="publications.dom_note">‡ Equal contribution · * Corresponding author</p>

        <div class="ed-rail">
          {% for group in domestic_by_year %}
            <div class="ed-rail__row">
              <div class="ed-rail__year">{{ group.name }}</div>
              <ol class="ed-entries" role="list">
                {% for p in group.items %}
                  {% assign dp = p.date | remove: " " | split: "." %}
                  <li class="ed-entry">
                    <span class="ed-entry__num" aria-hidden="true">{{ domestic_left }}</span>
                    <div class="ed-entry__body">
                      <div class="ed-entry__title">
                        {% if p.doi and p.doi != "" %}
                          <a href="https://doi.org/{{ p.doi }}" target="_blank" rel="noopener">{{ p.title | escape }}</a>
                        {% else %}
                          {{ p.title | escape }}
                        {% endif %}
                      </div>
                      <div class="ed-entry__line">{{ p.authors | escape }}</div>
                      <div class="ed-entry__line">
                        {{ p.journal | escape -}}
                        {%- if p.date and p.date != "" %}
                          <span class="ed-sep" aria-hidden="true">·</span>{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}
                        {%- endif %}
                      </div>
                      {% if p.grant and p.grant != "" %}
                        <div class="ed-entry__line"><span class="ed-label" data-i18n="publications.label_funding">Funding</span>{{ p.grant | escape }}</div>
                      {% endif %}
                    </div>
                  </li>
                  {% assign domestic_left = domestic_left | minus: 1 %}
                {% endfor %}
              </ol>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endif %}

  </div>

  <!-- Panel 3: Patents -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-patents" aria-labelledby="tab-patents" tabindex="0" hidden>
    {% if site.data.patents.size > 0 %}
      <section class="ed-section" id="patents">
        <div class="pub-sticky-toolbar">
          <fieldset class="pub-pi-filter" id="pubPatentFilter" role="radiogroup" aria-labelledby="pubPatentFilterLegend">
            <legend class="pub-pi-filter__legend" id="pubPatentFilterLegend"><i class="fa-solid fa-certificate" aria-hidden="true"></i> <span data-i18n="publications.patent_legend">Status</span></legend>
            <div class="pub-pi-filter__options">
              <input type="radio" class="pub-pi-filter__input" name="pub-patent" id="pubPatentAll" value="all" autocomplete="off" checked>
              <label class="pub-pi-filter__pill" for="pubPatentAll"><span data-i18n="publications.filter_all">All</span> <span class="pub-pi-filter__count" data-patent-count="all">{{ site.data.patents.size }}</span></label>
              <input type="radio" class="pub-pi-filter__input" name="pub-patent" id="pubPatentRegistered" value="registered" autocomplete="off">
              <label class="pub-pi-filter__pill" for="pubPatentRegistered"><span data-i18n="publications.status_registered">Registered</span> <span class="pub-pi-filter__count" data-patent-count="registered">{{ registered_patents.size }}</span></label>
              <input type="radio" class="pub-pi-filter__input" name="pub-patent" id="pubPatentFiled" value="filed" autocomplete="off">
              <label class="pub-pi-filter__pill" for="pubPatentFiled"><span data-i18n="publications.status_filed">Filed</span> <span class="pub-pi-filter__count" data-patent-count="filed">{{ filed_patents.size }}</span></label>
            </div>
          </fieldset>
        </div>
        <p class="pub-pi-filter__status" id="pubPatentStatus" role="status" aria-live="polite"></p>

        <h2 class="ed-section__title">
          <span data-i18n="publications.sec_patents">Patents & Intellectual Property</span>
          <span class="ed-section__count">{{ site.data.patents.size }}</span>
        </h2>

        <div class="ed-rail">
          {% for group in patents_by_year %}
            <div class="ed-rail__row">
              <div class="ed-rail__year">{{ group.name }}</div>
              <ul class="ed-entries" role="list">
                {% for p in group.items %}
                  {% assign dp = p.date | remove: " " | split: "." %}
                  {% if p.status == "등록" %}
                    {% assign status_key = "registered" %}
                    {% assign status_label = "Registered" %}
                    {% assign status_icon = "fa-circle-check" %}
                  {% else %}
                    {% assign status_key = "filed" %}
                    {% assign status_label = "Filed" %}
                    {% assign status_icon = "fa-file-pen" %}
                  {% endif %}
                  <li class="ed-entry" data-patent-status="{{ status_key }}">
                    <span class="ed-entry__num" aria-hidden="true">{{ p.no }}</span>
                    <div class="ed-entry__body">
                      <div class="ed-entry__title ed-entry__title--talk">
                        <span class="ed-status-pill ed-status-pill--{{ status_key }}" title="{{ p.status }}">
                          <i class="fa-solid {{ status_icon }}" aria-hidden="true"></i>
                          <span data-i18n="publications.status_{{ status_key }}">{{ status_label }}</span>
                        </span>
                        <span class="ed-entry__title-text">{{ p.title | escape }}</span>
                      </div>
                      {% if p.inventors and p.inventors != "" %}
                        <div class="ed-entry__line"><span class="ed-label" data-i18n="publications.label_inventors">Inventors</span>{{ p.inventors | escape }}</div>
                      {% endif %}
                      {% if p.assignee and p.assignee != "" %}
                        <div class="ed-entry__line"><span class="ed-label" data-i18n="publications.label_assignee">Assignee</span>{{ p.assignee | escape }}</div>
                      {% endif %}
                      {% if p.number != "" or p.date != "" or p.country != "" %}
                        <div class="ed-entry__line">
                          {%- assign has_prev = false -%}
                          {%- if p.number and p.number != "" -%}
                            {{ p.number | escape }}
                            {%- assign has_prev = true -%}
                          {%- endif -%}
                          {%- if p.country and p.country != "" -%}
                            {%- if has_prev %}<span class="ed-sep" aria-hidden="true">·</span>{% endif -%}
                            {{ p.country | escape }}
                            {%- assign has_prev = true -%}
                          {%- endif -%}
                          {%- if p.date and p.date != "" -%}
                            {%- if has_prev %}<span class="ed-sep" aria-hidden="true">·</span>{% endif -%}
                            {{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}
                          {%- endif -%}
                          {%- if p.app_number and p.app_number != "" -%}
                            {%- assign adp = p.app_date | remove: " " | split: "." -%}
                            <span class="ed-sep" aria-hidden="true">·</span>출원 {{ p.app_number | escape }}{% if p.app_date and p.app_date != "" %} ({{ adp[0] }}.{{ adp[1] | prepend: "0" | slice: -2, 2 }}.{{ adp[2] | prepend: "0" | slice: -2, 2 }}){% endif %}
                          {%- endif -%}
                        </div>
                      {% endif %}
                      {% if p.grant and p.grant != "" %}
                        <div class="ed-entry__line"><span class="ed-label" data-i18n="publications.label_funding">Funding</span>{{ p.grant | escape }}</div>
                      {% endif %}
                    </div>
                  </li>
                {% endfor %}
              </ul>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endif %}

  </div>

  <!-- Panel 4: Conference Presentations -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-talks" aria-labelledby="tab-talks" tabindex="0" hidden>
    {% if site.data.talks.size > 0 %}
      <section class="ed-section" id="talks">
        <div class="pub-sticky-toolbar">
          <fieldset class="pub-pi-filter" id="pubTalkFilter" role="radiogroup" aria-labelledby="pubTalkFilterLegend">
            <legend class="pub-pi-filter__legend" id="pubTalkFilterLegend"><i class="fa-solid fa-microphone" aria-hidden="true"></i> <span data-i18n="publications.talk_legend">Type</span></legend>
            <div class="pub-pi-filter__options">
              <input type="radio" class="pub-pi-filter__input" name="pub-talk" id="pubTalkAll" value="all" autocomplete="off" checked>
              <label class="pub-pi-filter__pill" for="pubTalkAll"><span data-i18n="publications.filter_all">All</span> <span class="pub-pi-filter__count" data-talk-count="all">{{ site.data.talks.size }}</span></label>
              <input type="radio" class="pub-pi-filter__input" name="pub-talk" id="pubTalkInvited" value="invited" autocomplete="off">
              <label class="pub-pi-filter__pill" for="pubTalkInvited"><span data-i18n="publications.type_invited">Invited</span> <span class="pub-pi-filter__count" data-talk-count="invited">{{ invited_talks.size }}</span></label>
              <input type="radio" class="pub-pi-filter__input" name="pub-talk" id="pubTalkOral" value="oral" autocomplete="off">
              <label class="pub-pi-filter__pill" for="pubTalkOral"><span data-i18n="publications.type_oral">Oral</span> <span class="pub-pi-filter__count" data-talk-count="oral">{{ oral_talks.size }}</span></label>
              <input type="radio" class="pub-pi-filter__input" name="pub-talk" id="pubTalkPoster" value="poster" autocomplete="off">
              <label class="pub-pi-filter__pill" for="pubTalkPoster"><span data-i18n="publications.type_poster">Poster</span> <span class="pub-pi-filter__count" data-talk-count="poster">{{ poster_talks.size }}</span></label>
            </div>
          </fieldset>
        </div>
        <p class="pub-pi-filter__status" id="pubTalkStatus" role="status" aria-live="polite"></p>

        <h2 class="ed-section__title">
          <span data-i18n="publications.sec_talks">Conference Presentations</span>
          <span class="ed-section__count">{{ site.data.talks.size }}</span>
        </h2>

        <div class="ed-rail">
          {% for group in talks_by_year %}
            <div class="ed-rail__row">
              <div class="ed-rail__year">{{ group.name }}</div>
              <ul class="ed-entries" role="list">
                {% for t in group.items %}
                  {% assign dp = t.date | remove: " " | split: "." %}
                  {% assign talk_type = t.type | default: "Oral" %}
                  {% assign talk_type_key = talk_type | downcase %}
                  {% if talk_type_key == "invited" %}
                    {% assign talk_icon = "fa-star" %}
                  {% elsif talk_type_key == "poster" %}
                    {% assign talk_icon = "fa-clipboard-list" %}
                  {% else %}
                    {% assign talk_icon = "fa-microphone" %}
                  {% endif %}
                  <li class="ed-entry" data-talk-type="{{ talk_type_key }}">
                    <span class="ed-entry__num" aria-hidden="true">{{ t.no }}</span>
                    <div class="ed-entry__body">
                      <div class="ed-entry__title ed-entry__title--talk">
                        <span class="ed-talk-pill ed-talk-pill--{{ talk_type_key }}">
                          <i class="fa-solid {{ talk_icon }}" aria-hidden="true"></i>
                          <span data-i18n="publications.type_{{ talk_type_key }}">{{ talk_type | escape }}</span>
                        </span>
                        {% if t.award and t.award != "" %}
                          <span class="ed-talk-pill ed-talk-pill--award">
                            <i class="fa-solid fa-trophy" aria-hidden="true"></i>
                            <span>{{ t.award | escape }}</span>
                          </span>
                        {% endif %}
                        <span class="ed-entry__title-text">{{ t.title | escape }}</span>
                      </div>
                      {% assign p_list = t.presenters | split: "," %}
                      {% assign p_lead = p_list | first | strip %}
                      {% assign p_rest = p_list | slice: 1, p_list.size %}
                      <div class="ed-entry__line">
                        <span class="ed-presenter--lead">{{ p_lead | escape }}</span>
                        {%- for co in p_rest -%}, {{ co | strip | escape }}{%- endfor -%}
                      </div>
                      <div class="ed-entry__line">
                        {{ t.conference | escape -}}
                        {%- if t.location and t.location != "" %}<span class="ed-sep" aria-hidden="true">·</span>{{ t.location | escape }}{% endif -%}
                        {%- if t.date and t.date != "" %}
                          <span class="ed-sep" aria-hidden="true">·</span>{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}
                        {%- endif %}
                      </div>
                    </div>
                  </li>
                {% endfor %}
              </ul>
            </div>
          {% endfor %}
        </div>
      </section>
    {% endif %}

  </div>

  <!-- Synchronous tab initializer -->
  <script src="{{ '/assets/js/ace2_tabs.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

<script src="{{ '/assets/js/author_enrichment.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
<script src="{{ '/assets/js/pub_pi_filter.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

<script>
  (function () {
    function enhancePublications() {
      // 1. Assign ID to each year heading generated by jekyll-scholar
      var headings = document.querySelectorAll('.publications h2.bibliography');
      headings.forEach(function (h2) {
        var year = h2.textContent.trim();
        if (year && /^\d{4}$/.test(year)) {
          h2.id = 'y' + year;
        }
      });

      // 2. Author bolding and cover badges are handled by assets/js/author_enrichment.js

      // 3. Year chips: smooth scroll without polluting URL hash or triggering bibsearch
      var chips = document.querySelectorAll('.pub-year-chip');
      chips.forEach(function (chip) {
        chip.addEventListener('click', function (e) {
          e.preventDefault();
          var year = this.getAttribute('data-year');
          var target = document.getElementById('y' + year);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          chips.forEach(function (c) {
            c.classList.remove('active');
          });
          this.classList.add('active');
        });
      });

      // 4. Highlight active year chip on scroll
      if ('IntersectionObserver' in window && headings.length > 0) {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                var year = entry.target.id.replace('y', '');
                chips.forEach(function (c) {
                  if (c.getAttribute('data-year') === year) {
                    c.classList.add('active');
                  } else {
                    c.classList.remove('active');
                  }
                });
              }
            });
          },
          {
            rootMargin: '-100px 0px -70% 0px',
            threshold: 0
          }
        );

        headings.forEach(function (h2) {
          observer.observe(h2);
        });
      }

      // 5. Enhance bibsearch input placeholder and prevent collision with tab/year hashes
      var bibSearchInput = document.getElementById('bibsearch');
      if (bibSearchInput) {
        bibSearchInput.setAttribute('data-i18n-placeholder', 'publications.search_placeholder');
        bibSearchInput.setAttribute(
          'placeholder',
          'Search international journals by title, author, or keyword...'
        );
        if (window.ACE2_I18N && typeof window.ACE2_I18N.refresh === 'function') {
          window.ACE2_I18N.refresh();
        }
        // Clear if accidentally populated with navigation anchor
        if (/^y\d{4}$/.test(bibSearchInput.value) || ['journals', 'domestic', 'patents', 'talks'].includes(bibSearchInput.value)) {
          bibSearchInput.value = '';
        }
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhancePublications);
    } else {
      enhancePublications();
    }
  })();
</script>

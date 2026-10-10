---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed articles, patents and conference presentations of ACE² Lab, in reverse chronological order.
nav: true
nav_order: 5
---

<!-- _pages/publications.md -->

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% capture intl_count %}{% bibliography_count %}{% endcapture %}
{% assign intl_count = intl_count | strip | plus: 0 %}
{% if intl_count == 0 %}
{% assign intl_count = 82 %}
{% endif %}
{% assign total_count = intl_count | plus: site.data.domestic.size | plus: site.data.patents.size | plus: site.data.talks.size %}

{% capture hero_subtitle %}총 {{ total_count }}편 연구 성과 (국제 SCI 학술지 {{ intl_count }}편 · 국내 학술지 {{ site.data.domestic.size }}편 · 특허 {{ site.data.patents.size }}건 · 학회 발표 {{ site.data.talks.size }}편){% endcapture %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-earth-americas" aria-hidden="true"></i> International Journals ({{ intl_count }})</span>
<span class="hero-badge"><i class="fa-solid fa-flag" aria-hidden="true"></i> Domestic Journals ({{ site.data.domestic.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-certificate" aria-hidden="true"></i> Patents & IP ({{ site.data.patents.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-microphone" aria-hidden="true"></i> Presentations ({{ site.data.talks.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Publications & Intellectual Property"
  subtitle=hero_subtitle
  subtitle_en="Peer-reviewed international journal articles, domestic publications, registered & filed patents, and invited presentations."
  badges=hero_badges
%}

{% assign domestic_by_year = site.data.domestic | group_by: "year" | sort: "name" | reverse %}
{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}
{% assign patent_states = "등록|출원" | split: "|" %}
{% assign patent_labels = "Registered|Filed" | split: "|" %}
{% assign domestic_left = site.data.domestic.size %}

<div class="ed-page ace2-tab-container">

  <!-- Accessible Tab Navigation -->
  <div class="ace2-tabnav" role="tablist" aria-label="Publications category tabs">
    <button type="button" role="tab" class="ace2-tab" id="tab-journals" aria-controls="panel-journals" aria-selected="false" tabindex="-1" data-hash="journals" data-default="true" data-aliases="international,papers,articles">
      International Journals<span class="ace2-tab__count">{{ intl_count }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-domestic" aria-controls="panel-domestic" aria-selected="false" tabindex="-1" data-hash="domestic" data-aliases="domestic-journals,korean">
      Domestic Journals<span class="ace2-tab__count">{{ site.data.domestic.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-patents" aria-controls="panel-patents" aria-selected="false" tabindex="-1" data-hash="patents" data-aliases="intellectual-property,ip">
      Patents & IP<span class="ace2-tab__count">{{ site.data.patents.size }}</span>
    </button>
    <button type="button" role="tab" class="ace2-tab" id="tab-talks" aria-controls="panel-talks" aria-selected="false" tabindex="-1" data-hash="talks" data-aliases="conferences,presentations">
      Conference Presentations<span class="ace2-tab__count">{{ site.data.talks.size }}</span>
    </button>
  </div>

  <!-- Panel 1: International Journals (jekyll-scholar + bib_search) -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-journals" aria-labelledby="tab-journals" tabindex="0">
    <section class="ed-section" id="journals">
      <h2 class="ed-section__title">
        International Journals
        <span class="ed-section__count">{{ intl_count }}</span>
      </h2>

      <nav class="pub-year-jump" aria-label="Jump to publication year">
        <div class="pub-year-jump__inner">
          <span class="pub-year-jump__title"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> Year</span>
          <div class="pub-year-jump__chips" id="pubYearChips">
            <a href="#y2026" class="pub-year-chip" data-year="2026">2026<span class="pub-year-chip__count">5</span></a>
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

      {% include bib_search.liquid %}

      <div class="pub-contribution-legend" role="note" aria-label="Author contribution notation">
        <span><span class="author-symbol">†</span> Equal contribution (Co-first author)</span>
        <span>·</span>
        <span><span class="author-symbol">*</span> Corresponding author</span>
        <span>·</span>
        <span><strong>Underlined Bold</strong> ACE² Lab member</span>
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
          Domestic Journals
          <span class="ed-section__count">{{ site.data.domestic.size }}</span>
        </h2>
        <p class="ed-section__note">‡ Equal contribution · * Corresponding author</p>

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
                        <div class="ed-entry__line"><span class="ed-label">Funding</span>{{ p.grant | escape }}</div>
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
        <h2 class="ed-section__title">
          Patents & Intellectual Property
          <span class="ed-section__count">{{ site.data.patents.size }}</span>
        </h2>

        {% for state in patent_states %}
          {% assign state_patents = site.data.patents | where: "status", state %}
          {% if state_patents.size > 0 %}
            {% assign patents_by_year = state_patents | group_by: "year" | sort: "name" | reverse %}
            {% if state == "등록" %}
              {% assign status_key = "registered" %}
              {% assign status_icon = "fa-circle-check" %}
            {% else %}
              {% assign status_key = "filed" %}
              {% assign status_icon = "fa-file-pen" %}
            {% endif %}
            {% assign status_label = patent_labels[forloop.index0] %}
            <h3 class="ed-subhead">
              {{ status_label }}
              <span class="ed-subhead__count">{{ state_patents.size }}</span>
            </h3>

            <div class="ed-rail">
              {% for group in patents_by_year %}
                <div class="ed-rail__row">
                  <div class="ed-rail__year">{{ group.name }}</div>
                  <ul class="ed-entries" role="list">
                    {% for p in group.items %}
                      {% assign dp = p.date | remove: " " | split: "." %}
                      <li class="ed-entry">
                        <span class="ed-entry__num" aria-hidden="true">{{ p.no }}</span>
                        <div class="ed-entry__body">
                          <div class="ed-entry__title">{{ p.title | escape }}</div>
                          <div class="ed-entry__line">
                            <span class="ed-status-pill ed-status-pill--{{ status_key }}" title="{{ state }}"><i class="fa-solid {{ status_icon }}" aria-hidden="true"></i> {{ status_label }}</span>
                          </div>
                          {% if p.inventors and p.inventors != "" %}
                            <div class="ed-entry__line"><span class="ed-label">Inventors</span>{{ p.inventors | escape }}</div>
                          {% endif %}
                          {% if p.assignee and p.assignee != "" %}
                            <div class="ed-entry__line"><span class="ed-label">Assignee</span>{{ p.assignee | escape }}</div>
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
                            </div>
                          {% endif %}
                          {% if p.grant and p.grant != "" %}
                            <div class="ed-entry__line"><span class="ed-label">Funding</span>{{ p.grant | escape }}</div>
                          {% endif %}
                        </div>
                      </li>
                    {% endfor %}
                  </ul>
                </div>
              {% endfor %}
            </div>
          {% endif %}
        {% endfor %}
      </section>
    {% endif %}

  </div>

  <!-- Panel 4: Conference Presentations -->
  <div class="ace2-tabpanel" role="tabpanel" id="panel-talks" aria-labelledby="tab-talks" tabindex="0" hidden>
    {% if site.data.talks.size > 0 %}
      <section class="ed-section" id="talks">
        <h2 class="ed-section__title">
          Conference Presentations
          <span class="ed-section__count">{{ site.data.talks.size }}</span>
        </h2>

        <div class="ed-rail">
          {% for group in talks_by_year %}
            <div class="ed-rail__row">
              <div class="ed-rail__year">{{ group.name }}</div>
              <ul class="ed-entries" role="list">
                {% for t in group.items %}
                  {% assign dp = t.date | remove: " " | split: "." %}
                  <li class="ed-entry">
                    <span class="ed-entry__num" aria-hidden="true">{{ t.no }}</span>
                    <div class="ed-entry__body">
                      <div class="ed-entry__title">{{ t.title | escape }}</div>
                      <div class="ed-entry__line">{{ t.presenters | escape }}</div>
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
        bibSearchInput.setAttribute(
          'placeholder',
          'Search international journals by title, author, or keyword...'
        );
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

---
layout: page
permalink: /publications/
title: publications
description: Peer-reviewed articles, patents and conference presentations of ACE² Lab, in reverse chronological order.
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

{% assign domestic_by_year = site.data.domestic | group_by: "year" | sort: "name" | reverse %}
{% assign talks_by_year = site.data.talks | group_by: "year" | sort: "name" | reverse %}
{% assign patent_states = "등록|출원" | split: "|" %}
{% assign patent_labels = "Registered|Filed" | split: "|" %}
{% assign domestic_left = site.data.domestic.size %}

<div class="ed-page">

  <nav class="ed-index" aria-label="Publication sections">
    <a href="#journals">International journals<span class="ed-index__count">82</span></a>
    <a href="#domestic">Domestic journals<span class="ed-index__count">{{ site.data.domestic.size }}</span></a>
    <a href="#patents">Patents<span class="ed-index__count">{{ site.data.patents.size }}</span></a>
    <a href="#talks">Conference presentations<span class="ed-index__count">{{ site.data.talks.size }}</span></a>
  </nav>

  <!-- 1. International journals (jekyll-scholar) -->

  <section class="ed-section" id="journals">
    <h2 class="ed-section__title">
      International Journals
      <span class="ed-section__count">82</span>
    </h2>

    <nav class="pub-year-jump" aria-label="Jump to publication year">
      <div class="pub-year-jump__inner">
        <span class="pub-year-jump__title"><i class="fa-solid fa-clock-rotate-left"></i> Year</span>
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

    <div class="publications">

{% bibliography %}

    </div>

  </section>

  <!-- 2. Domestic journals -->

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

  <!-- 3. Patents -->

{% if site.data.patents.size > 0 %}

  <section class="ed-section" id="patents">
    <h2 class="ed-section__title">
      Patents
      <span class="ed-section__count">{{ site.data.patents.size }}</span>
    </h2>

    {% for state in patent_states %}
      {% assign state_patents = site.data.patents | where: "status", state %}
      {% if state_patents.size > 0 %}
        {% assign patents_by_year = state_patents | group_by: "year" | sort: "name" | reverse %}
        <h3 class="ed-subhead">
          {{ patent_labels[forloop.index0] }}
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

  <!-- 4. Conference presentations -->

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

      // 2. Identify and decorate Cover & Selected papers
      var selectedIds = new Set([
        'velhal2024cobalt',
        'lee2024suppression',
        'hong2024flashlight',
        'paeng2024rapid',
        'velhal2023exploring'
      ]);

      var items = document.querySelectorAll('.publications ol.bibliography > li');
      items.forEach(function (li) {
        var entryDiv = li.querySelector('div[id]');
        var entryId = entryDiv ? entryDiv.id : '';
        var titleDiv = li.querySelector('.title');

        // Check for Cover note
        var periodicals = li.querySelectorAll('.periodical');
        var isCover = false;
        periodicals.forEach(function (p) {
          var text = p.textContent.trim();
          if (/cover/i.test(text)) {
            isCover = true;
            p.innerHTML =
              '<span class="pub-badge pub-badge--cover"><i class="fa-solid fa-award"></i> ' +
              text +
              '</span>';
          }
        });

        if (isCover) {
          li.classList.add('is-cover-paper');
        }

        // Check for Selected paper
        if (selectedIds.has(entryId)) {
          li.classList.add('is-selected-paper');
          if (titleDiv && !titleDiv.querySelector('.pub-badge--selected')) {
            var badge = document.createElement('span');
            badge.className = 'pub-badge pub-badge--selected';
            badge.innerHTML = '<i class="fa-solid fa-star"></i> Featured';
            titleDiv.appendChild(badge);
          }
        }
      });

      // 3. Highlight active year chip on scroll
      var chips = document.querySelectorAll('.pub-year-chip');
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
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enhancePublications);
    } else {
      enhancePublications();
    }
  })();
</script>

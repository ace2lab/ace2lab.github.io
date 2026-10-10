---
layout: page
title: news
description: Announcements, awards and media coverage of ACE² Lab.
permalink: /news/
nav: true
nav_order: 6
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

{% assign awards_by_year = site.data.awards | group_by: "year" | sort: "name" | reverse %}
{% assign press_by_year = site.data.press | group_by: "year" | sort: "name" | reverse %}

<div class="ed-page">

  <nav class="ed-index" aria-label="News sections">
    <a href="#latest">Latest</a>
    <a href="#awards">Awards<span class="ed-index__count">{{ site.data.awards.size }}</span></a>
    <a href="#press">In the press<span class="ed-index__count">{{ site.data.press.size }}</span></a>
  </nav>

  <!-- 1. Lab announcements (_news collection) -->

  <section class="ed-section" id="latest">
    <h2 class="ed-section__title">Latest</h2>

{% include news.liquid %}

  </section>

  <!-- 2. Awards -->

{% if site.data.awards.size > 0 %}

  <section class="ed-section" id="awards">
    <h2 class="ed-section__title">
      Awards
      <span class="ed-section__count">{{ site.data.awards.size }}</span>
    </h2>

    <div class="ed-rail">
      {% for group in awards_by_year %}
        <div class="ed-rail__row">
          <div class="ed-rail__year">{{ group.name }}</div>
          <ul class="ed-entries" role="list">
            {% for a in group.items %}
              {% assign dp = a.date | remove: " " | split: "." %}
              <li class="ed-entry ed-entry--plain{% if a.img and a.img != '' %} ed-entry--with-thumb{% endif %}">
                {% if a.img and a.img != "" %}
                  <button type="button" class="ed-entry__thumb" data-award-zoom aria-label="{{ a.title | escape }} - view full size">
                    <img src="{{ a.img | relative_url }}" alt="{{ a.title | escape }}" loading="lazy">
                  </button>
                {% endif %}
                <div class="ed-entry__body">
                  <div class="ed-entry__title">{{ a.title | escape }}</div>
                  <div class="ed-entry__line">
                    {% if a.type and a.type != "" %}<span class="ed-tag">{{ a.type | escape }}</span>{% endif %}
                    {{ a.recipient | escape -}}
                    {%- if a.issuer and a.issuer != "" %}<span class="ed-sep" aria-hidden="true">·</span>{{ a.issuer | escape }}{% endif -%}
                    {%- if a.date and a.date != "" %}
                      <span class="ed-sep" aria-hidden="true">·</span>{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}
                    {%- endif %}
                  </div>
                  {% if a.press and a.press != "" %}
                    <div class="ed-entry__line">
                      <a href="{{ a.press }}" target="_blank" rel="noopener" class="ed-pill ed-pill--press">
                        <i class="fa-solid fa-newspaper" aria-hidden="true"></i> 언론보도 ({{ a.press_media | default: '기사' | escape }}) <i class="fa-solid fa-arrow-up-right-from-square ed-ext-icon" aria-hidden="true"></i>
                      </a>
                    </div>
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

  <!-- 3. Press -->

{% if site.data.press.size > 0 %}

  <section class="ed-section" id="press">
    <h2 class="ed-section__title">
      In the Press
      <span class="ed-section__count">{{ site.data.press.size }}</span>
    </h2>

    <div class="ed-rail">
      {% for group in press_by_year %}
        <div class="ed-rail__row">
          <div class="ed-rail__year">{{ group.name }}</div>
          <ul class="ed-entries" role="list">
            {% for p in group.items %}
              {% assign dp = p.date | remove: " " | split: "." %}
              {% assign url_parts = p.url | split: "/" %}
              <li class="ed-entry ed-entry--plain">
                <div class="ed-entry__body">
                  <div class="ed-entry__title">
                    <a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.title | escape }}<span class="ed-sr"> (opens in a new tab)</span></a>
                  </div>
                  <div class="ed-entry__line">
                    {{ url_parts[2] | remove_first: "www." -}}
                    <span class="ed-sep" aria-hidden="true">·</span>{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}
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

  <dialog class="ed-lightbox" id="award-lightbox" aria-label="Award certificate">
    <button type="button" class="ed-lightbox__close" aria-label="Close">&times;</button>
    <img class="ed-lightbox__img" alt="">
  </dialog>
  <script src="{{ '/assets/js/award_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

</div>

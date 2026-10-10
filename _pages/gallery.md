---
layout: page
title: gallery
description: Conferences, defenses and moments from ACE² Lab, newest first.
permalink: /gallery/
nav: true
nav_order: 7
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}?v={{ site.time | date: '%s' }}">

{% assign albums_by_year = site.data.gallery | group_by: "year" | sort: "name" | reverse %}
{% assign photo_total = 0 %}
{% for a in site.data.gallery %}
{% assign photo_total = photo_total | plus: a.photos.size %}
{% endfor %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-images" aria-hidden="true"></i> {{ site.data.gallery.size }} Albums</span>
<span class="hero-badge"><i class="fa-solid fa-camera" aria-hidden="true"></i> {{ photo_total }} Photos</span>
<span class="hero-badge"><i class="fa-solid fa-calendar" aria-hidden="true"></i> Since {{ albums_by_year.last.name }}</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Gallery"
  subtitle="학회 발표, 학위 심사 및 연구실 활동 기록"
  subtitle_en="Conferences, defenses and moments from ACE² Lab, newest first."
  badges=hero_badges
%}

<div class="ed-page">

  <div class="ed-rail">
    {% for group in albums_by_year %}
      <section class="ed-rail__row" id="gallery-{{ group.name }}" aria-label="{{ group.name }}">
        <h2 class="ed-rail__year">{{ group.name }}</h2>
        <ul class="ed-albums" role="list">
          {% for a in group.items %}
            {% assign dp = a.date | remove: " " | split: "." %}
            <li class="ed-album" id="album-{{ a.id }}">
              {% if a.cover and a.cover != "" %}
                <figure class="ed-album__cover">
                  {% if a.cover contains "assets/" %}
                    {% assign cover_src = a.cover %}
                  {% else %}
                    {% assign cover_src = a.cover | prepend: '/assets/img/' %}
                  {% endif %}
                  <img
                    src="{{ cover_src | relative_url }}"
                    alt="{{ a.alt | default: a.title | escape }}"
                    loading="lazy"
                    decoding="async"
                    data-zoomable
                  >
                  {% if a.photos and a.photos.size > 1 %}
                    <span class="ed-album__badge"><i class="fa-solid fa-camera" aria-hidden="true"></i> {{ a.photos.size }}</span>
                  {% endif %}
                </figure>
              {% endif %}
              <time class="ed-album__date" datetime="{{ dp[0] }}-{{ dp[1] | prepend: '0' | slice: -2, 2 }}-{{ dp[2] | prepend: '0' | slice: -2, 2 }}">
                {{- dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 -}}
              </time>
              <div class="ed-album__title">{{ a.title | escape }}</div>
              {% if a.photos and a.photos.size > 1 %}
                <details class="ed-album__expansion">
                  <summary class="ed-album__expansion-toggle">
                    <span>View all {{ a.photos.size }} photos</span>
                    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                  </summary>
                  <div class="ed-album__grid">
                    {% for p in a.photos %}
                      <figure class="ed-album__thumb">
                        <img
                          src="{{ p | relative_url }}"
                          alt="{{ a.title | escape }} - photo {{ forloop.index }}"
                          loading="lazy"
                          data-zoomable
                        >
                      </figure>
                    {% endfor %}
                  </div>
                </details>
              {% endif %}
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  </div>

</div>

<script src="{{ '/assets/js/image_lightbox.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>

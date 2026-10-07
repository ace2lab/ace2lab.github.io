---
layout: page
title: gallery
description: Conferences, defenses and moments from ACE² Lab, newest first.
permalink: /gallery/
nav: true
nav_order: 6
---

<link rel="stylesheet" href="{{ '/assets/css/editorial_typography.css' | relative_url }}">

{% assign albums_by_year = site.data.gallery | group_by: "year" | sort: "name" | reverse %}

<div class="ed-page">

  <p class="ed-lede">{{ site.data.gallery.size }} albums since {{ albums_by_year.last.name }}.</p>

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
                  <img
                    src="{{ a.cover | prepend: '/assets/img/' | relative_url }}"
                    alt="{{ a.alt | default: a.title | escape }}"
                    loading="lazy"
                    decoding="async"
                  >
                </figure>
              {% endif %}
              <time class="ed-album__date" datetime="{{ dp[0] }}-{{ dp[1] | prepend: '0' | slice: -2, 2 }}-{{ dp[2] | prepend: '0' | slice: -2, 2 }}">
                {{- dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 -}}
              </time>
              <div class="ed-album__title">{{ a.title | escape }}</div>
            </li>
          {% endfor %}
        </ul>
      </section>
    {% endfor %}
  </div>

</div>

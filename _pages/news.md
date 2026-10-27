---
layout: page
title: 수상/언론보도
description: Announcements, awards and media coverage of ACE² Lab.
permalink: /news/
nav: true
nav_order: 6
ace2_editorial: true
---

{% assign all_achievements = site.data.awards | concat: site.data.press %}
{% assign achievements_by_year = all_achievements | group_by: "year" | sort: "name" | reverse %}

{% capture hero_badges %}
<span class="hero-badge"><i class="fa-solid fa-award" aria-hidden="true"></i> <span data-i18n="news.idx_awards">수상 실적 (Awards)</span> ({{ site.data.awards.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="news.idx_press">언론 보도 (In the Press)</span> ({{ site.data.press.size }})</span>
<span class="hero-badge"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> <span data-i18n="news.filter_all">전체 (All)</span> ({{ all_achievements.size }})</span>
{% endcapture %}

{% include hero_banner.liquid
  variant="page"
  i18n_prefix="hero.news"
  label="KYUNGPOOK NATIONAL UNIVERSITY · ACE² LAB"
  title="Awards & Press"
  subtitle="연구실 수상 실적 및 주요 언론 보도"
  subtitle_en="Honors, awards, and media press coverage of ACE² Lab."
  badges=hero_badges
%}

<div class="ed-page">

  <nav class="ed-index" aria-label="News sections">
    <a href="#latest"><span data-i18n="news.idx_latest">최신 소식 (Latest)</span></a>
    <a href="#achievements"><span data-i18n="news.idx_achievements">수상 및 언론보도 (Awards & Press)</span><span class="ed-index__count">{{ all_achievements.size }}</span></a>
  </nav>

  <!-- Category legend (semantic color grammar shared with the cards below) -->

{% assign news_items = site.news | sort: 'date' | reverse %}
{% assign current_time = 'now' | date: '%s' %}
{% assign n_award = site.news | where: 'category', 'award' %}
{% assign n_member = site.news | where: 'category', 'member' %}
{% assign n_milestone = site.news | where: 'category', 'milestone' %}
{% assign n_honor = site.news | where: 'category', 'honor' %}

  <div class="news-cat-legend" role="group" aria-label="News category color legend">
    <span class="news-cat-legend__title"><i class="fa-solid fa-tags" aria-hidden="true"></i> <span data-i18n="news.cat_title">분류</span></span>
    <span class="news-cat-legend__item" data-cat="award"><span class="news-cat-legend__dot" aria-hidden="true"></span><span data-i18n="news.cat_award">수상 (Award)</span><span class="news-cat-legend__count">{{ n_award.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="member"><span class="news-cat-legend__dot" aria-hidden="true"></span><span data-i18n="news.cat_member">구성원 (Member)</span><span class="news-cat-legend__count">{{ n_member.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="milestone"><span class="news-cat-legend__dot" aria-hidden="true"></span><span data-i18n="news.cat_milestone">주요 성과 (Milestone)</span><span class="news-cat-legend__count">{{ n_milestone.size }}</span></span>
    <span class="news-cat-legend__item" data-cat="honor"><span class="news-cat-legend__dot" aria-hidden="true"></span><span data-i18n="news.cat_honor">영예·선정 (Honor)</span><span class="news-cat-legend__count">{{ n_honor.size }}</span></span>
  </div>

  <!-- 1. Lab announcements (_news collection) -->

  <section class="ed-section" id="latest">
    <h2 class="ed-section__title">
      <span data-i18n="news.idx_latest">최신 소식 (Latest)</span>
      <span class="ed-section__count">{{ news_items.size }}</span>
    </h2>

    <div class="news-feed__list">
      {% for item in news_items %}
        {% assign item_time = item.date | date: '%s' %}
        {% assign diff_seconds = current_time | minus: item_time %}
        <div class="news-feed-card{% if item.category %} news-feed-card--{{ item.category }}{% endif %}">
          <div class="news-feed-card__meta">
            <time class="news-feed-card__date" datetime="{{ item.date | date_to_xmlschema }}">{{ item.date | date: '%Y.%m.%d' }}</time>
            {% if diff_seconds < 2592000 and diff_seconds >= 0 %}
              <span class="news-badge-new">NEW</span>
            {% endif %}
            {% if item.category == 'award' %}
              <span class="news-cat-badge news-cat-badge--award"><i class="fa-solid fa-trophy" aria-hidden="true"></i> <span data-i18n="news.cat_award">수상 (Award)</span></span>
            {% elsif item.category == 'member' %}
              <span class="news-cat-badge news-cat-badge--member"><i class="fa-solid fa-user-graduate" aria-hidden="true"></i> <span data-i18n="news.cat_member">구성원 (Member)</span></span>
            {% elsif item.category == 'honor' %}
              <span class="news-cat-badge news-cat-badge--honor"><i class="fa-solid fa-star" aria-hidden="true"></i> <span data-i18n="news.cat_honor">영예·선정 (Honor)</span></span>
            {% elsif item.category == 'milestone' %}
              <span class="news-cat-badge news-cat-badge--milestone"><i class="fa-solid fa-flag-checkered" aria-hidden="true"></i> <span data-i18n="news.cat_milestone">주요 성과 (Milestone)</span></span>
            {% endif %}
          </div>
          <div class="news-feed-card__body">
            {% if item.inline %}
              <span data-news-lang="ko">{{ item.content | remove: '<p>' | remove: '</p>' | emojify }}</span>
              {% if item.summary_en %}<span data-news-lang="en">{{ item.summary_en }}</span>{% endif %}
              {% if item.summary_ja %}<span data-news-lang="ja">{{ item.summary_ja }}</span>{% endif %}
              {% if item.summary_zh %}<span data-news-lang="zh">{{ item.summary_zh }}</span>{% endif %}
            {% else %}
              <a class="news-feed-card__link" href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {% endif %}
          </div>
        </div>
      {% else %}
        <div class="news-feed-card">
          <div class="news-feed-card__body">No announcements yet.</div>
        </div>
      {% endfor %}
    </div>

  </section>

  <!-- 2. Unified Awards & Press Timeline -->

{% if all_achievements.size > 0 %}

  <section class="ed-section" id="achievements">
    <h2 class="ed-section__title">
      <span data-i18n="news.idx_achievements">수상 및 언론보도 (Awards & Press)</span>
      <span class="ed-section__count" id="newsAchTotalCount">{{ all_achievements.size }}</span>
    </h2>

    <div class="pub-sticky-toolbar">
      <fieldset class="pub-pi-filter" id="newsAchFilter" role="radiogroup" aria-labelledby="newsAchFilterLegend">
        <legend class="pub-pi-filter__legend" id="newsAchFilterLegend"><i class="fa-solid fa-filter" aria-hidden="true"></i> <span data-i18n="news.filter_legend">분류 필터</span></legend>
        <div class="pub-pi-filter__options">
          <input type="radio" class="pub-pi-filter__input" name="news-ach" id="newsAchAll" value="all" autocomplete="off" checked>
          <label class="pub-pi-filter__pill" for="newsAchAll"><span data-i18n="news.filter_all">전체 (All)</span> <span class="pub-pi-filter__count" data-ach-count="all">{{ all_achievements.size }}</span></label>
          <input type="radio" class="pub-pi-filter__input" name="news-ach" id="newsAchAward" value="award" autocomplete="off">
          <label class="pub-pi-filter__pill" for="newsAchAward"><span data-i18n="news.filter_awards">수상 실적 (Awards)</span> <span class="pub-pi-filter__count" data-ach-count="award">{{ site.data.awards.size }}</span></label>
          <input type="radio" class="pub-pi-filter__input" name="news-ach" id="newsAchPress" value="press" autocomplete="off">
          <label class="pub-pi-filter__pill" for="newsAchPress"><span data-i18n="news.filter_press">언론 보도 (Press)</span> <span class="pub-pi-filter__count" data-ach-count="press">{{ site.data.press.size }}</span></label>
        </div>
      </fieldset>
    </div>
    <p class="pub-pi-filter__status" id="newsAchStatus" role="status" aria-live="polite"></p>

    {% for group in achievements_by_year %}
      {% assign year_items = group.items | sort: "date" | reverse %}
      <div class="ed-yeargroup" data-year="{{ group.name }}">
        <h3 class="ed-yeargroup__year">{{ group.name }}<span class="ed-yeargroup__count" data-year-count>{{ year_items.size }}</span></h3>
        <ul class="ed-cardgrid" role="list">
          {% for a in year_items %}
            {% if a.kind == 'award' or a.type %}
              {% assign dp = a.date | remove: " " | split: "." %}
              {% if a.type contains '장관상' or a.type contains '대상' %}
                {% assign tier = 'crimson' %}
              {% elsif a.type == '우수상' or a.type == '최우수상' %}
                {% assign tier = 'amber' %}
              {% elsif a.type == '우수연구교수' %}
                {% assign tier = 'navy' %}
              {% elsif a.type contains 'Recognition' %}
                {% assign tier = 'purple' %}
              {% else %}
                {% assign tier = 'teal' %}
              {% endif %}
              {% capture award_date %}{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}{% endcapture %}
              <li class="ed-award-card ed-award-card--{{ tier }}" data-ach-type="award">
                {% if a.img and a.img != "" %}
                  <button
                    type="button"
                    class="ed-award-card__thumb"
                    data-award-zoom
                    data-full="{{ a.img | relative_url }}"
                    data-tier="{{ tier }}"
                    data-type="{{ a.type | escape }}"
                    data-title="{{ a.title | escape }}"
                    data-recipient="{{ a.recipient | escape }}"
                    data-issuer="{{ a.issuer | escape }}"
                    data-date="{{ award_date }}"
                    aria-haspopup="dialog"
                    aria-label="{{ a.title | escape }} - view certificate"
                  >
                    {% assign aw_thumb = a.img | ace2_thumb_webp %}
                    <picture class="ace2-pic">
                      {% if aw_thumb != "" %}<source srcset="{{ aw_thumb | relative_url }}" type="image/webp">{% endif %}
                      <img
                        src="{{ a.img | relative_url }}"
                        alt="{{ a.title | escape }}"
                        loading="lazy"
                        decoding="async"
                        {% if a.img_pos %}style="object-position: {{ a.img_pos | escape }}"{% endif %}
                      >
                    </picture>
                    <span class="ed-award-card__zoom" aria-hidden="true"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
                  </button>
                {% else %}
                  <div class="ed-award-card__thumb ed-award-card__thumb--placeholder" aria-hidden="true">
                    <span class="ed-award-card__placeholder-frame">
                      <i class="fa-solid fa-award ed-award-card__placeholder-icon"></i>
                      <span class="ed-award-card__placeholder-label" data-i18n="news.cert_placeholder">수상 증서</span>
                      <span class="ed-award-card__placeholder-year">{{ a.year | escape }}</span>
                    </span>
                  </div>
                {% endif %}
                <div class="ed-award-card__body">
                  {% if a.type and a.type != "" %}
                    <span class="ed-tier ed-tier--{{ tier }}"><i class="fa-solid fa-trophy" aria-hidden="true"></i> <span data-i18n-term>{{ a.type | escape }}</span></span>
                  {% endif %}
                  <h4 class="ed-award-card__title">{{ a.title | escape }}</h4>
                  <dl class="ed-award-card__meta">
                    <div><dt><i class="fa-solid fa-user" aria-hidden="true"></i><span class="ed-sr">Recipient</span></dt><dd>{{ a.recipient | escape }}</dd></div>
                    {% if a.issuer and a.issuer != "" %}
                      <div><dt><i class="fa-solid fa-building-columns" aria-hidden="true"></i><span class="ed-sr">Issuer</span></dt><dd data-i18n-term>{{ a.issuer | escape }}</dd></div>
                    {% endif %}
                    {% if a.date and a.date != "" %}
                      <div><dt><i class="fa-regular fa-calendar" aria-hidden="true"></i><span class="ed-sr">Date</span></dt><dd><time datetime="{{ award_date | replace: '.', '-' }}">{{ award_date }}</time></dd></div>
                    {% endif %}
                  </dl>
                  {% if a.press and a.press != "" %}
                    <a href="{{ a.press }}" target="_blank" rel="noopener" class="ed-pill ed-pill--press ed-award-card__press">
                      <i class="fa-solid fa-newspaper" aria-hidden="true"></i> <span data-i18n="news.press_badge">언론보도</span> (<span data-i18n-term>{{ a.press_media | default: '기사' | escape }}</span>) <i class="fa-solid fa-arrow-up-right-from-square ed-ext-icon" aria-hidden="true"></i><span class="ed-sr"> (opens in a new tab)</span>
                    </a>
                  {% endif %}
                </div>
              </li>
            {% else %}
              {% assign dp = a.date | remove: " " | split: "." %}
              {% assign url_parts = a.url | split: "/" %}
              {% if a.media == '뉴시스' or a.media == '경북매일' %}{% assign media_tone = 'crimson' %}{% else %}{% assign media_tone = 'navy' %}{% endif %}
              <li class="ed-press-card" data-ach-type="press">
                <div class="ed-press-card__top">
                  <span class="ed-media ed-media--{{ media_tone }}"><i class="fa-regular fa-newspaper" aria-hidden="true"></i> <span data-i18n-term>{{ a.media | default: url_parts[2] | remove_first: "www." | escape }}</span></span>
                  <time class="ed-datepill" datetime="{{ dp[0] }}-{{ dp[1] | prepend: '0' | slice: -2, 2 }}-{{ dp[2] | prepend: '0' | slice: -2, 2 }}">{{ dp[0] }}.{{ dp[1] | prepend: "0" | slice: -2, 2 }}.{{ dp[2] | prepend: "0" | slice: -2, 2 }}</time>
                </div>
                <h4 class="ed-press-card__title">
                  <a href="{{ a.url }}" target="_blank" rel="noopener">{{ a.title | escape }} <i class="fa-solid fa-arrow-up-right-from-square ed-ext-icon" aria-hidden="true"></i><span class="ed-sr"> (opens in a new tab)</span></a>
                </h4>
                {% if a.paper and a.paper != "" %}
                  <a class="ed-pill ed-pill--paper" href="{{ a.paper }}"><i class="fa-solid fa-file-lines" aria-hidden="true"></i> <span data-i18n="news.related_paper">관련 논문</span></a>
                {% endif %}
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      </div>
    {% endfor %}

  </section>
  {% endif %}

  <dialog class="ed-lightbox" id="award-lightbox" aria-labelledby="award-lightbox-title">
    <div class="ed-lightbox__panel">
      <header class="ed-lightbox__head">
        <div class="ed-lightbox__heading">
          <span class="ed-tier ed-lightbox__tier"><i class="fa-solid fa-trophy" aria-hidden="true"></i> <span data-lb="type"></span></span>
          <h2 class="ed-lightbox__title" id="award-lightbox-title" data-lb="title"></h2>
          <p class="ed-lightbox__meta">
            <span><i class="fa-solid fa-user" aria-hidden="true"></i><span class="ed-sr">Recipient: </span><span data-lb="recipient"></span></span>
            <span><i class="fa-solid fa-building-columns" aria-hidden="true"></i><span class="ed-sr">Issuer: </span><span data-lb="issuer"></span></span>
            <span><i class="fa-regular fa-calendar" aria-hidden="true"></i><span class="ed-sr">Date: </span><time data-lb="date"></time></span>
          </p>
        </div>
        <div class="ed-lightbox__tools">
          <span class="ed-lightbox__count" data-lb="count" aria-live="polite"></span>
          <button type="button" class="ed-lightbox__btn" data-lb-zoom aria-pressed="false">
            <i class="fa-solid fa-magnifying-glass-plus" aria-hidden="true"></i> <span data-lb="zoomlabel" data-i18n="news.lb_zoom">원본 크기</span>
          </button>
          <button type="button" class="ed-lightbox__btn ed-lightbox__btn--icon" data-lb-close aria-label="Close">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </button>
        </div>
      </header>
      <div class="ed-lightbox__stage" data-lb="stage">
        <button type="button" class="ed-lightbox__nav ed-lightbox__nav--prev" data-lb-prev aria-label="Previous certificate">
          <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
        </button>
        <div class="ed-lightbox__viewport" data-lb="viewport">
          <img class="ed-lightbox__img" alt="" decoding="async">
        </div>
        <button type="button" class="ed-lightbox__nav ed-lightbox__nav--next" data-lb-next aria-label="Next certificate">
          <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
      <p class="ed-lightbox__hint" aria-hidden="true" data-i18n="news.lb_hint">← → 이전 / 다음 · Esc 닫기 · 이미지 클릭으로 확대 / 축소</p>
    </div>
  </dialog>
  <script src="{{ '/assets/js/award_lightbox.js' | relative_url | bust_file_cache }}"></script>
  <script src="{{ '/assets/js/news_ach_filter.js' | relative_url | bust_file_cache }}"></script>

</div>

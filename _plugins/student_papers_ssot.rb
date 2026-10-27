# frozen_string_literal: true

require "bibtex"
require "cgi"

module Ace2
  # Synthesizes `site.data["student_papers"]` directly from canonical SSOTs:
  # - `_bibliography/papers.bib` + `_data/covers.yml` (international SCI journals)
  # - `_data/domestic.yml` (Korean domestic journals)
  # - `_data/members.yml` (enrolled students & alumni name matching + canonicalization)
  module StudentPapersSsot
    ROMANIZATION_ALIASES = {
      "junhyuckahn" => "안준혁",
      "junhyeokahn" => "안준혁",
      "myeongseokang" => "강명서",
      "ninadbvelhal" => "니나드 벨할",
      "ninadvelhal" => "니나드 벨할",
      "seonggwanglee" => "이성광",
      "taehoyun" => "윤태호",
      "taehoyoon" => "윤태호",
      "donggunlee" => "이동건",
      "donggeonlee" => "이동건"
    }.freeze

    ALLOWED_INLINE_TAGS = %w[sub sup i em].freeze

    MONTH_MAP = {
      "1" => "Jan", "01" => "Jan", "jan" => "Jan", "january" => "Jan",
      "2" => "Feb", "02" => "Feb", "feb" => "Feb", "february" => "Feb",
      "3" => "Mar", "03" => "Mar", "mar" => "Mar", "march" => "Mar",
      "4" => "Apr", "04" => "Apr", "apr" => "Apr", "april" => "Apr",
      "5" => "May", "05" => "May", "may" => "May",
      "6" => "Jun", "06" => "Jun", "jun" => "Jun", "june" => "Jun",
      "7" => "Jul", "07" => "Jul", "jul" => "Jul", "july" => "Jul",
      "8" => "Aug", "08" => "Aug", "aug" => "Aug", "august" => "Aug",
      "9" => "Sep", "09" => "Sep", "sep" => "Sep", "sept" => "Sep", "september" => "Sep",
      "10" => "Oct", "oct" => "Oct", "october" => "Oct",
      "11" => "Nov", "nov" => "Nov", "november" => "Nov",
      "12" => "Dec", "dec" => "Dec", "december" => "Dec"
    }.freeze

    MONTH_NUM_MAP = {
      "Jan" => 1, "Feb" => 2, "Mar" => 3, "Apr" => 4, "May" => 5, "Jun" => 6,
      "Jul" => 7, "Aug" => 8, "Sep" => 9, "Oct" => 10, "Nov" => 11, "Dec" => 12
    }.freeze

    module_function

    def normalize_month(raw_month)
      key = raw_month.to_s.gsub(/[{}]/, "").strip.downcase
      MONTH_MAP[key] || ""
    end

    def norm_alpha(str)
      str.to_s.downcase.gsub(/[^a-z]/, "")
    end

    def sanitize_title_html(raw_title)
      cleaned = raw_title.to_s.gsub(/[{}]/, "").strip
      counts = Hash.new(0)
      unbalanced = false
      placeholders = []
      tokenized = cleaned.gsub(%r{<(/?)(#{ALLOWED_INLINE_TAGS.join("|")})\s*>}i) do
        slash = Regexp.last_match(1)
        tag = Regexp.last_match(2).downcase
        if slash == "/"
          counts[tag] -= 1
          unbalanced = true if counts[tag] < 0
        else
          counts[tag] += 1
        end
        idx = placeholders.length
        placeholders << "<#{slash}#{tag}>"
        "__ACE2_SAFE_TAG_#{idx}__"
      end
      return CGI.escapeHTML(cleaned) if unbalanced || counts.values.any? { |c| c != 0 }

      escaped = CGI.escapeHTML(tokenized)
      placeholders.each_with_index do |html_tag, idx|
        escaped.gsub!("__ACE2_SAFE_TAG_#{idx}__", html_tag)
      end
      escaped
    end

    def strip_html(html_str)
      CGI.unescapeHTML(html_str.to_s.gsub(/<[^>]+>/, "")).strip
    end

    def build_member_index(members_list)
      by_ko = {}
      Array(members_list).each do |m|
        group = m["group"].to_s
        next if %w[pi ai].include?(group)

        ko = m["name_ko"].to_s.strip
        en = m["name_en"].to_s.strip
        next if ko.empty?

        aliases = Array(m["aliases_en"]).map { |a| a.to_s.strip }.reject(&:empty?)
        excluded = Array(m["exclude_bib_keys"]).map { |k| k.to_s.strip }.reject(&:empty?)

        # Prefer active enrolled student record over alumni record when both exist (e.g. Huijin Lee)
        if !by_ko.key?(ko) || %w[phd ms ug].include?(group)
          by_ko[ko] = { name_ko: ko, name_en: en, group: group, aliases_en: aliases, exclude_bib_keys: excluded }
        end
      end

      by_alpha = {}
      by_ko.each_value do |rec|
        alpha = norm_alpha(rec[:name_en])
        by_alpha[alpha] = rec unless alpha.empty?
        rec[:aliases_en].each do |al|
          al_alpha = norm_alpha(al)
          by_alpha[al_alpha] = rec unless al_alpha.empty?
        end
      end
      ROMANIZATION_ALIASES.each do |alias_key, target_ko|
        by_alpha[alias_key] ||= by_ko[target_ko] if by_ko.key?(target_ko)
      end

      [by_ko, by_alpha]
    end

    def parse_authors(raw_authors, is_bibtex, by_ko, by_alpha, item_key = nil)
      tokens = is_bibtex ? raw_authors.to_s.split(/\s+and\s+/i) : raw_authors.to_s.split(/\s*,\s*/)
      matched_kos = []
      author_items = []
      formatted = tokens.filter_map do |tok|
        t = tok.to_s.gsub(/[{}]/, "").strip
        next if t.empty?

        syms = t.scan(/[†‡*]/).join
        clean = t.gsub(/[†‡*]/, "").strip
        display = if is_bibtex && clean.include?(",")
                    last, first = clean.split(",", 2).map(&:strip)
                    "#{first} #{last}".strip
                  else
                    clean
                  end

        rec = by_ko[display] || by_alpha[norm_alpha(display)]
        rec = nil if rec && item_key && rec[:exclude_bib_keys].include?(item_key.to_s)
        matched_ko = nil
        if rec
          matched_ko = rec[:name_ko]
          matched_kos << matched_ko unless matched_kos.include?(matched_ko)
        end

        author_items << { "name" => display, "syms" => syms, "ko" => matched_ko }
        "#{display}#{syms}"
      end

      [formatted.join(", "), author_items, matched_kos]
    end

    def apply(site)
      members_list = site.data["members"] || []
      by_ko, by_alpha = build_member_index(members_list)

      covers_by_key = {}
      Array(site.data["covers"]).each do |c|
        key = c["key"].to_s.strip
        covers_by_key[key] = c unless key.empty?
      end

      synthesized = []
      seq = 0

      bib_path = File.join(site.source, "_bibliography", "papers.bib")
      if File.exist?(bib_path)
        bib = BibTeX.open(bib_path)
        bib.entries.each_value do |entry|
          next unless entry.respond_to?(:[])

          bib_key = entry.key.to_s
          authors_str, author_items, matched_kos = parse_authors(entry["author"].to_s, true, by_ko, by_alpha, bib_key)
          next if matched_kos.empty?

          title_html = sanitize_title_html(entry["title"].to_s)
          doi = (entry["doi"] || entry["DOI"]).to_s.gsub(/[{}]/, "").strip
          note_raw = entry["note"].to_s.gsub(/[{}]/, "").strip
          year = entry["year"].to_s.gsub(/[^0-9]/, "").to_i
          month = normalize_month(entry["month"])
          journal = entry["journal"].to_s.gsub(/[{}]/, "").strip
          is_cover = covers_by_key.key?(bib_key) || note_raw.match?(/\bfront\s+cover\b/i)
          is_accepted = note_raw.match?(/\b(just\s+accepted|in\s+press)\b/i)

          seq += 1
          synthesized << {
            "key" => bib_key,
            "title" => strip_html(title_html),
            "title_html" => title_html,
            "journal" => journal,
            "year" => year,
            "month" => month,
            "month_num" => MONTH_NUM_MAP[month] || 0,
            "date_label" => month.empty? ? year.to_s : "#{month} #{year}",
            "doi" => doi,
            "type" => "국제 SCI",
            "type_class" => "ach-item__tag--sci",
            "type_i18n_key" => "ach.type_sci",
            "type_rank" => 0,
            "is_cover" => is_cover,
            "is_accepted" => is_accepted,
            "members" => matched_kos,
            "authors" => authors_str,
            "author_items" => author_items,
            "_seq" => seq
          }
        end
      end

      Array(site.data["domestic"]).each do |dom|
        dom_key = "domestic-#{dom['no'] || (seq + 1)}"
        authors_str, author_items, matched_kos = parse_authors(dom["authors"].to_s, false, by_ko, by_alpha, dom_key)
        next if matched_kos.empty?

        title_html = sanitize_title_html(dom["title"].to_s)
        journal_clean = dom["journal"].to_s.split(",").first.to_s.strip
        year = dom["year"].to_s.gsub(/[^0-9]/, "").to_i
        date_parts = dom["date"].to_s.strip.split(".")
        dom_month = date_parts.length >= 2 ? normalize_month(date_parts[1]) : ""
        dom_date_label = date_parts.length >= 2 ? "#{date_parts[0]}.#{date_parts[1].to_s.rjust(2, '0')}" : year.to_s
        doi = dom["doi"].to_s.strip

        seq += 1
        synthesized << {
          "key" => dom_key,
          "title" => strip_html(title_html),
          "title_html" => title_html,
          "journal" => journal_clean,
          "year" => year,
          "month" => dom_month,
          "month_num" => MONTH_NUM_MAP[dom_month] || 0,
          "date_label" => dom_date_label,
          "doi" => doi,
          "type" => "국내 학술지",
          "type_class" => "",
          "type_i18n_key" => "ach.type_domestic",
          "type_rank" => 1,
          "is_cover" => false,
          "is_accepted" => false,
          "members" => matched_kos,
          "authors" => authors_str,
          "author_items" => author_items,
          "_seq" => seq
        }
      end

      synthesized.sort_by! { |item| [-item["year"].to_i, item["type_rank"].to_i, -item["month_num"].to_i, item["_seq"].to_i] }
      synthesized.each { |item| item.delete("_seq") }
      site.data["student_papers"] = synthesized
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  Ace2::StudentPapersSsot.apply(site)
end

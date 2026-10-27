# frozen_string_literal: true

require "digest"
require "json"
require "uri"

module Ace2
  # Provides deterministic ASCII SHA-1 WebP thumbnail resolution with automatic
  # existence-checked fallback, and emits a shared MD5-versioned i18n dictionary
  # script (assets/js/ace2_i18n_data.js) so every HTML page sheds 112.6 KB of
  # duplicate inline JSON while keeping 4-language Zero-FOUC behavior.
  module PerfAssetsFilter
    def ace2_thumb_webp(input)
      raw = input.to_s.strip
      return "" if raw.empty?

      clean = raw.split("?").first.to_s
      begin
        clean = URI::DEFAULT_PARSER.unescape(clean) if clean.include?("%")
        clean = clean.encode("UTF-8", invalid: :replace, undef: :replace).sub(%r{\A/+}, "").unicode_normalize(:nfc)
      rescue StandardError
        return ""
      end
      return "" unless clean.start_with?("assets/")

      digest = Digest::SHA1.hexdigest(clean)[0, 16]
      rel_thumb = "assets/img/thumbs/#{digest}.webp"
      site = @context.registers[:site]
      return "" unless site

      abs_thumb = File.join(site.source, rel_thumb)
      return "" unless File.file?(abs_thumb)

      ver = Digest::MD5.file(abs_thumb).hexdigest[0, 8]
      "/#{rel_thumb}?v=#{ver}"
    end
  end

  class I18nDataAssetGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      i18n_payload = site.data["i18n"] || {}
      json = JSON.generate(i18n_payload)
      site.config["ace2_i18n_hash"] = Digest::MD5.hexdigest(json)[0, 12]

      page = Jekyll::PageWithoutAFile.new(site, site.source, "assets/js", "ace2_i18n_data.js")
      page.content = "window.__ACE2_I18N_DATA__=#{json};\n"
      page.data["layout"] = nil
      page.data["render_with_liquid"] = false
      page.data["sitemap"] = false
      site.pages << page
    end
  end
end

Liquid::Template.register_filter(Ace2::PerfAssetsFilter)

# frozen_string_literal: true

module Ace2
  # Generates static instant-redirect pages from _data/legacy_redirects.yml
  # so legacy Google Sites URLs on ace2.knu.ac.kr resolve with HTTP 200 + canonical.
  class LegacyRedirectGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      entries = Array(site.data["legacy_redirects"])
      return if entries.empty?

      existing_urls = {}
      existing_dests = {}
      site.pages.each do |p|
        existing_urls[normalize_url(p.url)] = p.path
        existing_dests[p.destination(site.dest)] = p.path
      end

      entries.each do |entry|
        raw_from = entry.fetch("from").to_s.strip
        raw_to = entry.fetch("to").to_s.strip
        dir = raw_from.delete_prefix("/").delete_suffix("/")
        raise ArgumentError, "legacy_redirects empty 'from' entry" if dir.empty?
        raise ArgumentError, "legacy_redirects empty 'to' for /#{dir}" if raw_to.empty?

        target_url = "/#{dir}/"
        page = Jekyll::PageWithoutAFile.new(site, site.source, dir, "index.html")
        page.content = "{% include legacy_redirect.liquid %}"
        page.data.merge!(
          "layout" => nil,
          "permalink" => target_url,
          "sitemap" => false,
          "redirect_target" => raw_to,
          "legacy_from" => "/#{dir}"
        )

        dest = page.destination(site.dest)
        if existing_urls.key?(target_url) || existing_dests.key?(dest)
          owner = existing_urls[target_url] || existing_dests[dest]
          raise ArgumentError, "legacy redirect collides with existing page: #{target_url} (owned by #{owner})"
        end

        existing_urls[target_url] = "_data/legacy_redirects.yml"
        existing_dests[dest] = "_data/legacy_redirects.yml"
        site.pages << page
      end
    end

    private

    def normalize_url(url)
      cleaned = url.to_s.sub(%r{/index\.html\z}, "/")
      cleaned.end_with?("/") ? cleaned : "#{cleaned}/"
    end
  end
end

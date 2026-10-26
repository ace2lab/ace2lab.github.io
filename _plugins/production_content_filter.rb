# frozen_string_literal: true

module Ace2
  # Strips upstream al-folio starter demo content during production builds
  # while keeping fixture files on disk for development-env CI integration tests.
  module ProductionContentFilter
    DEMO_COLLECTIONS = %w[books teachings projects].freeze
    DEMO_PAGE_PATHS = %w[
      _pages/blog.md
      _pages/books.md
      _pages/cv.md
      _pages/dropdown.md
      _pages/plugins.md
      _pages/profiles.md
      _pages/repositories.md
    ].freeze

    module_function

    def apply(site)
      return unless Jekyll.env == "production"

      site.config["external_sources"] = []
      site.config["pagination"] = { "enabled" => false }
      site.config["jekyll-archives"] = {}

      site.posts.docs.clear
      DEMO_COLLECTIONS.each do |label|
        site.collections[label]&.docs&.clear
      end

      if (news = site.collections["news"])
        news.docs.each { |doc| doc.data["sitemap"] = false if doc.data["inline"] }
        news.metadata["output"] = false if news.docs.all? { |doc| doc.data["inline"] }
      end

      site.pages.reject! { |page| DEMO_PAGE_PATHS.include?(page.path) }
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  Ace2::ProductionContentFilter.apply(site)
end

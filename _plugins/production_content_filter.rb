# frozen_string_literal: true

module Ace2
  # Strips upstream al-folio starter demo content and unused global JS/asset bundles
  # during production builds while keeping fixture files and defaults intact for
  # development-env CI integration tests.
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
    DEMO_STATIC_PATTERNS = [
      %r{\Aassets/video/tutorial_al_folio\.mp4\z},
      %r{\Aassets/video/pexels-.*\.mp4\z},
      %r{\Aassets/plotly/},
      %r{\Aassets/audio/},
      %r{\Aassets/img/rhino\.png\z},
      %r{\Aassets/img/[0-9]+\.jpg\z},
      %r{\Aassets/img/prof_pic\.jpg\z}
    ].freeze

    module_function

    def apply(site)
      return unless Jekyll.env == "production"

      site.config["external_sources"] = []
      site.config["pagination"] = { "enabled" => false }
      site.config["jekyll-archives"] = {}

      # Disable unused global runtime bundles across ACE2 Lab production pages
      # (0 pages use MathJax, Masonry, Altmetric/Dimensions embeds, or medium-zoom,
      # as custom image_lightbox.js and award_lightbox.js handle modal zooming).
      site.config["enable_math"] = false
      site.config["enable_masonry"] = false
      site.config["enable_medium_zoom"] = false
      site.config["enable_publication_badges"] = {
        "altmetric" => false,
        "dimensions" => false,
        "google_scholar" => false,
        "inspirehep" => false
      }

      site.posts.docs.clear
      DEMO_COLLECTIONS.each do |label|
        site.collections[label]&.docs&.clear
      end

      if (news = site.collections["news"])
        news.docs.each { |doc| doc.data["sitemap"] = false if doc.data["inline"] }
        news.metadata["output"] = false if news.docs.all? { |doc| doc.data["inline"] }
      end

      site.pages.reject! { |page| DEMO_PAGE_PATHS.include?(page.path) }
      site.static_files.reject! do |sf|
        rel = sf.relative_path.to_s.sub(%r{\A/+}, "")
        DEMO_STATIC_PATTERNS.any? { |pat| pat.match?(rel) }
      end
    end
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  Ace2::ProductionContentFilter.apply(site)
end

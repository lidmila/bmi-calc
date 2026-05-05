const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "static": "/" });
  eleventyConfig.ignores.add("src/img/_TODO-images.txt");

  // Watch CSS source
  eleventyConfig.addWatchTarget("./src/css/");

  // Date filters
  eleventyConfig.addFilter("dateISO", (d) => {
    return DateTime.fromJSDate(new Date(d), { zone: "Europe/Prague" }).toISODate();
  });
  eleventyConfig.addFilter("dateCZ", (d) => {
    return DateTime.fromJSDate(new Date(d), { zone: "Europe/Prague" })
      .setLocale("cs")
      .toFormat("d. LLLL yyyy");
  });
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = (content || "").replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });

  // Year shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Collections
  eleventyConfig.addCollection("articles", (api) => {
    return api
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => (b.data.date || 0) - (a.data.date || 0));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};

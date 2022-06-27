module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src");
  eleventyConfig.addWatchTarget("./src/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

const day = require('dayjs');
const htmlmin = require('html-minifier');

module.exports = eleventyConfig => {

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  eleventyConfig.addShortcode('Icon', logo => `
    <svg aria-hidden="true" role="presentation">
      <use xlink:href="#icon-${logo}" />
    </svg>
  `);

  eleventyConfig.addFilter('formatDate', date => day(date).format('MMM D, YYYY'));

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('assets/dist');
  eleventyConfig.addPassthroughCopy('assets/fonts');
  eleventyConfig.addPassthroughCopy('assets/favicons');

  return {
    dir: {
      input: '.',
      data: 'config',
      includes: 'views',
    }
  };
};
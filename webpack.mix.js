let mix = require("laravel-mix");
const glob = require("glob");
const path = require("path");
const fs = require('fs');
const postcssCustomMedia = require('postcss-custom-media');

// Define your PostCSS plugins in an array
const postCssPlugins = [
  // Import other CSS files
  require('postcss-import'),
  // Enable nested rules
  require('postcss-nested'),
  require('postcss-mixins'),
  postcssCustomMedia(),
  require('postcss-discard-comments')({
    // This option removes all comments
    removeAll: true
  }),
  require('postcss-pxtorem')({
    // Default to 16px; you can set this based on your own base font-size
    rootValue: 16,
    // The decimal numbers to allow the REM units to grow to
    unitPrecision: 5,
    // Properties to change (supports wildcards), '!border*' will not convert border properties
    propList: ['*', '!border*'],
    // Selectors to ignore and leave as px
    selectorBlackList: [],
    // Replace pixels with rems
    replace: true,
    // Allow px to be converted in media queries
    mediaQuery: false,
    // Set the minimum pixel value to replace
    minPixelValue: 0,
  }),
  // Add any other PostCSS plugins here.
];

// We glob any files under components.
let postCssFiles = glob.sync("components/+(Atoms|Organisms)/**/*.post.css");

// Clear CSS files in the output directory before running mix
function clearCssOutput() {
  postCssFiles.forEach(file => {
    // Correctly determine the output file path
    const outputFilePath = file.replace(".post", "");
    if (fs.existsSync(outputFilePath)) {
      fs.unlinkSync(outputFilePath);
    }
  });
}

// Call this function before running mix
clearCssOutput();

// Loop to compile CSS files
postCssFiles.forEach((postCssFile) => {
  // Ensure the correct output file path is used
  let outputFilePath = postCssFile.replace(".post", "");
  mix.postCss(path.resolve(__dirname, postCssFile), outputFilePath, postCssPlugins);
});

// For global.css
mix.postCss(
  path.resolve(__dirname, "./components/_css/global/_index.css"),
  "css/global.css",
  // PostCSS plugins array.
  postCssPlugins
).sourceMaps();

// Setting up BrowserSync for hot reload.
mix.browserSync({
  open: false,
  host: "quartz.lndo.site",
  proxy: "quartz.lndo.site",
  files: [
    "components/**/*.css",
    "components/**/*.twig",
    "templates/**/*.twig",
  ]
});

// Enable source maps.
mix.sourceMaps(true, "source-map");

// Any custom plugins can go here.
mix.webpackConfig({});

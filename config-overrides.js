const {
  override,
  addBabelPreset,
  addPostcssPlugins,
  addBabelPlugins,
} = require("customize-cra");

module.exports = override(
  addBabelPreset("@emotion/babel-preset-css-prop"),
  addPostcssPlugins([
    require("tailwindcss")("./src/tailwind.config.js"),
    require("autoprefixer"),
  ]),
  ...addBabelPlugins("emotion")
);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function createCssExtractPlugin(options = {}) {
  return new MiniCssExtractPlugin(options);
};

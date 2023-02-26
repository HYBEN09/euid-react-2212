const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isDev } = require("../utils");

const stylesLoader = {
  test: /\.css$/i,
  use: [
    isDev ? "style-loader" : MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

const sassLoader = {
  test: /\.s[ac]ss$/i,

  // importLoaders = 2로 만들어 줌 => sass-loader가 추가 되기 때문에
  use: [
    ...stylesLoader.use.map((rule) => {
      if (rule.loader === "css-loader") {
        rule.options.importLoaders += 1;
      }

      return rule;
    }),
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

module.exports = {
  stylesLoader,
  sassLoader,
};

const { resolve } = require("node:path");
const babelLoader = require("./loaders/babel");
const { sassLoader } = require("./loaders/styles");
const tsLoader = require("./loaders/typescript");
const assetLoader = require("./loaders/asset");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const commonConfig = {
  target: "browserslist",
  resolve: {
    // 절대 경로 별칭 등록
    alias: {
      "@": resolve("src"),
      "@utils": resolve("src/utils"),
    },
    extensions: ".ts .tsx .js .jsx .json .wasm".split(" "),
  },
  entry: {
    main: resolve("src/main.tsx"),
  },

  module: {
    rules: [tsLoader, sassLoader, assetLoader].filter(Boolean),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
    }),
  ].filter(Boolean),
};

module.exports = commonConfig;

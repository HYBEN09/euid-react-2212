const { resolve } = require("node:path");
const babelLoader = require("./loaders/babel");
const { sassLoader } = require("./loaders/styles");
const tsLoader = require("./loaders/typescript");
const assetLoader = require("./loaders/asset");
//-----------------------------------------------------------------------

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

//-----------------------------------------------------------------------

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

    //디렉토리를 카피하여 dist에 들어갈 수 있도록 설정하는 플러그인.
    new CopyPlugin({
      patterns: [
        { from: "source", to: "dist" },
        { from: "other", to: "public" },
      ],
    }),
  ],
};

module.exports = commonConfig;

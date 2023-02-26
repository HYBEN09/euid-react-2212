const { resolve } = require("node:path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const createCssExtractPlugin = require("./plugin/cssExtract");

const prodConfig = {
  mode: "production",
  output: {
    path: resolve("build"),
    filename: "[name].[contenthash].min.js",
  },
  plugins: [
    //webpack public 안에 있는 폴더는 build할때 build 폴더에 복사 안됨
    new CopyPlugin({
      //public/assets => assets폴더로 복사
      patterns: [{ from: "public/assets", to: "assets" }],
    }),

    //빌드 할때마다 폴더에 파일 들이 생김 -> 안쓰는 파일 들을 정리 해준다.
    new CleanWebpackPlugin(),

    createCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].chunk.css",
    }),
  ].filter(Boolean),

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};

module.exports = prodConfig;

const { resolve } = require("node:path");
//? template html에 자동으로 번들 파일을 자동으로 추가해줌
const HtmlWebpackPlugin = require("html-webpack-plugin");

//? CSS 코드를 한데 모아놓은 파일이 생성되고 빌드된 HTML 파일의 head 태그안에서 불러오도록 설정
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfig = {
  target: "browserslist",
  resolve: {
    extensions: ".ts .tsx .scss .js .jsx .json .wasm".split(" "),
  },

  entry: {
    main: resolve("src/main.tsx"),
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,

        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },

      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};

module.exports = commonConfig;

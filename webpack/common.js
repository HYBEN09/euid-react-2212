// 경로 찾아오기
const { resolve } = require("node:path");
const babelLoader = require("./loaders/babel");

const commonConfig = {
  target: "browserslist",
  // jsx를 불러오기 위해서 설정
  resolve: {
    extensions: ".ts, .tsx .js .jsx .json .wasm".split(" "),
  },
  entry: {
    main: resolve("src/main.tsx"),
  },
  //babelLoader가 객체이므로 => [babelLoader]
  //Boolean 은 참거짓을 분리 하는 함수.
  module: {
    rules: [babelLoader].filter(Boolean),
  },
};

module.exports = commonConfig;

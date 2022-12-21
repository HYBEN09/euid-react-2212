const { resolve } = require("node:path");
// const babelLoader = require("./loaders/babel");
const { sassLoader } = require("./loaders/styles");
const tsLoader = require("./loaders/typescript");

const commonConfig = {
  target: "browserslist",
  resolve: {
    extensions: ".ts .tsx .js .jsx .json .wasm".split(" "),
    // modules: [resolve("src"), "node_modules"],
    alias: {
      "@": resolve("src"),
    },
  },
  entry: {
    main: resolve("src/main.tsx"),
  },
  module: {
    rules: [tsLoader, sassLoader].filter(Boolean),
  },
};

module.exports = commonConfig;

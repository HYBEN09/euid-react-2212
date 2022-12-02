//배포용

const { resolve } = require("node:path");

const prodConfig = {
  mode: "production",
  output: {
    path: resolve("public"),
    filename: "scripts/build.min.js",
  },
};

module.exports = prodConfig;

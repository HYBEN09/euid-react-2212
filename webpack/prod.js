const { resolve } = require("node:path");

const prodConfig = {
  mode: "production",
  output: {
    path: resolve("build"),
    filename: "main.min.js",
  },
};

module.exports = prodConfig;

const { resolve } = require("node:path");

const commonConfig = {
  target: "browserslist",
  entry: {
    main: resolve("src/main.js"),
  },
};

module.exports = commonConfig;

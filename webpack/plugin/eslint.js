const ESLintPlugin = require("eslint-webpack-plugin");

const eslintPlugin = {
  plugins: [newEslintPlugin()],
};

module.exports = eslintPlugin;

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("node:path");

const htmlWebpackPlugin = {
  plugins: new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
};

module.exports = htmlWebpackPlugin;

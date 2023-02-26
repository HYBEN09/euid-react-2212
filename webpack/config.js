const webpack = require("webpack");
const { merge } = require("webpack-merge");
const commonConfig = require("./common");

const webpackConfig = ({ env }) => {
  const envConfig = require(`./${env}.js`);

  return merge(commonConfig, envConfig, {
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      }),
    ].filter(Boolean),
  });
};

module.exports = webpackConfig;

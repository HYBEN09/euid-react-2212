const babelLoader = {
  test: /\.[jt]sx?$/i,
  exclude: /node_modules/,
  use: "babel-loader",
};

module.exports = babelLoader;

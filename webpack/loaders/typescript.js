const tsLoader = {
  test: /\.tsx?$/i,
  exclude: /node_modules/,
  use: {
    loader: "ts-loader",
    options: {},
  },
};

module.exports = tsLoader;

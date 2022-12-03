const babelLoader = {
  //js or jsx or ts or tsx 모든 파일
  test: /\.[jt]sx?$/i,
  exclude: /node_modules/,
  use: "babel-loader",
};

module.exports = babelLoader;

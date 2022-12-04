const typescriptLoader = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: "ts-loader",
};

module.exports = typescriptLoader;

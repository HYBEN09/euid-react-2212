const stylesLoader = {
  test: /\.(css|sass|scss)$/i,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

module.exports = stylesLoader;

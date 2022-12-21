const stylesLoader = {
  test: /\.css$/i,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        sourceMap: true,
        importLoaders: 1,
      },
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

const sassLoader = {
  test: /\.s[ac]ss$/i,
  use: [
    ...stylesLoader.use.map((rule) => {
      if (rule.loader === "css-loader") {
        rule.options.importLoaders += 1;
      }

      return rule;
    }),
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

module.exports = {
  stylesLoader,
  sassLoader,
};

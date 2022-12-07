const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require("webpack");
// const Dev = process.env.NODE_ENV.includes("dev");

const stylesLoader = {
  test: /\.css$/i,
  use: [
    // Dev ? "style-loader" : MiniCssExtractPlugin.loader
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),

    // new webpack.EnvironmentPlugin({
    //   NODE_ENV: "development",
    // }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              //모든 주석을 제거 .
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
};

//? 배포 모드인 경우 plugins에 배포용 플러그인 추가
// if (process.env.NODE_ENV === "dev") {
//   plugins.push(
//     new MiniCssExtractPlugin({
//       linkType: false,
//     })
//   );
// }

const sassLoader = {
  test: /\.s[ac]ss$/i,

  // importLoaders = 2로 만들어 줌 => sass-loader가 추가 되기 때문에
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

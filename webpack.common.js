const path = require("path");
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    background: path.join(__dirname, "src/background/index.tsx"),
    eventPage: path.join(__dirname, "src/eventPage/index.tsx"),
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.scss$|css$/,
        use: [
          {
            loader: "style-loader", // Creates style nodes from JS strings,
          },
          {
            loader: "css-loader",
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader?name=../font/[name].[ext]",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};

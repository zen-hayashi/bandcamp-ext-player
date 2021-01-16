const path = require("path");
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, "src/popup/index.tsx"),
    background: path.join(__dirname, "src/background/index.tsx"),
    eventPage: path.join(__dirname, "src/eventPage.ts")
  },
  output: {
    path: path.join(__dirname, "dist/js"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.scss$|css$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings,
          },
          {
            loader: "css-loader", // Translates CSS into CommonJS
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new TypedCssModulesPlugin({
      globPattern: 'src/**/*.scss',
    }),
  ]
};

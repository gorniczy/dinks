const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  mode: "development",
  devtool: "eval",
  devServer: {
    contentBase: path.resolve(__dirname, "docs")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: false } },
          { loader: "postcss-loader", options: { sourceMap: false } },
          { loader: "sass-loader", options: { sourceMap: false } }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "D'inks",
      filename: "index.html",
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin()
  ]
};

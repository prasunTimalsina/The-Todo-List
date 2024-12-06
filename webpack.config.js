const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { sources } = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // Use asset/resource for images
        generator: {
          filename: "imgs/[name].[contenthash][ext]", // Place images in 'imgs' folder
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name].[contenthash][ext]",
        },
      },
    ],
  },
};

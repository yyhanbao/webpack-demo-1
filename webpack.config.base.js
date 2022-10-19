const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js", // 自动更新文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "写代码啦",
      template: "src/assets/index.html",
    }),
  ],
};

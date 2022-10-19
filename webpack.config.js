const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // 理解 mode 模式
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

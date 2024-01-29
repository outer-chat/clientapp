const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devServer: {
    port: port,
  },
  module: {
    rules:[
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      /*Choose only one of the following two: if you're using
      plain CSS, use the first one, and if you're using a
      preprocessor, in this case SASS, use the second one*/
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "public/index.html"
    }),
  ]
}

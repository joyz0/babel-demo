const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: path.resolve(__dirname, "./index.js"),
    index2: path.resolve(__dirname, "./index2.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../../lib/webpack")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin()
  ],
  optimization: {
    // 分离runtime
    runtimeChunk: {
      name: "runtime"
    },
    splitChunks: {
      chunks: "all"
    }
  }
};

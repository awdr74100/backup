const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "static/js/[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[hash].css"
    })
  ]
});

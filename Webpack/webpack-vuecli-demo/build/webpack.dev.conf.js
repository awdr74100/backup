const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 9000,
    open: true,
    clientLogLevel: "warn",
    compress: true,
    overlay: true,
    stats: "errors-only",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "vue-style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
});

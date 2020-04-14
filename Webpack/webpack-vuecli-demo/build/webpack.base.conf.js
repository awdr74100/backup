const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: path.resolve(__dirname, "../"),
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/[name].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".vue", ".mjs", ".js", ".json"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@img": path.resolve(__dirname, "../src/assets/img"),
      vue$: "vue/dist/vue.runtime.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compiler: require("vue-template-compiler"), // 此為預設值
          compilerOptions: {
            whitespace: "condense" // 預設為 preserve
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "static/img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.ico"
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name: "vendors",
          enforce: true
        },
        default: false
      }
    }
  }
};

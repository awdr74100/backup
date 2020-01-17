const path = require("path");
const webpack = require("webpack");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const extractCSS = new ExtractTextPlugin("css/[name].css");
// console.log("路徑：",path.resolve(__dirname, 'dist'))

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, "src"),
  //   entry: "./src/index.js",
  //   entry: path.resolve(__dirname, "src"),
  entry: {
    index: "./js/index.js"
    // about: "./js/about.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "bundle.js"
    filename: "[name].js?[hash:8]"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "initial",
          enforce: true
        }
      }
    }
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
        // use: ExtractTextPlugin.extract(["css-loader"])
      },
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              // the webp option will enable WEBP
              // webp: {
              //   quality: 75
              // }
            }
          }
        ]
      }
    ]
  }
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery",
  //     "window.jQuery": "jquery"
  //   })
  // ]
  //   plugins: [extractCSS]
};

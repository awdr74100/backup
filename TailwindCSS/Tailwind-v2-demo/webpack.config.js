const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[contenthash].js',
    assetModuleFilename: 'img/[name].[hash][ext]',
  },
  devServer: {
    port: 9000,
    open: true,
    compress: true,
    overlay: true,
    hot: false,
    host: 'localhost',
    client: { logging: 'warn' },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10KB
          },
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
      title: '模板',
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
    new ESLintPlugin(),
    new StylelintPlugin({
      files: ['**/*.{vue,html,css,scss}'],
      ignorePath: path.resolve(__dirname, '.gitignore'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
          globOptions: {
            dot: true,
            ignore: ['**/favicon.ico'], // use html-webpack-plugin
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.json', '.vue'],
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      '...', // extend existing minimizers
      new CssMinimizerPlugin({
        sourceMap: true,
        minimizerOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
};

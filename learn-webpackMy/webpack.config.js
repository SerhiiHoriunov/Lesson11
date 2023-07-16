const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:["@babel/polyfill", "./src/index.js", "./src/print.js"],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
 plugins: [
  new HtmlWebpackPlugin({
    title: 'My first webpack S.Horiunov',
  }),
],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  devServer: {
    port: 3000,
  },
};

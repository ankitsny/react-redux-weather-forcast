
const join = require('path').join;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [

      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist',
        }),
      }, // use | loader | loaders 
    ],
  },

  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World1',
      minify: {
        collapseWhitespace: false,
      },
      hash: true,
      template: './src/index.html',
    }),
    new ExtractTextWebpackPlugin({
      filename: 'app.css',
      disable: false,
      allChunks: true,
    }),
  ],
};

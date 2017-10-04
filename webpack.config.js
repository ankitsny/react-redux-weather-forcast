
const join = require('path').join;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [
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

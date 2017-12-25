
const join = require('path').join;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

function getCSSConfig(env) {
  if (env === 'production') {
    return ExtractTextWebpackPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'sass-loader'],
      publicPath: '/dist/',
    });
  }
  return ['style-loader', 'css-loader', 'sass-loader'];
}


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: getCSSConfig(process.env.NODE_ENV),
      }, // use | loader | loaders
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=assets/&publicPath=/',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'url-loader?name=fonts/[name].[ext]',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    stats: 'errors-only',
    open: true,
    hot: true,
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
      disable: process.env.NODE_ENV !== 'production',
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};

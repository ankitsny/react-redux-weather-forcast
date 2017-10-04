
const join = require('path').join;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World1',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './src/index.html',
    }),
  ],
};

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/publitio-api.js',
  output: {
    filename: 'publitio-api.min.js',
    path: path.resolve(__dirname, 'build'),
    library: 'PublitioAPI',
    libraryExport: 'default',
  },
  plugins: [
    new webpack.IgnorePlugin(/crypto$/),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};
/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    './app/index.js',
    'whatwg-fetch'
  ],

  output: {
    path: 'dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'babel', 'babel-loader'], exclude: /node_modules/ },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
/* eslint-enable */

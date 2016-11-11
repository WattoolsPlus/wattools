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
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

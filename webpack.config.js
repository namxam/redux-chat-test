var webpack = require('webpack');
var path = require("path");

module.exports = {
  entry: {
    app: ["./app/main.jsx"]
  },
  output: {
    path: "./build",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel?stage=1'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    root: path.resolve(__dirname, 'app')
  }
};

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin('bundle.css'),
  new HtmlWebpackPlugin({template:'src/index.html'})
];

if (process.env.NODE_ENV !== 'development') {
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  debug: process.env.NODE_ENV === 'development',
  resolve: {
    root: path.join(__dirname, 'src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  plugins,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test: /\.jsx?$/,
        loader: process.env.NODE_ENV === 'development' ? 'react-hot!babel!eslint-loader' : 'babel',
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  eslint: {
    configFile: '.eslintrc.js'
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : null,
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true
  }
};

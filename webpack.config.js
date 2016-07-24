/* eslint-disable no-var, comma-dangle, object-shorthand */
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var exclusions = path.join(__dirname, 'node_modules');
var PROD = process.env.NODE_ENV === 'production';

console.log('PRODUCTION', PROD);

var config = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      './src/index.jsx'
    ],
    common: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'core-js'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './srv'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: exclusions,
        loaders: ['babel']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css?sourceMap&modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss' // eslint-disable-line
        )
      },
      {
        test: /\.(eot|svg|ttf|woff)(\?.*)?$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('styles.bundle.css', { allChunks: true })
  ],
  postcss: function postCSSPlugins() {
    return [
      require('autoprefixer'), require('precss') // eslint-disable-line global-require
    ];
  }
};

if (!PROD) {
  config.module.preLoaders = [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['eslint'],
  }];
}

module.exports = config;

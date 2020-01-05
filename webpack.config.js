const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
mode: 'none',
entry: './src/client/index.js',

module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [ 'style-loader', 'css-loader','sass-loader'],
      },
      { test: /\.handlebars$/, loader: "handlebars-loader" }

    ]
  },
plugins: [
    new HtmlWebPackPlugin({
        // title: 'Natural Language Processing',
        // description: 'NLP',
        template: './src/views/index.hbs',
        filename: './index.hbs',
    })

    ]

}
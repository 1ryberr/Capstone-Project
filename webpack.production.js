const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    module: {
        rules: [

            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
            ,
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            // title: 'Natural Language Processing',
            // description: 'NLP',
            template: './src/views/index.hbs',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        })


    ]

}
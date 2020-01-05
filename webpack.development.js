const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    
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
                use: ['style-loader', 'css-loader', 'sass-loader'],
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


        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        })


    ]
    
}
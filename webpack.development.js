const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/client/index.js',

    module: {
        rules: [

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Weather',
            description: 'Weather Application',
            template: 'src/views/index.hbs',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),

        new Dotenv({
            path: '.env',
            safe: true
        }),
        new WorkboxPlugin.GenerateSW()


    ]

}
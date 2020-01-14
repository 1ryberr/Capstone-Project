const path = require('path');
const wepack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAsset = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');



module.exports = {
    mode: 'production',
    entry: './src/client/index.js',

    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_'
        },
        minimizer: [new TerserPlugin(), new OptimizeCssAsset()],
    },
    module: {
        rules: [
            { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' },
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
            { test: /\.hbs$/, loader: "handlebars-loader" }

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Weather',
            description: 'Weather Application',
            template: 'src/views/index.hbs',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),

        new Dotenv({
        path: '.env', 
        safe: true }),
       
        
        ]

}
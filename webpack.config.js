(function () { 'use strict' }());

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')

require('es6-promise').polyfill();

let pathsToClean = [

    'roblox-pro/js/*.js',
    'roblox-pro/css/*.css',
    'roblox-pro/html/*.html'

];

module.exports = {

    entry: {

        'app': './resources/app.js',
        'web': './resources/web.js',

        'views': glob.sync("./resources/views/pages/**/*.pug"),
        'background': './resources/background.js'

    },

    output: {

        path: __dirname,
        publicPath: './',
        filename: './roblox-pro/js/[name].js'

    },

    watch: true,

    plugins: [

        new CleanWebpackPlugin(pathsToClean, {dry: false, watch: true, beforeEmit: true}),
        new ExtractTextPlugin('./roblox-pro/css/[name].css'),
        new UglifyJsPlugin(),
        new PurgecssPlugin({
            paths: glob.sync('./resources/views/**/*.pug', { nodir: true }),
            only: ['./roblox-pro/css/web.css']
        }),

    ],

    module: {
        
        rules: [
            {

                test: /\.js$/,
                exclude: /node_modules/,
                use: [

                    'babel-loader'

                ]

            },
            {

                test: /\.scss$/,
                use: ExtractTextPlugin.extract({

                    fallback: 'style-loader',
                    use: [

                        {

                            loader: 'css-loader',
                            options: { minimize: true }
                            
                        },
                        'postcss-loader',
                        'sass-loader'

                    ]

                })

            },
            {

                test: /\.pug$/,
                use: [

                    "file-loader?name=./roblox-pro/html/[name].html",
                    "extract-loader",
                    "html-loader",
                    {

                        loader: "pug-html-loader",
                        options: {

                            basedir: __dirname + '/resources/views/'

                        }

                    }

                ],

            }
        ]

    },

    stats: {

        colors: true

    },

  devtool: 'source-map'

};
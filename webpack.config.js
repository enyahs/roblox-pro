(function () { 'use strict' }());

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

require('es6-promise').polyfill();

module.exports = {

    entry: {

        'app': './resources/app.js',
        'views': glob.sync("./resources/views/pages/**/*.pug"),
        'background': './resources/background.js'

    },

    output: {

        path: __dirname,
        filename: './roblox-pro/js/[name].js'

    },

    plugins: [

        new ExtractTextPlugin('./roblox-pro/css/app.css'),
        new UglifyJsPlugin()

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
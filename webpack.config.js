/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        })
    ],
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        historyApiFallback: true,
        disableHostCheck: true
    }
};

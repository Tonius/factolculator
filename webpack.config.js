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
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src', 'js')
        }
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
        historyApiFallback: true
    }
};

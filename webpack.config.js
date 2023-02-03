const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: resolve(__dirname, 'index.html')
    })],
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            }
        ]
    },
    devServer: {
        port: '3000'
    }
};
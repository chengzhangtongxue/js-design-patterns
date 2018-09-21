const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        index: './src/index.js',
        indexts:'./src/index.ts'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].[hash:5].js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host: "0.0.0.0"
    }
}

const path = require('path');
var webpackMerge = require("webpack-merge");
const baseConfig = require('./webpack.config');

module.exports = webpackMerge(baseConfig, {
    devtool: 'cheap-source-map',
    module: {
        rules: [{
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: path.resolve(__dirname, '../configs/tsconfigProd.json'),
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    }
});
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     devtool: 'cheap-source-map',
//     entry: {
//         "index": "./src/index.ts" // 入口文件可以多个
//     },
//     output: {
//         filename: "[name].js", // 这里会自动生成index.js
//         path: __dirname + "/build" // 输出到哪个文件夹
//     },
//     resolve: {
//         extensions: [".ts", ".js", ".css"] // 自动补全，很重要
//     },
//     module: {
//         loaders: [{
//             test: /\.css$/,
//             loader: ['style-loader', 'css-loader']
//         }, {
//             test: /\.ts$/,
//             loader: "ts-loader"
//         }]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//     ],
//     externals: [{
//         IndoorMap: 'IndoorMap',
//         IndoorMapLoader: 'IndoorMapLoader'
//     }],
//     devServer: {
//         contentBase: path.join(__dirname, "build")
//     }
// };
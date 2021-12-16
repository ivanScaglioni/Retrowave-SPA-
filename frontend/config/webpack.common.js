const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin }= require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    entry:'./src/main.ts',
    output:{
        path: path.resolve(__dirname, '../dist'),
        filename:'my-app.bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options:{
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                    // 'vue-style-loader',
                    // {
                    //     loader:'css-loader',
                    //     options: {importLoaders:1}
                    // },
                    // 'postcss-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js','.css','.vue']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
        }),
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin()
        
    ]
}
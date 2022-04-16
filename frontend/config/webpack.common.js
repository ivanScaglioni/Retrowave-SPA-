const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin }= require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');


module.exports = {
    entry:'./src/main.ts',
    
    
    output:{

        path: path.resolve(__dirname, '../dist'),
        filename:'bundle.js',
        
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
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
                

            },
            {
                test: /\.html$/i,
                use:[
                    
                    'html-loader',

                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                type: 'asset',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.mp3$/,
                include: path.resolve(__dirname, '../public'),
                loader: 'file-loader'
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js','.css','.vue']
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify:true
        }),
        new MiniCssExtractPlugin(
            { filename: '[name].css' }
        )
        
        
    ]
}
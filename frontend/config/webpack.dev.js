const { merge } = require("webpack-merge");
const  common = require("./webpack.common");
const path = require('path');

const devConfig = {
    mode: "development",
    devServer:{
        static:{
            directory: path.join(__dirname, '../'),
        },
        port: 9000,

    }
};


module.exports = merge(common, devConfig )
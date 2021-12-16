const { merge } = require("webpack-merge");
const  common = require("./webpack.common");

const devConfig = {
    mode: "development",
    devServer:{
        static:{
            directory: "../dist",
        }
    }
};


module.exports = merge(common, devConfig )
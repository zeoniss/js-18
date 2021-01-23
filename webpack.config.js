const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.scss$/,

                use: [
                    "style-loader",
                    "MiniCssExtractPlugin.loader",
                    "css-loader",
                    "scss-loader"
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};
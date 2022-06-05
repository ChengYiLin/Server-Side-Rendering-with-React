const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const clientConfig = {
    name: "client",
    entry: "./client/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist/public"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};

module.exports = merge(baseConfig, clientConfig);

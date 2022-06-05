const path = require("path");
const dotenv = require("dotenv");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

dotenv.config();

module.exports = {
    name: "client",
    entry: "./client/index.tsx",
    mode: process.env.ENV || "development",
    output: {
        path: path.resolve(__dirname, "dist/public"),
        filename: "[name].[contenthash].js",
        publicPath: "",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};

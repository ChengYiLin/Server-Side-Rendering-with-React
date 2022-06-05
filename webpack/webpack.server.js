const path = require("path");
const dotenv = require("dotenv");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

dotenv.config();

const serverConfig = {
    name: "server",
    entry: "./src/index.ts",
    target: "node", // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ from: "./src/views", to: "./views" }],
        }),
    ],
};

module.exports = merge(baseConfig, serverConfig);

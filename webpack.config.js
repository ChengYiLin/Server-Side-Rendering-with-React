const path = require("path");
const dotenv = require("dotenv");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

dotenv.config();

module.exports = {
    entry: "./src/index.ts",
    mode: process.env.ENV || "development",
    target: "node", // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
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
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "./src/views", to: "./views" }],
        }),
    ],
};

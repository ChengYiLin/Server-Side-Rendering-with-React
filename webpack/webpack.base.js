const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.ENV);

module.exports = {
    mode: process.env.ENV || "development",
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
};

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
    name: 'server',
    entry: './src/app.tsx',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.bundle.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../.env'),
                    to: path.resolve(__dirname, '../dist'),
                },
            ],
        }),
    ],
};

module.exports = merge(baseConfig, serverConfig);

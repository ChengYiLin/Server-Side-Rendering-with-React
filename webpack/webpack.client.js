const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
    name: 'client',
    entry: './client/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'client.bundle.js',
    },
};

module.exports = merge(baseConfig, clientConfig);

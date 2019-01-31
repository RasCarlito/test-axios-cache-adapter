const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'dist.js'
    },
    target: 'web',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
}

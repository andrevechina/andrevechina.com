module.exports = {
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [
                    'env',
                    'react'
                ]
            }
        }]
    }
}
const ExtarctPlugin = require('./../plugins/extract-text')

module.exports = {
    test: /\.css$/,
    exclude: /node_modules/,
    loader:  ExtarctPlugin.extract({
        loader: [
            'css-loader?modules&importLoaders=1',
            'postcss-loader'
        ]
    })
}

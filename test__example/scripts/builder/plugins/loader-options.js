const webpack = require('webpack')
const postcssOption = require('./scripts/builder/postcss')

module.exports = new webpack.LoaderOptionsPlugin({
    options: {
        postcss: postcssOption
    }
})

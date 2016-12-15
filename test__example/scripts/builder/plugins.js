//const OccurenceOrderPlugin = require('./plugins/occurence-order')
const DefinePlugin = require('./plugins/define')
const BundleAnalyzerPlugin = require('./plugins/bundle-analyzer')
const HtmlPlugin = require('./plugins/html')
const ExtractTextPlugin = require('./plugins/extract-text')


module.exports = [
    //OccurenceOrderPlugin,
    DefinePlugin,
    BundleAnalyzerPlugin,
    HtmlPlugin,
    ExtractTextPlugin
]

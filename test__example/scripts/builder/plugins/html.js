const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('html-webpack-template')

module.exports = new HtmlWebpackPlugin({
    inject: false,
    template: template,
    title: 'Yihuan Admin App',
})

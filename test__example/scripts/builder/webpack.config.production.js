const path    = require('path')

module.exports = {

    entry: {
        app: path.join(__dirname, 'src', 'app.js')
    },

    output: {
        filename: path.join(__dirname, 'dist', 'bundle.js')
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
        ]
    },

    node: {
        Buffer: false
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 9000,
        inline: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000/v1/api'
            }
        }
    },

    devtool: 'cheap-module-eval-source-map',

    plugins: require('./scripts/builder/plugins')
}

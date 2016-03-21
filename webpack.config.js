var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './app/main.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "main_bundle.js"
    },
    cache: true,
    debug: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.html', '.scss'],
        alias: {
            'styles': __dirname + '/app/scss'
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: "babel-loader"
            },
            {
                test: /\.(css|scss)$/,
                loader: 'style!css?sourceMap!postcss!sass?outputStyle=expanded&sourceMap'
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        htmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 3000,
        hot: true
    }
};
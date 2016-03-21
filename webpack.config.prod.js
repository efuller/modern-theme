var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './app/main.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: "main_bundle.js"
    },
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
                loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        htmlWebpackPluginConfig,
        new ExtractTextPlugin("assets/styles.css", {
            allChunks: true
        })
    ]
};
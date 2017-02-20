// 基本的配置
var webpackHtmlPlugin = require('html-webpack-plugin');
// console.log('webpackHtmlPlugin', webpackHtmlPlugin);
var path = require('path');
// 原理
module.exports =  {
    // 入口文件
    entry: {
        main: './src/main.js',
        b: './src/b.js',
        a: './src/a.js'
    },
    // 输出文件
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name]-[chunkhash].js',
        publicPath: ''
    },
    // 插件的使用
    plugins: [new webpackHtmlPlugin({
        title: 'this is webpack demo',
        filename: 'index.html',
        template: 'index.html',
        inject: 'body',
        excludeChunks: ['a'],
        minify: {
            collapseWhitespace: true,
            removeComments: true
        }
    }), new webpackHtmlPlugin({
        title: 'this is a.html',
        filename: 'a.html',
        template: 'index.html',
        inject: 'body',
        excludeChunks: ['b'],
        minify: {
            removeComments: true
        }
    })]
};

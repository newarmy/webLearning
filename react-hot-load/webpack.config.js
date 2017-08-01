/**
 * Created by xinjundong on 2017/7/24.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
module.exports = {
    entry: {index: [
        'react-hot-loader/patch',
        // 为 React激活热加载

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
       // 为webpack-dev-server绑定客户端，链接到index。js

        'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates
           // 为热加载绑定客户端， only意味着只为成功的更新热加载
        APP_PATH+'/index.js'

]},
  output: {
      path: BUILD_PATH,
      filename: "[name].js"
  },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, //因为用了 plugins: ['transform-runtime'],所以
                use:{
                    loader: "babel-loader",
                    options: {
                        presets: ['env', 'es2015', 'react'],
                        /*
                        babel-loader 很慢：
                        1. exclude node_modules，
                        2. 使用2x版本， 使用cacheDirectory ， 缓存文件系统

                        babel 使代码变大：
                        babel用了很多辅助函数，每一个文件都引用了一套代码。我们可以把 babel runtime
                        作为一个单独的模块来用，这样避免了重复引用



                        In this case, you are using transform-runtime which means Babel will insert references to babel-runtime
                        into your code. The issue is that without exclude: /node_modules/,,
                         or at least exclude: /node_modules\/(?!babel-runtime)/,, you are also telling babel-runtime
                         to insert references to itself inside itself,
                         which creates circular dependencies that will break the code.
                         在这种情况下，用了transform-runtime， babel将把babel-runtime的引用插入你的代码，如果不加exclude: /node_modules/，
                         就会出现循环引用babel-runtime， 这样就使代码中断。

                         */
                        // the 'transform-runtime' plugin tells babel to require the runtime
                        // instead of inlining it.
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }
        ]
    },
    //热加载
    devServer: {
        hot: true,
        contentBase: path.resolve(ROOT_PATH, 'dist'),
        publicPath: '/',
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
// respond to 404s with index.html
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hello app',
            filename: 'index.html',
            template: ROOT_PATH+'/static/index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally， 全局开启热加载

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
    ]
};
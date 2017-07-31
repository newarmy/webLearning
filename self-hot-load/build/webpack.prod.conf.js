var path = require('path');
//var utils = require('./utils')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
function resolve (dir) {
    return path.join(__dirname,'..', dir)
}
console.log(resolve('src'));
console.log('path = '+ path.join(__dirname, '..', 'src', 'main.js'));
module.exports = {
  entry: {
    app: ['./src/main.js']
  },
  output: {
    path: '/dist',
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: [' ', '.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },
    devtool: '#cheap-module-eval-source-map',
    plugins: [


        //在一般 webpack-dev-server 的時候我們會在
        //webpack.config.js 加入 new webpack.HotModuleReplacementPlugin() 或設定來啟用。
        //new webpack.optimize.OccurenceOrderPlugin(), webpack 1中用到
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'SERVERURL': JSON.stringify("http://dev.example.com")
        }),
        // // generate dist index.html with correct asset hash for caching.
        // // you can customize output by editing /index.html
        // // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename:  '/dist/index.html',
            template:  './index.html',
            inject: true
        }),


    ]
}

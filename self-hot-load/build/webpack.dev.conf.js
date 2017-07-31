var path = require('path');
//var utils = require('./utils')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// Add the client which connects to our middleware -- 加一个连接到中间件的客户端
    // You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
	// 你可以有一个完整的url--
    // useful if you run your app from another point like django
	//
	
var clientPort = 'webpack-hot-middleware/client?path=__webpack_hmr&noInfo=true&reload=true';
function resolve (dir) {
    return path.join(__dirname,'..', dir)
}
//console.log(resolve('src'));
//console.log('path = '+ path.join(__dirname, '..', 'src', 'main.js'));
module.exports = {
  entry: {
    app: [clientPort, './src/main.js'],
	app2: [clientPort, './src/main1.js']
  },
  output: {
    path: '/',
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
        //webpack.config.js 加入 new webpack.HotModuleReplacementPlugin() 来启动。
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
            filename:  './index.html',
            template:  './index.html',
			chunks: ['app'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename:  './index1.html',
            template:  './index.html',
			chunks: ['app2'],
            inject: true
        }),

    ]
}

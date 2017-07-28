react 热更新

1.安装开发依赖包：
"react-hot-loader": "^3.0.0-beta.6",
"webpack-dev-server": "^2.2.0"
2. babel配置文件.babelrl添加

  "plugins": [
    "react-hot-loader/babel"
  ]

 3. webpack.config.js添加： 

 entry: {index: [
      'react-hot-loader/patch',
      // 为 React激活热加载

      'webpack-dev-server/client?http://localhost:3000',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      为webpack-dev-server绑定客户端，链接到index。js

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      为热加载绑定客户端， only意味着只为成功的更新热加载

      APP_PATH+'/index.js'

      ]},

  plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally， 全局开启热加载

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin(),
        // do not emit compiled assets that include errors
    ]
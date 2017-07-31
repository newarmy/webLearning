/**/
var opn = require('opn');
var path =require('path');
var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.conf');
var autoOpenBrowser = true;
var port = 8081;
var app = express(); //
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

/*
* 我們都知道 webpack dev server 有提供一種Hot Module Replacement/Hot Reloading 熱替換的功能。
* 在一般 webpack-dev-server 的時候我們會在
 * webpack.config.js 加入 new webpack.HotModuleReplacementPlugin() 或設定來啟用。

 而 webpack hot middleware 是給 webpack-dev-middleware 用的。就是讓我們在一般的 server 上加上熱替換的功能，
 總結來說就是 webpack-dev-middleware + webpack-hot-middleware 即可讓我們用 express 客製一個有熱替換功能的 webpack 開發伺服器。
* */
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log:(message) => {console.log(message)}
});
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
});



app.use(express.static(webpackConfig.output.publicPath));

var uri = 'http://localhost:' + port
app.use(function (req, res, next) {
    next();
});
devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n')
})


module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }

    // 开启浏览器
    if (autoOpenBrowser) {
        opn(uri)
    }
})






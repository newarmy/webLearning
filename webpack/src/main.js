//加载打包样式，模块
require('../css/style.css');
//加载js模块
var c2 = require('./c2');
var u = require('./u');
u.g('btn').onclick = function () {
   //non-entry chunks ， webpack会分离c1模块，单独打包c1，按需异步加载c1
   require.ensure(["./c1"], function () {
	  var c1 = require("./c1");
	  c1();
	});
};
c2();
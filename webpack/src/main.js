//���ش����ʽ��ģ��
require('../css/style.css');
//����jsģ��
var c2 = require('./c2');
var u = require('./u');
u.g('btn').onclick = function () {
   //non-entry chunks �� webpack�����c1ģ�飬�������c1�������첽����c1
   require.ensure(["./c1"], function () {
	  var c1 = require("./c1");
	  c1();
	});
};
c2();
//webpack认为是异步加载
/*require(['./aa'], function (a) {
	a();
});*/
//这样写，webpack认为是同步加载
/*define(['./aa'], function (a) {
	a();
});*/
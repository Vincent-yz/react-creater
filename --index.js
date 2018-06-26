console.log('开始测试..');

require('./app/liuyong-dev-reactCreater');

process.on('uncaughtException', function(e){
	console.log(e);
	console.log('出错了..');
	process.exit(1);
});
console.log('开始测试..');

require('/Users/vincentyeung/Sites/react-creater/app/reactCreater');

process.on('uncaughtException', function(e){
	console.log(e);
	console.log('出错了..');
	process.exit(1);
});
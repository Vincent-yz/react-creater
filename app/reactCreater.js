// 这里是rc命令的主入口，可以处理命令参数，
// 执行对象的任务

var path = require('path');
var paths = require('./config/paths');
var fs = require('fs');
// var Q = require('q');

var command = process.argv[2];
console.log(command);

if(!/^(build|create|help|start|test)$/.test(command)){
	command = 'help';
}

require(path.join(__dirname, 'tasks', command));

// require('./tasks/build');
// require('./tasks/create');
// require('./tasks/help');
// require('./tasks/start');

// gulp.task('default', ['help']);

// gulp.start(command);
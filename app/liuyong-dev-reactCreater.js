var path = require('path');

var command = process.argv[2] || 'liuyong-dev-start';

if(!/^(build|create|help|start|test|liuyong-dev-start)$/.test(command)){
	command = 'help';
}
console.log(path.join(__dirname, 'tasks', command), '-------')
require(path.join(__dirname, 'tasks', command));



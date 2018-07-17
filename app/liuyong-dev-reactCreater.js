var path = require('path');

var command = process.argv[2] || 'liuyong-dev-build';

if(!/^(build|create|help|start|test|liuyong-dev-start|liuyong-dev-build)$/.test(command)){
	command = 'help';
}
console.log(path.join(__dirname, 'tasks', command), '-------')
require(path.join(__dirname, 'tasks', command));



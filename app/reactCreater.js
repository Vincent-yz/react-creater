var path = require('path');

var command = process.argv[2];

if(!/^(build|create|help|start|test)$/.test(command)){
	command = 'help';
}

require(path.join(__dirname, 'tasks', command));



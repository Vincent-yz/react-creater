var path = require('path');
var args = require('yargs').argv;

var command = args._[0];

if(!/^(build|create|help|start|test)$/.test(command)){
	command = 'help';
}

if(command === 'start'){
	process.env.PORT = args.port;
}

require(path.join(__dirname, 'tasks', command));



'use strict';

var chalk = require('chalk');
var showHelp = require('../utils/help');

console.log();
console.log(chalk.blue('Usage: rc <command>'));
console.log();
console.log('create new project');
showHelp("rc create PROJECT_NAME", "make a copy of default project");

console.log();
console.log('development');
showHelp("rc start [--port]", "start a development server");
showHelp("rc build", "create a production");
showHelp('rc test', "testing task is now under developmenting..");

console.log();
console.log('other');
showHelp('rc help', "show help detail");
console.log();

process.exit(0);

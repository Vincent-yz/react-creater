'use strict';

var fs = require('fs');
var chalk = require('chalk');
var args = require('yargs').argv;
var sh = require('shelljs');
var path = require('path');

var reactCreaterDir = path.dirname(path.dirname(__dirname));
var seedsDir = path.join(reactCreaterDir, 'seeds');


var workDir = process.cwd();
var projectName = args._[1] || 'test';

if (!projectName) {
  console.log(chalk.red("project name could not be undefined!"));
  console.log(chalk.red('use: rc create PROJECT_NAME'));
  process.exit(1);
}

var projectFolder = path.join(workDir, projectName);

if (fs.existsSync(projectFolder)) {
  console.log(chalk.red("error: project is already created"));
  process.exit(1);
}

var seedFolder = seedsDir;

console.log(chalk.red('start to create project..'));
sh.cp('-r', seedFolder + '/.', projectName);

console.log(chalk.green("=========project initail completed !==========="));
console.log(chalk.green("follow below command to run your project"));
console.log(chalk.green("cd " + projectName + " # enter project directory"));
console.log(chalk.green("rc start # start development serve"));


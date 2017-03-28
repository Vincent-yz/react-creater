'use strict';

var fs = require('fs');
// var gulp = require('gulp');
var chalk = require('chalk');
var args = require('yargs').argv;
var sh = require('shelljs');

// var log = require('../utils/log');
// var env = require('../utils/env');
var paths = require('../config/paths');

// gulp.task('init', function () {
//   var configTemplate = env.folders.frontJet + '/app/assets/app/fj.conf.js';

//   if (!fs.existsSync(configTemplate)) {
//     log.error("样本文件 [ " + configTemplate + ' ] 不存在，请重新安装front-jet!');
//     return process.exit(1);
//   }

//   var configFile = env.folders.project + '/fj.conf.js';
//   if (fs.existsSync(configFile)) {
//     log.error("本项目已经初始化过，请先删除原有的fj.conf.js再重新初始化");
//     return process.exit(1);
//   }
//   sh.cp(configTemplate, '.');
// });

// gulp.task('create', function () {
  // var workDir = args.cwd;
  var workDir = paths.projectDir;

  var projectName = args._[1];
  // var seed = args._[2] || 'default';
  console.log('workDir:'+workDir);

  if (!projectName) {
    console.log(chalk.red("syntax error, project name could not be undefined!"));
    console.log(chalk.red('use: rc create PROJECT_NAME'));
    process.exit(1);
  }

  var projectFolder = workDir + '/' + projectName;

  if (fs.existsSync(projectFolder)) {
    console.log(chalk.red("error: project is already created"));
    process.exit(1);
  }

  // var seedFolder = env.folders.frontJet + '/seeds/' + seed;
  var seedFolder = paths.seedsDir;

  // if (!fs.existsSync(seedFolder)) {
  //   console.error("种子工程 [ " + seedFolder + ' ] 不存在，请指定有效的种子名');
  //   return;
  // }
  console.log(chalk.red('start to create project..'));
  // process.exit(0)
  sh.cp('-r', seedFolder + '/.', projectName);

  console.log(chalk.blue("=========project initail finished !==========="));
  console.log(chalk.blue("use below command"));
  console.log(chalk.green("cd " + projectName + " # enter project directory"));
  console.log(chalk.green("cr start # start development serve"));
// });

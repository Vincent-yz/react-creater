/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

'use strict';

const path = require('path');
const reactCreaterDir = path.dirname(path.dirname(path.dirname(__dirname)));
const jestConfigPath = path.join(reactCreaterDir, 'node_modules/jest-config/build');

const fs = require('fs');
const paths = require('../../config/paths');
const loadFromFile    = require(path.join(jestConfigPath, './loadFromFile'));
// const loadFromPackage = require(path.join(jestConfigPath, './loadFromPackage'));
const normalize       = require(path.join(jestConfigPath, './normalize'));
const setFromArgv     = require(path.join(jestConfigPath, './setFromArgv'));
const promisify       = require(path.join(jestConfigPath, './lib/promisify'));

/* rewrite loadFromPackage */ 
function loadFromPackage(filePath, argv) {
  return promisify(fs.access)(filePath, fs.R_OK).then(
  () => {
    const packageData = require(filePath);
		// const config = packageData.jest || {};
		const config = {
			"collectCoverageFrom": [
				"src/**/*.{js,jsx}"
			],
			"setupFiles": [
				paths.reactCreaterDir + "/app/config/polyfills.js"
			],
			"testPathIgnorePatterns": [
				"[/\\\\](build|docs|node_modules|scripts)[/\\\\]"
			],
			"testEnvironment": "jsdom",
			"testURL": "http://localhost",
			"transform": {
				"^.+\\.(js|jsx)$": paths.reactCreaterDir + "/node_modules/babel-jest",
				"^.+\\.css$": paths.reactCreaterDir + "/app/config/jest/cssTransform.js",
				"^(?!.*\\.(js|jsx|css|json)$)": paths.reactCreaterDir + "/app/config/jest/fileTransform.js"
			},
			"transformIgnorePatterns": [
				"[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
			],
			"moduleNameMapper": {
				"^react-native$": "react-native-web"
			}
		};
    const root = path.dirname(filePath);
    config.rootDir =
    config.rootDir ? path.resolve(root, config.rootDir) : root;
    return normalize(config, argv);
  },
  () => null);

}

const readConfig = (argv, packageRoot) =>
readRawConfig(argv, packageRoot).
then(config => Object.freeze(setFromArgv(config, argv)));

const parseConfig = argv => {
  if (argv.config && typeof argv.config === 'string') {
    // If the passed in value looks like JSON, treat it as an object.
    if (argv.config[0] === '{' && argv.config[argv.config.length - 1] === '}') {
      return JSON.parse(argv.config);
    }
  }
  return argv.config;
};

const readRawConfig = (argv, root) => {
	const rawConfig = parseConfig(argv);

  if (typeof rawConfig === 'string') {
    return loadFromFile(path.resolve(process.cwd(), rawConfig));
  }

  if (typeof rawConfig === 'object') {
    const config = Object.assign({}, rawConfig);
    config.rootDir = config.rootDir || root;
    return Promise.resolve(normalize(config, argv));
  }

  return loadFromPackage(path.join(root, 'package.json'), argv).
  then(config => config || normalize({ rootDir: root }, argv));
};

module.exports = {
  normalize,
  readConfig };
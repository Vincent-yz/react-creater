'use strict';

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true});

const jest = require('jest');
const argv = process.argv.slice(2);

const rootDir = process.cwd();
const configFile = path.join(rootDir, 'jest.conf.json');
const babelrcFile = path.join(rootDir, '.babelrc');
const rcPath = path.dirname(path.dirname(__dirname));
const dependenciesPath = path.join(rcPath, 'node_modules');

const createConfigFile = () => {
	const jestConfig = {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}"
    ],
    "setupFiles": [
      `${rcPath}/app/config/polyfills.js`,
      `${rootDir}/src/setupTests.js`
    ],
    "testPathIgnorePatterns": [
      "[/\\\\](build|docs|node_modules|scripts)[/\\\\]"
    ],
    "testEnvironment": "jsdom",
    "testURL": "http://localhost",
    "transform": {
      "^.+\\.(js|jsx)$": `${rcPath}/node_modules/babel-jest`,
      "^.+\\.css$": `${rcPath}/app/config/jest/cssTransform.js`,
      "^(?!.*\\.(js|jsx|css|json)$)": `${rcPath}/app/config/jest/fileTransform.js`
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
    ],
    "moduleNameMapper": {
      "^react-native$": "react-native-web"
    }
  };
  const jestConfigStr = JSON.stringify(jestConfig, null, 2)
  fs.writeFileSync(configFile, new Buffer(jestConfigStr));

  const babelConfig = {
    "presets": [
      `${dependenciesPath}/babel-preset-react-app`,
      `${dependenciesPath}/babel-preset-stage-0`
    ],
    "plugins": [
      `${dependenciesPath}/babel-plugin-transform-decorators-legacy`
    ]
  }
  const babelConfigStr = JSON.stringify(babelConfig, null, 2);
  fs.writeFileSync(babelrcFile, new Buffer(babelConfigStr));
}

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}
// using configuration file
argv.push(`--config=${configFile}`);

// create jest config file if needed
if( !fs.existsSync(configFile) ){
	createConfigFile()
}

jest.run(argv);


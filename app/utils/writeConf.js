const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const babelrcFile = path.join(rootDir, '.babelrc');
const rcPath = path.dirname(path.dirname(__dirname));
const dependenciesPath = path.join(rcPath, 'node_modules');

exports.jest = () => {
	// continue
}

exports.babel = () => {
	const babelConfig = {
		"presets": [
			`${dependenciesPath}/babel-preset-react-app`
		],
		"plugins": [
			[
				`${dependenciesPath}/@babel/plugin-proposal-decorators`,
				{
					"legacy": true
				}
			]
		]
	}
	const babelConfigStr = JSON.stringify(babelConfig, null, 2);
	if(!fs.existsSync(babelrcFile)){
  	fs.writeFileSync(babelrcFile, new Buffer(babelConfigStr));
	}
}
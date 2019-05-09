const paths = require('../config/paths');
const path = require('path');

const appPackage = require(paths.appPackageJson);
const aliasPreset = appPackage.alias || {};
const aliasPath = appPackage.aliasPath;

exports.alias = () => {
	const aliasConfig = {};

	if(typeof aliasPath === 'string' && aliasPath.length){
		const aliasFile = path.resolve(paths.appPath, aliasPath);
		const _aliasPreset = require(aliasFile);
		return _aliasPreset;
	}
	for(let alias in aliasPreset){
		aliasConfig[alias] = path.resolve(aliasPreset[alias]);
	}
	return {
		resolve: {
			alias: aliasConfig,
		},
	};
}


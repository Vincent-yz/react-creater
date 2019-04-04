const paths = require('../config/paths');
const path = require('path');

const aliasPreset = require(paths.appPackageJson).alias || {};

exports.alias = () => {
	const aliasConfig = {};
	for(let alias in aliasPreset){
		aliasConfig[alias] = path.resolve(aliasPreset[alias]);
	}
	return aliasConfig;
}


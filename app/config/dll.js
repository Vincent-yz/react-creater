const paths = require('../config/paths');
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const args = require('yargs').argv;
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = function dllFactory(){
	const dllConfig = require(paths.appPackageJson).dll;
	const dllConfigExist = Array.isArray(dllConfig);
	const manifestExist = fs.existsSync(paths.dllManifest);
	const updateDll = 'dll' in args;

	if(
		!dllConfigExist
		|| (manifestExist && !updateDll)
	){
		return null;
	}

	return {
		entry: {
			'vendor': dllConfig,
		},
		output: {
			path: paths.appPublic,
			filename: 'dll.[name].js',
			library: '[name]',
		},
		plugins: [
			new webpack.DllPlugin({
				path: path.join(paths.dllPath, 'dll-manifest.json'),
				name: '[name]',
				context: paths.appNodeModules,
			}),
			// new BundleAnalyzerPlugin({
			// 	analyzerMode: 'static',
			// })
		]
	}
}
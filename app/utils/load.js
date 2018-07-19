/**
 * describe 动态加载模块用于加载 webpack配置
 * */
var fs = require('fs')
var path = require('path')
var paths = require('../config/liuyong-dev-paths')
function load (path, name) {
  if (name) {
    return require(path + name);
  }
  return require(path)
}
function getModule () {
  patcher = {}

  fs.readdirSync(paths.webpack).forEach(function (filename) {
    if (!/\.js$/.test(filename)) {
      return;
    }
    var name = path.basename(filename, '.js');
    var _load = load.bind(null, paths.webpack + '/', name);

    patcher.__defineGetter__(name, _load);
  });
  return patcher;
}
var loadData = getModule()
console.log(loadData)
module.exports = {
  loadModule: loadData
}
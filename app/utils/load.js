/**
 * describe 动态加载模块用于加载 webpack配置
 * */
var fs = require('fs')
var path = require('path')
var paths = require('../config/paths')

function load (path, name) {
  if (name) {
    return require(path + name)
  }
  return require(path)
}

function getModule () {
  patcher = {}
  try {
    fs.readdirSync(paths.webpack).forEach(function (filename) {
      if (!/\.js$/.test(filename)) {
        return
      }
      var name = path.basename(filename, '.js')
      var _load = load.bind(null, paths.webpack + '/', name)

      patcher.__defineGetter__(name, _load)
    })
  } catch (e) {
    console.log('自定义配置目录不存在:工程目录下' + paths.webpack)
    console.log('错误内容::' + JSON.stringify((e)))
  }

  return patcher
}

var loadData = getModule()
console.log(loadData)
module.exports = {
  loadModule: loadData
}
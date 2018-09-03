;(function (global) {
  var modules = {}
  var define = function (id, callback) {
    if (!modules[id]) {
      modules[id] = callback
    }
  }
  var require = function (id, callback) {
    var module = modules[id]
    if (!module) {
      callback()
      return
    }
    if (!module.exports) {
      module.exports = {}
      module.call(module.exports, require, module.exports, module)
    }
    
    callback(module.exports)
  }

  global.define = define
  global.require = require
})(this)

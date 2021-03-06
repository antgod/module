;(function (global) {
  var modules = {}
  var define = function (id, callback) {
    if (!modules[id]) {
      modules[id] = callback
    }
  }
  var require = function (id) {
    var module = modules[id]
    if (!module) {
      return
    }

    if (!module.exports) {
      module.exports = {}
      module.call(module.exports, require, module.exports, module)
    }

    return module.exports
  }

  global.define = define
  global.require = require
})(this)

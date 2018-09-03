modules.push((module, exports, require) => {
  const c = require(2)
  exports.b = function() {
    return c.say()
  }
})

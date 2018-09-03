modules.push((module, exports, require) => {
  const b = require(1)
  
  const a = function () {
    return b.b()
  }
  exports['a'] = a
})

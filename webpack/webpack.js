const modules = []

const installedModules = {}

function require(moduleId) {
  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports
  }
  // Create a new module (and put it into the cache)
  var module = installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  }

  // Execute the module function
  modules[moduleId].call(module.exports, module, module.exports, require)

  // Return the exports of the module
  return module.exports
}

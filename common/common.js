;(function(){
  function MyModule() {
      // ...
  }
  
  var moduleName = MyModule;
  if (typeof module !== 'undefined' && typeof exports === 'object') {
      module.exports = moduleName;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
      define(function() { return moduleName; });
  } else {
      this.moduleName = moduleName;
  }
}).call(this || (typeof window !== 'undefined' ? window : global);

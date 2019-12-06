### runtime 源码

runtime 文件中定义了

- webpackJsonpCallback

```js
function webpackJsonpCallback(data) {
  var chunkIds = data[0];
  var moreModules = data[1];
  var executeModules = data[2];
  // add "moreModules" to the modules object,
  // then flag all "chunkIds" as loaded and fire callback
  var moduleId,
    chunkId,
    i = 0,
    resolves = [];
  for (; i < chunkIds.length; i++) {
    chunkId = chunkIds[i];
    if (
      Object.prototype.hasOwnProperty.call(installedChunks, chunkId) &&
      installedChunks[chunkId]
    ) {
      resolves.push(installedChunks[chunkId][0]);
    }
    installedChunks[chunkId] = 0;
  }
  for (moduleId in moreModules) {
    if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
      modules[moduleId] = moreModules[moduleId];
    }
  }
  if (parentJsonpFunction) parentJsonpFunction(data);
  while (resolves.length) {
    resolves.shift()();
  }
  // add entry modules from loaded chunk to deferred list
  deferredModules.push.apply(deferredModules, executeModules || []);
  // run deferred modules when all chunks ready
  return checkDeferredModules();
}
```

- checkDeferredModules

```js
function checkDeferredModules() {
  var result;
  for (var i = 0; i < deferredModules.length; i++) {
    var deferredModule = deferredModules[i];
    var fulfilled = true;
    for (var j = 1; j < deferredModule.length; j++) {
      var depId = deferredModule[j];
      if (installedChunks[depId] !== 0) fulfilled = false;
    }
    if (fulfilled) {
      deferredModules.splice(i--, 1);
      result = __webpack_require__((__webpack_require__.s = deferredModule[0]));
    }
  }
  return result;
}
```

- installedModules

```js
var installedModules = {};
```

- installedChunks

```js
var installedChunks = {
  runtime: 0
};
```

- deferredModules

```js
var deferredModules = [];
```

- \_\_webpack_require\_\_

```js
function __webpack_require__(moduleId) {
  // Check if module is in cache
  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  var module = (installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  });

  // Execute the module function
  modules[moduleId].call(
    module.exports,
    module,
    module.exports,
    __webpack_require__
  );

  // Flag the module as loaded
  module.l = true;

  // Return the exports of the module
  return module.exports;
}
```

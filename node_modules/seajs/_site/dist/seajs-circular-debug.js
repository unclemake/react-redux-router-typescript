(function(){
var restore = {};
function clone(obj) {
  var ret = {};
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      ret[i] = obj[i];
    }
  }
  return ret;
}
function check(uri, history, arr) {
  history = history || {};
  arr = arr || [];
  arr.push(uri);
  if(history.hasOwnProperty(uri)) {
    console.warn('circular dependency:\n' + arr.join('\n'));
    var mod = seajs.cache[uri];
    var uris = mod.resolve();
    for(var i = uris.length - 1; i >=0; i--) {
      if(uris[i] === arr[1]) {
        if(!restore.hasOwnProperty(uri)) {
          restore[uri] = mod.dependencies.slice(0);
        }
        mod.dependencies.splice(i, 1);
      }
    }
    //需递归，防止多重循环引用只检测出其中一个的情况
    if(mod.dependencies.length) {
      check(uri);
    }
    return;
  }
  history[uri] = true;
  var mod = seajs.cache[uri];
  if(mod) {
    var d = mod.dependencies;
    for(var i = 0; i < d.length; i++) {
      check(seajs.Module.resolve(d[i], uri), clone(history), arr.slice(0));
    }
  }
}
seajs.on("save", function(mod) {
  if(mod.dependencies.length) {
    check(mod.uri);
  }
});
seajs.on("exec", function(mod) {
  //运行结束后还原
  if(restore.hasOwnProperty(mod.uri)) {
    var data = restore[mod.uri];
    mod.dependencies = data;
    delete restore[mod.uri];
  }
});
define("seajs/seajs-circular/1.2.0/seajs-circular-debug", [], {});
})();
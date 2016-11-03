"use strict";

define("components/ajax/index.js", function (require, exports, module) {
    "use strict";

    var Superagent = require('node_modules/superagent/index');
    function get(url) {
        return Superagent.get(url);
    }
    exports.get = get;
    function post(url) {
        return Superagent.get(url);
    }
    exports.post = post;
    // 添加后端访问路径等处理 
});
//# sourceMappingURL=index.js.map

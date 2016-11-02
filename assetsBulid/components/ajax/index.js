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
});
//# sourceMappingURL=index.js.map

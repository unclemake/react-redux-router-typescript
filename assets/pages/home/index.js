define(function(require, exports, module) {"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        _super.apply(this, arguments);
    }
    AppRouter.prototype.render = function () {
        return (React.createElement("div", null, "1111"));
    };
    return AppRouter;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
})
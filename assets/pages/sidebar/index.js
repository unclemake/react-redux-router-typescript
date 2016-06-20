define(function(require, exports, module) {"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../index.d.ts" />
var React = require('react');
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        _super.apply(this, arguments);
    }
    Component.prototype.render = function () {
        return React.createElement("section", {className: "page-sidebar"});
    };
    return Component;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
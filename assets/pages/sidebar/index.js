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
        return React.createElement("section", {className: "page-sidebar"}, React.createElement("header", null, React.createElement("img", {src: "components/global/image/head.png"}), React.createElement("p", {className: "name"}, "Di Xu"), React.createElement("p", {className: "mt20"}, "设置", React.createElement("span", {className: "line"}), "退出")), React.createElement("nav", null, React.createElement("a", {className: "selected"}, React.createElement("i", {className: "iconfont icon-book"}), React.createElement("span", {className: "fl"}, "接待中心"), React.createElement("span", {className: "tag"}, "28")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "信息推送")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "患者管理")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "健康档案")), React.createElement("a", null, React.createElement("span", {className: "icon"}, React.createElement("i", {className: "iconfont icon-book"})), React.createElement("span", {className: "fl"}, "网站维护"))), React.createElement("footer", null, React.createElement("a", null, "中文"), React.createElement("span", {className: "line"}), React.createElement("a", null, "English")));
    };
    return Component;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
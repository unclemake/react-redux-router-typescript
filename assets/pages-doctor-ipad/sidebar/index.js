define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
class Component extends React.Component {
    render() {
        let pathname = this.props.location.pathname;
        return React.createElement("section", {className: "page-sidebar"}, React.createElement("header", null, React.createElement("img", {src: "components/global/image/head.png"}), React.createElement("p", {className: "mt10"}, "退出")), React.createElement("footer", null, React.createElement("a", null, "中文"), React.createElement("a", null, "English")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
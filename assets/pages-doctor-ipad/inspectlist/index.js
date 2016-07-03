define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
require('./index.css');
class Component extends React.Component {
    render() {
        return React.createElement("section", {className: "inspectlist-page pr"}, React.createElement("div", {className: "return-box"}, React.createElement("a", {className: "return-btn iconfont icon-left"}), "返回"), React.createElement("section", {className: "userlist-content"}, React.createElement("ul", {className: "inspect-list"}, React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "2016-06-17")))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
const react_router_1 = require('react-router');
class Component extends React.Component {
    constructor(...args) {
        super(...args);
        this.navList = [
            {
                name: '历史追溯',
                icon: 'book',
                url: '/home'
            },
            {
                name: '账号管理',
                icon: 'book',
                url: '/useradmin'
            }
        ];
    }
    render() {
        let pathname = this.props.location.pathname;
        return React.createElement("section", {className: "page-sidebar"}, React.createElement("header", null, React.createElement("img", {src: "components/global/image/head.png"}), React.createElement("p", {className: "name"}, "Di Xu"), React.createElement("p", {className: "mt20"}, "设置", React.createElement("span", {className: "line"}), "退出")), React.createElement("nav", null, this.navList.map((value, index) => {
            return React.createElement(react_router_1.Link, {key: index, className: pathname == value.url ? 'selected' : '', to: value.url}, React.createElement("i", {className: "iconfont icon-" + value.icon}), React.createElement("span", {className: "fl"}, value.name), value.number && React.createElement("span", {className: "tag"}, value.number));
        })), React.createElement("footer", null, React.createElement("a", null, "中文"), React.createElement("span", {className: "line"}), React.createElement("a", null, "English")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
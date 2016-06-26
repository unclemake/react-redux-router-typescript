define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
 * 聊天用户列表
 */
const React = require('react');
const index_1 = require('../../../components/scroll/index');
class Component extends React.Component {
    /**
     * 用户组件
     * @param value 数据
     * @param index index
     */
    userComponent(value, index) {
        return React.createElement("li", {key: index}, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: value.url}), React.createElement("p", {className: "name"}, value.name)), value.reception && React.createElement("div", {className: "head fr"}, React.createElement("img", {src: value.reception.url}), React.createElement("p", {className: "name"}, value.reception.name)), value.reception && React.createElement("i", {className: "iconfont icon-bag"}));
    }
    list(value, index) {
        return React.createElement("dl", {key: index}, React.createElement("dt", null, React.createElement("i", {className: "iconfont icon-bag mr20 fl"}), React.createElement("span", {className: "fl"}, value.name), value.unread && React.createElement("span", {className: "tag"}, value.unread)), React.createElement("dd", null, React.createElement("ul", null, value.myList.map((value, i) => this.userComponent(value, i)))), React.createElement("dd", null, React.createElement("ul", null, value.notList.map((value, i) => this.userComponent(value, i)))), React.createElement("dd", {className: "gray-dd"}, React.createElement("ul", null, value.otherList.map((value, i) => this.userComponent(value, i)))));
    }
    render() {
        let { chatList } = this.props;
        return React.createElement("section", {className: "chat-list"}, React.createElement(index_1.default, null, React.createElement("div", {className: "chat-list-content"}, chatList.map((value, index) => this.list(value, index)))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
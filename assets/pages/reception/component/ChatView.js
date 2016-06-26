define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
 * 聊天窗口
 */
const React = require('react');
const util = require('../../../components/util/index');
const chatList_1 = require('./chatList');
class Component extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            txt: ''
        };
    }
    getHtml(txt) {
        return txt;
    }
    getTxt(html) {
        return html;
    }
    addChatRecord() {
        this.props.addChatRecord({
            time: util.formatDate(new Date()),
            style: 0,
            txt: this.state.txt
        });
    }
    txtChange(e) {
        //this.state.txt = e.
        console.log(e);
        //this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        let { txt } = this.state;
        return React.createElement("section", {className: "chat-content"}, React.createElement("div", {className: "header"}, React.createElement("span", {className: "name fl"}, this.props.chatUserRecord.name), React.createElement("i", {className: "iconfont icon-bag fr"})), React.createElement(chatList_1.default, {chatRecordList: this.props.chatUserRecord.list}), React.createElement("div", {className: "chat-send"}, React.createElement("div", {className: "palette"}, React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"})), React.createElement("div", {className: "input-txt", onInput: this.txtChange.bind(this), contentEditable: true, dangerouslySetInnerHTML: { __html: this.getHtml(txt) }}), React.createElement("a", {className: "btn fr btn-send"}, "发送")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
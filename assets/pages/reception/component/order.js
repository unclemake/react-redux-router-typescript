define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
 * 预约列表
 */
const React = require('react');
class Component extends React.Component {
    constructor(...args) {
        super(...args);
        this.stateText = {
            0: '',
            1: '候诊中',
            2: '就诊中'
        };
        this.stateBtnText = {
            0: '候诊',
            1: '就诊',
            2: '就诊结束'
        };
    }
    updataOrder(id) {
        this.props.updataOrder({
            id: id
        });
    }
    ;
    render() {
        return React.createElement("section", {className: "order-box module"}, React.createElement("h2", null, "已预约患者"), React.createElement("section", {className: "seach"}, React.createElement("input", {type: "text", placeholder: "输入姓名／证件号／微信号"}), React.createElement("a", {className: "iconfont icon-book seach-btn"})), React.createElement("section", {className: "list"}, React.createElement("p", {className: "count"}, "已搜索到 108 位预约患者"), React.createElement("ul", null, this.props.list.map((value, index) => {
            return React.createElement("li", {key: index}, React.createElement("img", {className: "head", src: value.url}), React.createElement("div", {className: "fl"}, React.createElement("p", {className: "name"}, value.name), React.createElement("p", null, this.stateText[value.state])), React.createElement("a", {className: "btn", onClick: () => {
                this.updataOrder(value.id);
            }}, this.stateBtnText[value.state]));
        }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
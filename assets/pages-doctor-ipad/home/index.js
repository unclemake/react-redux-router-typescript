define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
require('./index.css');
class Component extends React.Component {
    render() {
        return React.createElement("section", {className: "main-content-bg home-page"}, React.createElement("p", {className: "title"}, "就诊患者"), React.createElement("section", {className: "patient-content"}, React.createElement("div", {className: "center-box"}, React.createElement("p", {className: "phote"}, React.createElement("img", {src: "./components/global/image/head.png"})), React.createElement("p", {className: "name"}, "王庆雅"), React.createElement("div", {className: "fun cf"}, React.createElement("div", {className: "grid-12 tr bo-l"}, React.createElement("span", {className: "iconfont icon-bag mr15"}), "健康档案"), React.createElement("div", {className: "grid-12 tl"}, React.createElement("span", {className: "iconfont icon-bag mr15"}), "就诊结束")))), React.createElement("div", {className: "patient-msg"}, React.createElement("div", {className: "grid-12 bo-l blue"}, React.createElement("p", null, "已就诊数：5"), React.createElement("p", null, "待就诊数：6")), React.createElement("div", {className: "grid-12"}, React.createElement("p", null, "下一个患者"), React.createElement("p", {className: "f64"}, "李小猫"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
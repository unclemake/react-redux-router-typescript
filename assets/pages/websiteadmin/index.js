define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
* 短信设置
*/
const React = require('react');
require('./index.css');
//渲染
class App extends React.Component {
    render() {
        return React.createElement("section", {className: "websiteadmin-page"}, React.createElement("nav", null, React.createElement("a", {className: "selected"}, "医院介绍"), React.createElement("a", null, "专家介绍"), React.createElement("a", null, "就医指南"), React.createElement("a", null, "健康贴士"), React.createElement("a", null, "素材库")), React.createElement("section", {className: "websiteadmin-content"}, React.createElement("section", {className: "left-box"}, React.createElement("div", {className: "add-box"}, React.createElement("a", null, "+新增医院介绍")), React.createElement("section", {className: "left-box-content"}, React.createElement("table", {className: "table-add"}, React.createElement("tr", null, React.createElement("th", null, "医院名称"), React.createElement("td", null, React.createElement("input", {className: "text"}))), React.createElement("tr", null, React.createElement("th", null, "宣传图片"), React.createElement("td", null, React.createElement("a", {className: "iconfont icon-bag upload-btn"}))), React.createElement("tr", null, React.createElement("th", null, "医院地址"), React.createElement("td", null, React.createElement("input", {className: "text"}))), React.createElement("tr", null, React.createElement("th", null, "咨询电话"), React.createElement("td", null, React.createElement("input", {className: "text"}))), React.createElement("tr", null, React.createElement("th", {colspan: "2"}, "医院概况")), React.createElement("tr", null, React.createElement("td", {colspan: "2"}, React.createElement("textarea", {className: "textarea"})))), React.createElement("div", {className: "tc mt40"}, React.createElement("a", {className: "btn btn-huge"}, "保存"), React.createElement("a", {className: "btn btn-huge btn-gray-bo ml40"}, React.createElement("i", {className: "iconfont icon-bag"}), "预览")))), React.createElement("section", {className: "right-box"}, React.createElement("section", {className: "left-box-content"}, React.createElement("ul", {className: "department-list"}, React.createElement("li", null, React.createElement("span", null, "仁济医院国际门诊部"), React.createElement("span", {className: "fr"}, React.createElement("a", {className: "iconfont icon-bag"}, "编辑"), React.createElement("a", {className: "iconfont icon-bag"}, "删除"))))))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
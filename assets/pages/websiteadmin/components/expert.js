define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
* 短信设置
*/
const React = require('react');
const index_1 = require('../../../components/paging/index');
const nav_1 = require('./nav');
require('../index.css');
//渲染
class App extends React.Component {
    render() {
        return React.createElement("section", {className: "websiteadmin-page"}, React.createElement(nav_1.default, null), React.createElement("section", {className: "seach-box mt20"}, React.createElement("input", {className: "tc", type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"}), React.createElement("div", {className: "number"}, "分组标签  3/10")), React.createElement("div", {className: "add-box"}, React.createElement("a", {className: "fl"}, "+新增医院介绍"), React.createElement("div", {className: "tx gray tc"}, "当前专家人数100")), React.createElement("section", {className: "websiteadmin-content2"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "头像"), React.createElement("th", null, "姓名"), React.createElement("th", null, "性别"), React.createElement("th", null, "职称"), React.createElement("th", null, "简介"), React.createElement("th", null, "审核状态"), React.createElement("th", null, "排序"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ZT0012"), React.createElement("td", null, React.createElement("img", {className: "head", src: "./components/global/image/head.png"})), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon"), React.createElement("td", null, "jhon")))), React.createElement(index_1.Paging, {sum: 20, onChange: () => { }})));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
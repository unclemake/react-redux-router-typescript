define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
require('./index.css');
require('../../pages/reception/index.css');
class Component extends React.Component {
    render() {
        return React.createElement("section", {className: "main-content-bg"}, React.createElement("section", {className: "my-page"}, React.createElement("div", {className: "title"}, React.createElement("a", null, "修改密码"), React.createElement("a", {className: "selected"}, "个人介绍")), React.createElement("table", {className: "docter-table"}, React.createElement("tr", null, React.createElement("th", null, "姓名"), React.createElement("td", null, React.createElement("input", {className: "text", type: "text"})), React.createElement("th", null, "性别"), React.createElement("td", null, React.createElement("input", {className: "text sm", type: "text"})), React.createElement("th", null, "职称"), React.createElement("td", null, React.createElement("input", {className: "text", type: "text"})), React.createElement("th", null, "学科"), React.createElement("td", null, React.createElement("input", {className: "text sm", type: "text"}))), React.createElement("tr", null, React.createElement("th", null, "头像"), React.createElement("td", {colSpan: "6"}, React.createElement("a", {className: "upload-btn"}, React.createElement("img", {src: "../../components/global/image/head.png"})), React.createElement("p", {className: "f18 mt15"}, "尺寸建议：120*120px"))), React.createElement("tr", null, React.createElement("th", null, "简介"), React.createElement("td", {colSpan: "7"}, React.createElement("textarea", {className: "textarea"}))), React.createElement("tr", null, React.createElement("th", {colSpan: "6", className: "lin14"}, React.createElement("p", null, "审核意见"), React.createElement("p", {className: "red f18"}, "审核不通过：用户头像请上传本人头像。")))), React.createElement("div", {className: "mt50 tc"}, React.createElement("a", {className: "btn btn-huge"}, "保存"), React.createElement("a", {className: "btn btn-gray-bo btn-huge ml40"}, "取消"))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
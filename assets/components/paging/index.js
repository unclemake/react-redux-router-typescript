define(function(require, exports, module) {"use strict";
/// <reference path="../../pages/index.d.ts" />
const React = require('react');
const index_1 = require('../layer/index');
class Paging extends React.Component {
    renderPage(index) {
        return (index > 0 && index <= this.props.sum) && React.createElement("span", {onClick: () => this.onChange(index), className: index == (this.props.index || 1) ? 'btn' : 'btn btn-gray-bo'}, " ", index);
    }
    onChange(index) {
        if (!/^[1-9]\d*$/g.test(index)) {
            index_1.msg('请输入正整数!');
        }
        if (index && index > 0 && index <= this.props.sum) {
            this.props.onChange(index);
        }
    }
    render() {
        let index = this.props.index || 1;
        let props = this.props;
        return React.createElement("section", {className: "paging " + (this.props.className || '')}, index > 1 && React.createElement("span", {className: "btn btn-gray-bo", onClick: () => this.onChange(index - 1)}, "上一页"), this.renderPage(index - 3), this.renderPage(index - 2), this.renderPage(index - 1), this.renderPage(index), this.renderPage(index + 1), this.renderPage(index + 2), this.renderPage(index + 3), index != props.sum && React.createElement("span", {className: "btn btn-gray-bo", onClick: () => this.onChange(index + 1)}, "下一页"), React.createElement("span", null, "共 ", index, "/", props.sum), React.createElement("span", null, React.createElement("input", {type: "text", className: "text", ref: "text", onChange: (e) => {
            this.textValue = e.target.value;
        }})), React.createElement("span", {className: "btn btn-gray-bo", onClick: () => {
            this.onChange(this.textValue);
        }}, "跳转"));
    }
}
exports.Paging = Paging;
})
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
        return React.createElement("section", {className: "paymenset-page dn"}, React.createElement("h2", null, "保险支付"), React.createElement("ul", {className: "paymenset-list"}, React.createElement("li", {className: "add-box"}, React.createElement("i", {className: "iconfont icon-bag"}), React.createElement("p", null, "添加支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式")), React.createElement("li", null, React.createElement("img", {src: "../../components/global/image/head.png"}), React.createElement("p", null, "编辑  |  删除支付方式"))))
            ,
                React.createElement("section", {className: "paymenset-page"}, React.createElement("table", {className: "paymenset-table"}, React.createElement("tr", null, React.createElement("th", null, "支付logo"), React.createElement("td", null, React.createElement("a", {className: "upload-btn"}, React.createElement("img", {src: "../../components/global/image/head.png"})), React.createElement("p", {className: "f14 tc upload-into"}, "尺寸建议120*120"))), React.createElement("tr", null, React.createElement("th", null, "支付说明"), React.createElement("td", null, React.createElement("input", {type: "checkbox"}), " 关闭说明", React.createElement("input", {type: "checkbox"}), " 开启说明")), React.createElement("tr", null, React.createElement("td", null), React.createElement("td", null, React.createElement("textarea", {className: "textarea"})))), React.createElement("div", {className: "tc m40"}, React.createElement("a", {className: "btn btn-huge"}, "保存"), React.createElement("a", {className: "btn btn-huge btn-gray-bo ml40"}, "取消")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
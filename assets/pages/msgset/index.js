define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
* 短信设置
*/
const React = require('react');
const index_1 = require('../../components/checkbox/index');
require('./index.css');
//渲染
class App extends React.Component {
    render() {
        return React.createElement("section", {className: "msgset-page main-content-bg"}, React.createElement("h2", null, "短信设置 ", React.createElement("span", {className: "ml20 f18 black"}, "设置哪些功能开启短信提醒")), React.createElement("div", {className: "msgset-content"}, React.createElement("h3", null, "预约提醒"), React.createElement("ul", {className: "set-list"}, React.createElement("li", null, React.createElement("p", {className: "title"}, React.createElement(index_1.Checkbox, null), "预约就诊的前一天", React.createElement("span", {className: "ml30 f14 black"}, "其中[date]为系统变量，会自动生成预约时间，格式如2016-06-01 13: 00-17: 00")), React.createElement("p", {className: "txt-title black"}, "短信内容:"), React.createElement("p", {className: "txt"}, "【仁济医院】您好，您预约了明天到“仁济医院国际门诊”就诊，就诊时间[date]，就诊地点：上海市浦东新区北园路33号，联系电话：0086-21-68383408。")), React.createElement("li", null, React.createElement("p", {className: "title"}, React.createElement(index_1.Checkbox, null), "预约成功"), React.createElement("p", {className: "txt-title black"}, "短信内容:"), React.createElement("p", {className: "txt"}, "【仁济医院】您好，您预约了明天到“仁济医院国际门诊”就诊，就诊时间[date]，就诊地点：上海市浦东新区北园路33号，联系电话：0086-21-68383408。")), React.createElement("li", null, React.createElement("p", {className: "title"}, React.createElement(index_1.Checkbox, null), "就诊叫号提醒"), React.createElement("p", {className: "txt-title black"}, "短信内容:"), React.createElement("p", {className: "txt"}, "【仁济医院】您现在可以就诊，请到护士台。")), React.createElement("li", null, React.createElement("p", {className: "title"}, React.createElement(index_1.Checkbox, null), "健康档案更新提醒"), React.createElement("p", {className: "txt-title black"}, "短信内容:"), React.createElement("p", {className: "txt"}, "【仁济医院】您好，您的健康档案有更新，请到“仁济微网站-个人中心-健康档案”查看。")))), React.createElement("div", {className: "tc mt100 save-box"}, React.createElement("a", {className: "btn btn-huge"}, "保存"), React.createElement("a", {className: "btn btn-huge btn-gray-bo ml40"}, "取消")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
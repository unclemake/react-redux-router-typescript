define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
* 预约中心
*/
const React = require('react');
const react_redux_1 = require('react-redux');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    render() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "h100 message-page"}, React.createElement("section", {className: "process-box"}, React.createElement("div", {className: "li prev"}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "1")), React.createElement("p", null, "选择推送内容")), React.createElement("div", {className: "li selected"}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "2")), React.createElement("p", null, "选择推送内容")), React.createElement("div", {className: "li"}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "3")), React.createElement("p", null, "推送信息"))));
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
define(function(require, exports, module) {/// <reference path="../../index.d.ts" />
"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    renderOneView() {
        return React.createElement("div", {className: "message-content cf"}, React.createElement("section", {className: "message-box-left"}, React.createElement("section", {className: "seach-box"}, React.createElement("input", {type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"}), React.createElement("div", {className: "number"}, "分组标签  3/10")), React.createElement("section", {className: "group-box mt15"}, React.createElement("dl", {className: "group-list"}, React.createElement("dt", null, React.createElement("input", {type: "checkbox"}), " 全部群组"), React.createElement("dd", null, React.createElement("input", {className: "radio", type: "radio"}), " ", React.createElement("span", null, "国际门诊"), "(25) "), React.createElement("dd", null, React.createElement("input", {className: "radio", type: "radio"}), " ", React.createElement("span", null, "国际门诊"), "(25) "), React.createElement("dd", null, React.createElement("input", {className: "radio", type: "radio"}), " ", React.createElement("span", null, "国际门诊"), "(25) "), React.createElement("dd", null, React.createElement("input", {className: "radio", type: "radio"}), " ", React.createElement("span", null, "国际门诊"), "(25) ")))), React.createElement("section", {className: "message-box-right"}, React.createElement("section", {className: "user-list"}, React.createElement("dl", {className: "pt15"}, React.createElement("dt", null, React.createElement("input", {type: "checkbox"}), "上海交大教授", React.createElement("span", {className: "number"}, "10/16")), React.createElement("dd", null, React.createElement("dl", null, React.createElement("dt", null, React.createElement("input", {type: "checkbox"}), "上海交大教授", React.createElement("span", {className: "number"}, "10/16")), React.createElement("dd", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("img", {className: "head", src: "../../components/global/image/head.png"}), React.createElement("span", {className: "arrow"}), React.createElement("span", {className: "iconfont  icon-hook"})), React.createElement("li", {className: "selected"}, React.createElement("img", {className: "head", src: "../../components/global/image/head.png"}), React.createElement("span", {className: "arrow"}), React.createElement("span", {className: "iconfont icon-hook"}))))))))), React.createElement("section", {className: "send-box cf"}, React.createElement("div", {className: "grid-12 tr pr40"}, React.createElement("a", {className: "return-btn"}, React.createElement("span", {className: "iconfont icon-left"}))), React.createElement("div", {className: "grid-12 pl40"}, React.createElement("input", {type: "checkbox"}), React.createElement("span", {className: "vm iconimg icon-mail"}), React.createElement("span", {className: "vm"}, "同事发送短信"), React.createElement("a", {className: "btn btn-big vm send-btn ml20"}, "发送"))));
    }
    renderTwoView() {
        return React.createElement("section", {className: "message-content-box"}, React.createElement("div", {className: "message-content-title"}, React.createElement("span", {className: "fl"}, "筛选："), React.createElement("ul", {className: "filter-list"}, React.createElement("li", null, React.createElement("a", {className: "btn"}, "素材库")), React.createElement("li", null, React.createElement("a", {className: "btn btn-blue"}, "就医指南")), React.createElement("li", null, React.createElement("a", {className: "btn btn-blue"}, "健康贴士"))), React.createElement("section", {className: "seach-box"}, React.createElement("input", {type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"}), React.createElement("div", {className: "number"}, "分组标签  3/10"))), React.createElement("div", {className: "content"}, React.createElement("dl", {className: "message-material-list"}, React.createElement("dt", null, "推送信息素材库  ", React.createElement("span", {className: "iconfont icon-bottom"})), React.createElement("dd", {className: "selected"}, React.createElement("p", {className: "title"}, React.createElement("span", {className: "radio selected vm"}), "饭后不能立即吃水果"), React.createElement("p", {className: "txt"}, "很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。"), React.createElement("a", {className: "iconfont icon-seach seach-btn"})), React.createElement("dd", null, React.createElement("p", {className: "title"}, React.createElement("span", {className: "radio selected vm"}), "饭后不能立即吃水果"), React.createElement("p", {className: "txt"}, "很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。"), React.createElement("a", {className: "iconfont icon-seach seach-btn"})), React.createElement("dd", null, React.createElement("p", {className: "title"}, React.createElement("span", {className: "radio selected vm"}), "饭后不能立即吃水果"), React.createElement("p", {className: "txt"}, "很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。"), React.createElement("a", {className: "iconfont icon-seach seach-btn"})))), React.createElement("section", {className: "send-box tc cf"}, React.createElement("a", {className: "return-btn"}, React.createElement("span", {className: "iconfont icon-right"}))));
    }
    renderThreeView() {
        return React.createElement("section", {className: "send-success-box"}, React.createElement("div", {className: "content"}, React.createElement("span", {className: "vm iconimg icon-mail"}), "发送成功"), React.createElement("p", {className: "txt"}, React.createElement("span", {className: "blue"}, "2S"), "  后自动跳转至主页"));
    }
    renderView() {
        switch (this.props.state.state) {
            case 0:
                return this.renderOneView();
            case 1:
                return this.renderTwoView();
            case 2:
                return this.renderThreeView();
        }
    }
    renderProcess() {
        let { state } = this.props.state;
        let getClass = (i) => {
            let css = "li ";
            if (i > state) {
                return css + '';
            }
            else if (i == state) {
                return css + 'selected';
            }
            else if (i < state) {
                return css + 'prev';
            }
        };
        return React.createElement("section", {className: "process-box"}, React.createElement("div", {className: getClass(0)}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "1")), React.createElement("p", null, "选择推送内容")), React.createElement("div", {className: getClass(1)}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "2")), React.createElement("p", null, "选择推送内容")), React.createElement("div", {className: getClass(2)}, React.createElement("span", {className: "line-left"}), React.createElement("span", {className: "line-right"}), React.createElement("span", {className: "number"}, React.createElement("span", null, "3")), React.createElement("p", null, "推送信息")));
    }
    render() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "h100 message-page main-content"}, this.renderProcess(), this.renderView());
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
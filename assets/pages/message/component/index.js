define(function(require, exports, module) {/// <reference path="../../index.d.ts" />
"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const action = require('../action');
const index_1 = require('../../../components/checkbox/index');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            zeroCount: 3
        };
        this.dispatch = this.props.dispatch;
    }
    /**
    * 第一页开始
    */
    renderOneView() {
        let { messageLabelList } = this.props.state;
        return React.createElement("section", {className: "message-content-box"}, React.createElement("div", {className: "message-content-box-c"}, React.createElement("div", {className: "message-content-title"}, React.createElement("span", {className: "fl"}, "筛选："), React.createElement("ul", {className: "filter-list"}, messageLabelList.map((value, index) => {
            return React.createElement("li", {key: index}, React.createElement("a", {className: "btn " + (value.selected ? 'btn-blue' : '')}, value.name));
        })), React.createElement("section", {className: "seach-box"}, React.createElement("input", {type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"}), React.createElement("div", {className: "number"}, "分组标签  3/10"))), React.createElement("div", {className: "content"}, messageLabelList.map((value, index) => {
            if (value.selected) {
                return React.createElement("dl", {className: "message-material-list", key: index}, React.createElement("dt", null, value.name, "  ", React.createElement("span", {className: "iconfont icon-bottom"})), this.renderMessageMaterial(value.id));
            }
        }))), React.createElement("section", {className: "send-box tc cf"}, React.createElement("a", {className: "return-btn", onClick: () => { this.dispatch(action.updateState(1)); }}, React.createElement("span", {className: "iconfont icon-right"}))));
    }
    renderMessageMaterial(id) {
        let { messageMaterialList } = this.props.state;
        let data = messageMaterialList.filter(value => value.labelId == id);
        return data.map((value, index) => {
            return React.createElement("dd", {key: index, className: value.selected ? 'selected' : ''}, React.createElement("div", {className: "title"}, React.createElement(index_1.Radio, {checked: value.selected, showCheckbox: true}, value.title)), React.createElement("p", {className: "txt"}, value.content), React.createElement("a", {className: "iconfont icon-seach seach-btn"}));
        });
    }
    /**
     * 第二页开始
     */
    renderTwoView() {
        return React.createElement("div", null, React.createElement("div", {className: "message-content cf"}, React.createElement("section", {className: "message-box-left"}, React.createElement("section", {className: "seach-box"}, React.createElement("input", {type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"})), React.createElement("div", {className: "lable-cont"}, "分组标签  3/10"), React.createElement("section", {className: "group-box mt15"}, React.createElement("dl", {className: "group-list"}, React.createElement("dt", null, React.createElement(index_1.Checkbox, {showCheckbox: true}, "全部群组")), React.createElement("dd", null, React.createElement(index_1.Checkbox, {showCheckbox: true}, React.createElement("span", {className: "txt"}, "国际门诊"), "(25) "))))), React.createElement("section", {className: "message-box-right"}, React.createElement("section", {className: "user-list"}, React.createElement("dl", {className: "pt15"}, React.createElement("dt", null, React.createElement(index_1.Checkbox, {showCheckbox: true}, "上海交大教授", React.createElement("span", {className: "number"}, "10/16"))), React.createElement("dd", null, React.createElement("dl", null, React.createElement("dt", null, React.createElement(index_1.Checkbox, {showCheckbox: true}, "上海交大教授", React.createElement("span", {className: "number"}, "10/16"))), React.createElement("dd", null, React.createElement("ul", null, React.createElement("li", null, React.createElement(index_1.Checkbox, {className: "check-img"}, React.createElement("img", {className: "head", src: "../components/global/image/head.png"}), React.createElement("span", {className: "arrow"}), React.createElement("span", {className: "iconfont  icon-hook"}))), React.createElement("li", null, React.createElement(index_1.Checkbox, {className: "check-img", checked: true}, React.createElement("img", {className: "head", src: "../components/global/image/head.png"}), React.createElement("span", {className: "arrow"}), React.createElement("span", {className: "iconfont  icon-hook"}))))))))))), React.createElement("section", {className: "send-box cf"}, React.createElement("div", {className: "grid-12 tr pr40"}, React.createElement("a", {className: "return-btn", onClick: () => { this.dispatch(action.updateState(0)); }}, React.createElement("span", {className: "iconfont icon-left"}))), React.createElement("div", {className: "grid-12 pl40"}, React.createElement(index_1.Checkbox, {className: "mr10 vm"}), React.createElement("span", {className: "vm mr10 iconimg icon-mail"}), React.createElement("span", {className: "vm "}, "同事发送短信"), React.createElement("a", {className: "btn btn-big vm send-btn ml20", onClick: this.sendMessage.bind(this)}, "发送"))));
    }
    /**
     * 发送短信
     */
    sendMessage() {
        this.dispatch(action.updateState(2));
        this.zeroCount();
    }
    /**
     * 倒计时
     */
    zeroCount() {
        this.state.zeroCount--;
        this.setState(this.state);
        if (this.state.zeroCount == 0) {
            this.state.zeroCount = 3;
            this.dispatch(action.updateState(0));
        }
        else {
            setTimeout(() => this.zeroCount(), 1000);
        }
    }
    /**
     * 第三页开始
     */
    renderThreeView() {
        return React.createElement("section", {className: "send-success-box"}, React.createElement("div", {className: "content"}, React.createElement("span", {className: "vm iconimg icon-mail"}), "发送成功"), React.createElement("p", {className: "txt"}, React.createElement("span", {className: "blue"}, this.state.zeroCount, "S"), "  后自动跳转至主页"));
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
        return React.createElement("div", {className: "h100"}, React.createElement("section", {className: "h100 message-page main-content"}, this.renderProcess(), this.renderView()));
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
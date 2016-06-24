define(function(require, exports, module) {"use strict";
/**
* 预约中心
*/
var React = require('react');
var react_redux_1 = require('react-redux');
var redux_1 = require('./redux');
require('./index.css');
//获取state
var mapStateToProps = function (state) {
    return state;
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var _a = this.props, state = _a.state, dispatch = _a.dispatch;
        return React.createElement("section", {className: "h100"}, React.createElement(Order, {list: state.orderList, updataOrder: function (args) { return dispatch(redux_1.updateOrder(args)); }}), React.createElement("section", {className: "chat-box module"}, React.createElement("header", null, React.createElement("span", {className: "fl"}, "咨询患者"), React.createElement("span", {className: "fr"}, React.createElement("i", {className: "iconfont icon-bag"}), React.createElement("i", {className: "iconfont icon-bag ml10"}))), React.createElement("div", {className: "chat-cont"}, React.createElement(CharUser, null), React.createElement(CharView, null))));
    };
    return App;
}(React.Component));
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
/**
 * 聊天窗口
 */
var CharView = (function (_super) {
    __extends(CharView, _super);
    function CharView() {
        _super.apply(this, arguments);
    }
    CharView.prototype.render = function () {
        return React.createElement("section", {className: "chat-content"}, React.createElement("div", {className: "header"}, React.createElement("span", {className: "name fl"}, "John"), React.createElement("i", {className: "iconfont icon-bag fr"})), React.createElement(CharList, null), React.createElement("div", {className: "chat-send"}, React.createElement("div", {className: "palette"}, React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"}), React.createElement("i", {className: "iconfont icon-book"})), React.createElement("div", {className: "input-txt"}), React.createElement("a", {className: "btn fr btn-send"}, "发送")));
    };
    return CharView;
}(React.Component));
/**
 * 聊天列表
 */
var CharList = (function (_super) {
    __extends(CharList, _super);
    function CharList() {
        _super.apply(this, arguments);
    }
    CharList.prototype.render = function () {
        return React.createElement("div", {className: "content"}, React.createElement("div", {className: "li"}, React.createElement("div", {className: "time"}, React.createElement("time", null, "10：28"))), React.createElement("div", {className: "li"}, React.createElement("img", {className: "head", src: "./components/global/image/head.png"}), React.createElement("p", {className: "txt"}, React.createElement("i", {className: "icon"}), "我想咨询下神经科偏头痛")), React.createElement("div", {className: "li li-right"}, React.createElement("img", {className: "head", src: "./components/global/image/head.png"}), React.createElement("p", {className: "txt"}, React.createElement("i", {className: "icon"}), "公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。")));
    };
    return CharList;
}(React.Component));
/**
 * 聊天用户列表
 */
var CharUser = (function (_super) {
    __extends(CharUser, _super);
    function CharUser() {
        _super.apply(this, arguments);
    }
    CharUser.prototype.render = function () {
        return React.createElement("section", {className: "chat-list"}, React.createElement("dl", null, React.createElement("dt", null, React.createElement("i", {className: "iconfont icon-bag mr20 fl"}), React.createElement("span", {className: "fl"}, "国际门诊"), React.createElement("span", {className: "tag"}, "28")), React.createElement("dd", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("div", {className: "head fr"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("i", {className: "iconfont icon-bag"})), React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("div", {className: "head fr"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("i", {className: "iconfont icon-bag"})), React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("div", {className: "head fr"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("i", {className: "iconfont icon-bag"})))), React.createElement("dd", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅"))))), React.createElement("dd", {className: "gray-dd"}, React.createElement("ul", null, React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("div", {className: "head fr"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("i", {className: "iconfont icon-bag"})), React.createElement("li", null, React.createElement("div", {className: "head fl"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("div", {className: "head fr"}, React.createElement("img", {src: "./components/global/image/head.png"}), React.createElement("p", {className: "name"}, "王庆雅")), React.createElement("i", {className: "iconfont icon-bag"}))))));
    };
    return CharUser;
}(React.Component));
/**
 * 预约列表
 */
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        _super.apply(this, arguments);
        this.stateText = {
            0: '候诊中',
            1: '候诊中2'
        };
        this.stateBtnText = {
            0: '候诊',
            1: '候诊2'
        };
    }
    Order.prototype.updataOrder = function (id, state) {
        state++;
        this.props.updataOrder({
            id: id, state: state
        });
    };
    ;
    Order.prototype.render = function () {
        var _this = this;
        return React.createElement("section", {className: "order-box module"}, React.createElement("h2", null, "已预约患者"), React.createElement("section", {className: "seach"}, React.createElement("input", {type: "text", placeholder: "输入姓名／证件号／微信号"}), React.createElement("a", {className: "iconfont icon-book seach-btn"})), React.createElement("section", {className: "list"}, React.createElement("p", {className: "count"}, "已搜索到 108 位预约患者"), React.createElement("ul", null, this.props.list.map(function (value) {
            return React.createElement("li", null, React.createElement("img", {className: "head", src: value.url}), React.createElement("div", {className: "fl"}, React.createElement("p", {className: "name"}, value.name), React.createElement("p", null, _this.stateText[value.state])), React.createElement("a", {className: "btn", onClick: function () {
                _this.updataOrder(value.id, value.state);
            }}, _this.stateBtnText[value.state]));
        }))));
    };
    return Order;
}(React.Component));
})
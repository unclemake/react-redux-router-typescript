define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
* 预约中心
*/
const React = require('react');
const react_redux_1 = require('react-redux');
const action = require('../action');
const order_1 = require('./order');
const chatView_1 = require('./chatView');
const chatUser_1 = require('./chatUser');
require('../index.css');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    render() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "h100"}, React.createElement("section", {className: "fr h100"}, React.createElement(order_1.default, {list: state.orderList, updataOrder: (args) => dispatch(action.updateOrder(args))})), React.createElement("section", {className: "chat-box  module"}, React.createElement("header", null, React.createElement("span", {className: "fl"}, "咨询患者"), React.createElement("span", {className: "fr"}, React.createElement("i", {className: "iconfont icon-bag"}), React.createElement("i", {className: "iconfont icon-bag ml10"}))), React.createElement("div", {className: "chat-cont"}, React.createElement(chatUser_1.default, {chatList: state.chatList}), React.createElement(chatView_1.default, {chatUserRecord: state.currentChatRecord, addChatRecord: (args) => dispatch(action.addChatRecord(args))}))));
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
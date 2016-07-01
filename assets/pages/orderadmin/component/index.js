define(function(require, exports, module) {/// <reference path="../../index.d.ts" />
"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const index_1 = require('../../../components/checkbox/index');
const index_2 = require('../../../components/paging/index');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            show: false
        };
    }
    detailedShow() {
        this.state.show = true;
        this.setState(this.state);
    }
    renderDetailed() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "orderadmin-page"}, React.createElement("section", {className: "orderadmin-content-all"}, React.createElement("table", {className: "table-vertical"}, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("th", null, "就诊人姓名"), React.createElement("td", null, "小包总")), React.createElement("tr", null, React.createElement("th", null, "证件类型"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "证件类型"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "证件号"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "支付方式"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "期望就诊时间"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "过往就诊信息"), React.createElement("td", null, "身份证")), React.createElement("tr", null, React.createElement("th", null, "病情资料")), React.createElement("tr", null, React.createElement("td", {colSpan: "2"}, React.createElement("img", {className: "phote", src: "../../components/global/image/head.png"}), React.createElement("img", {className: "phote", src: "../../components/global/image/head.png"}), React.createElement("img", {className: "phote", src: "../../components/global/image/head.png"}))), React.createElement("tr", null, React.createElement("th", null, "医生"), React.createElement("td", null, React.createElement("select", null, React.createElement("option", null, "哈哈哈")))))), React.createElement("div", {className: "tc mt100"}, React.createElement("a", {className: "btn btn-big"}, "保存"), React.createElement("a", {className: "btn btn-big btn-gray ml40", onClick: () => {
            this.setState({
                show: false
            });
        }}, "取消"))));
    }
    renderList() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "orderadmin-page"}, React.createElement(index_1.SwitchBox, {className: "fr", closeText: "待处理", openText: "全部"}), React.createElement("section", {className: "seach-box"}, React.createElement("input", {className: "tc", type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"}), React.createElement("div", {className: "number"}, "分组标签  3/10")), React.createElement("section", {className: "orderadmin-content"}, React.createElement("table", {className: "table"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "姓名"), React.createElement("th", null, "证件类型"), React.createElement("th", null, "证件号"), React.createElement("th", null, "支付方式"), React.createElement("th", null, "就诊时间"), React.createElement("th", null, "操作"))), React.createElement("tbody", null, state.orderUserList.map((value, index) => {
            return React.createElement("tr", {key: index}, React.createElement("td", null, value.id), React.createElement("td", null, value.name), React.createElement("td", null, value.IDType), React.createElement("td", null, value.ID), React.createElement("td", null, value.paymentMethod), React.createElement("td", null, value.doctorTime), React.createElement("td", null, React.createElement("a", {className: "mr20", onClick: this.detailedShow.bind(this)}, React.createElement("i", {className: "iconfont icon-bag mr5"}), "详情"), React.createElement("a", {className: "mr20"}, React.createElement("i", {className: "iconfont icon-bag mr5"}), "回诊"), React.createElement("a", {className: "mr20"}, React.createElement("i", {className: "iconfont icon-bag mr5"}), "取消预约")));
        }))), React.createElement(index_2.Paging, {sum: 20, onChange: () => { }})));
    }
    render() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "main-content"}, this.state.show ? this.renderDetailed() : this.renderList());
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
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
            return React.createElement("li", {key: index}, React.createElement("a", {onClick: () => {
                this.dispatch(action.update_label_selected({
                    id: value.id, selected: !value.selected
                }));
            }, className: "btn " + (value.selected ? 'btn-blue' : '')}, value.name));
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
            return React.createElement("dd", {key: index, className: value.selected ? 'selected' : ''}, React.createElement("div", {className: "title"}, React.createElement(index_1.Radio, {checked: value.selected, onChange: (checked) => {
                this.dispatch(action.update_materia_selected({
                    id: value.id,
                    selected: checked
                }));
            }}, value.title)), React.createElement("p", {className: "txt"}, value.content), React.createElement("a", {className: "iconfont icon-seach seach-btn"}));
        });
    }
    /**
     * 第二页开始
     */
    renderTwoView() {
        let cont = 0;
        let contSelected = 0;
        let state = this.props.state;
        let userTypeGroupList = state.userGroupList[state.indexGroup];
        userTypeGroupList.list.forEach((value, index) => {
            cont += value.userList.length;
            value.userList.forEach((value, index) => {
                value.selected && contSelected++;
            });
        });
        return React.createElement("div", null, React.createElement("div", {className: "message-content cf"}, React.createElement("section", {className: "message-box-left"}, React.createElement("section", {className: "seach-box"}, React.createElement("input", {type: "text", placeholder: "输入标签名"}), React.createElement("a", {className: "iconfont icon-seach seach-btn"})), React.createElement("div", {className: "lable-cont"}, "分组标签  3/10"), React.createElement("section", {className: "group-box mt15"}, React.createElement("dl", {className: "group-list"}, React.createElement("dt", null, React.createElement(index_1.Checkbox, {onChange: (checked) => {
            this.selectedAll(checked);
        }, checked: this.props.state.userGroupList.every(value => value.selected), className: "fuck"}, "全部群组")), this.props.state.userGroupList.map((value, index) => {
            return React.createElement("dd", {className: "cp", key: index}, React.createElement(index_1.Checkbox, {checked: value.selected, onChange: (checked) => {
                this.dispatch(action.update_group_selected({
                    id: value.id,
                    selected: checked
                }));
            }}), React.createElement("span", {className: "txt"}, value.name), "(", value.total, ")");
        })))), React.createElement("section", {className: "message-box-right"}, React.createElement("section", {className: "user-list"}, React.createElement("dl", {className: "pt15"}, React.createElement("dt", null, React.createElement(index_1.Checkbox, {onChange: (checked) => {
            this.dispatch(action.update_group_selected({
                id: userTypeGroupList.id,
                selected: checked
            }));
        }, checked: cont == contSelected}, "全部", React.createElement("span", {className: "number"}, contSelected, "/", cont))), userTypeGroupList.list.map((value, index) => {
            let cont = value.userList.length;
            let contSelect = value.userList.filter(value => value.selected == true).length;
            let groupValue = value;
            return React.createElement("dd", {key: index}, React.createElement("dl", null, React.createElement("dt", null, React.createElement(index_1.Checkbox, {checked: cont == contSelect, onChange: (checked) => {
                value.userList.forEach((value, index) => {
                    this.dispatch(action.update_user_selected({
                        groupId: groupValue.id,
                        id: value.id,
                        selected: checked
                    }));
                });
            }}, value.name, React.createElement("span", {className: "number"}, contSelect, "/", cont))), React.createElement("dd", null, React.createElement("ul", null, value.userList.map((value, index) => {
                return React.createElement("li", {key: index}, React.createElement(index_1.Checkbox, {onChange: (checked) => {
                    this.dispatch(action.update_user_selected({
                        groupId: groupValue.id,
                        id: value.id,
                        selected: checked
                    }));
                }, showCheckbox: false, className: "check-img", checked: value.selected}, React.createElement("img", {className: "head", src: value.url}), React.createElement("span", {className: "arrow"}), React.createElement("span", {className: "iconfont  icon-hook"})));
            })))));
        }))))), React.createElement("section", {className: "send-box cf"}, React.createElement("div", {className: "grid-12 tr pr40"}, React.createElement("a", {className: "return-btn", onClick: () => { this.dispatch(action.updateState(0)); }}, React.createElement("span", {className: "iconfont icon-left"}))), React.createElement("div", {className: "grid-12 pl40"}, React.createElement(index_1.Checkbox, {className: "mr10 vm"}), React.createElement("span", {className: "vm mr10 iconimg icon-mail"}), React.createElement("span", {className: "vm "}, "同事发送短信"), React.createElement("a", {className: "btn btn-big vm send-btn ml20", onClick: this.sendMessage.bind(this)}, "发送"))));
    }
    /**
     * 选中所有群组
     * @param checked 状态
     */
    selectedAll(checked) {
        let state = this.props.state;
        state.userGroupList.forEach(value => {
            this.dispatch(action.update_group_selected({
                id: value.id,
                selected: checked
            }));
        });
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
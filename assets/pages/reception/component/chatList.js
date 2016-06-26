define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
/**
 * 聊天列表
 */
const React = require('react');
class Component extends React.Component {
    constructor(...args) {
        super(...args);
        this.getStyle = {
            0: '',
            1: 'li-right'
        };
    }
    render() {
        let { chatRecordList } = this.props;
        return React.createElement("div", {className: "content"}, chatRecordList.map((item, index) => {
            if (index > 0) {
                var prevTime = new Date(chatRecordList[index - 1].time.replace('-', '/'));
                var indexTime = new Date(chatRecordList[index].time.replace('-', '/'));
                var reduceTime = indexTime.getTime() - prevTime.getTime();
                if (reduceTime / 1000 / 60 >= 10) {
                    var divTime = React.createElement("div", {className: "li"}, React.createElement("div", {className: "time"}, React.createElement("time", null, indexTime.getHours(), "：", indexTime.getMinutes())));
                }
            }
            return React.createElement("section", {key: index}, divTime, React.createElement("div", {className: "li " + this.getStyle[item.style]}, React.createElement("img", {className: "head", src: item.url}), React.createElement("div", {className: "txt"}, React.createElement("i", {className: "icon"}), item.txt)));
        }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Component;
})
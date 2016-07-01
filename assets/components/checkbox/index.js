define(function(require, exports, module) {"use strict";
/// <reference path="../../pages/index.d.ts" />
const React = require('react');
class Checkbox extends React.Component {
    constructor(...args) {
        super(...args);
        this.className = 'checkbox';
    }
    click() {
        this.change(!this.props.checked);
    }
    change(checked) {
        this.props.onChange && this.props.onChange(checked);
    }
    getClassName() {
        let className = this.className + ' ';
        className += this.props.checked ? ' selected ' : '';
        className += !this.props.children && this.props.className ? this.props.className : '';
        return className;
    }
    /**
     * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
     * @param only
     */
    renderCheckbox() {
        return React.createElement("div", {className: this.getClassName(), onClick: !this.props.children && this.click.bind(this)});
    }
    /**
   * 渲染有子级的checkbox
   * @param only
   */
    renderTextCheckbox() {
        return React.createElement("div", {className: 'cp ' + (this.props.className && this.props.className) + (this.props.checked ? ' selected' : ''), onClick: this.click.bind(this)}, (this.props.showCheckbox === undefined || !!this.props.showCheckbox) && this.renderCheckbox(), this.props.children);
    }
    render() {
        return this.props.children ? this.renderTextCheckbox() : this.renderCheckbox();
    }
}
exports.Checkbox = Checkbox;
let radioList = {};
class Radio extends Checkbox {
    constructor(...args) {
        super(...args);
        this.className = 'radio';
    }
    click() {
        if (!this.props.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            });
            this.change(!this.props.checked);
        }
    }
    componentDidMount() {
        if (!radioList[this.props.name]) {
            radioList[this.props.name] = [() => {
                    this.change(false);
                }];
        }
        else {
            radioList[this.props.name].push(() => {
                this.change(false);
            });
        }
    }
}
exports.Radio = Radio;
class SwitchBox extends Checkbox {
    constructor(...args) {
        super(...args);
        this.className = 'switchbox';
    }
    /**
   * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
   * @param only
   */
    renderCheckbox() {
        return React.createElement("div", {width: this.props.width, className: this.getClassName(), onClick: !this.props.children && this.click.bind(this)}, React.createElement("span", {className: "span"}, this.props.closeText || '关'), React.createElement("span", {className: "span"}, this.props.openText || '开'));
    }
}
exports.SwitchBox = SwitchBox;
})
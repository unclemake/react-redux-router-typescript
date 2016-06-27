define(function(require, exports, module) {"use strict";
/// <reference path="../../pages/index.d.ts" />
const React = require('react');
class Checkbox extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            checked: this.props.checked
        };
        this.className = 'checkbox';
    }
    click() {
        this.change(!this.state.checked);
    }
    change(checked) {
        this.state.checked = checked;
        this.setState(this.state);
        this.props.onChange && this.props.onChange(this.state.checked);
    }
    /**
     * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
     * @param only
     */
    renderCheckbox(only = true) {
        let className = this.className + ' ';
        className += this.state.checked ? ' selected ' : '';
        className += only && this.props.className ? this.props.className : '';
        return React.createElement("div", {className: className, onClick: only && this.click.bind(this)});
    }
    /**
   * 渲染有子级的checkbox
   * @param only
   */
    renderTextCheckbox() {
        return React.createElement("div", {className: 'cp ' + (this.props.className && this.props.className) + (this.state.checked ? ' selected' : ''), onClick: this.click.bind(this)}, this.props.showCheckbox && this.renderCheckbox(false), this.props.children);
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
        if (!this.state.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            });
            this.change(!this.state.checked);
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
})
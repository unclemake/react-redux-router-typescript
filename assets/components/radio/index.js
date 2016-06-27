define(function(require, exports, module) {"use strict";
/// <reference path="../../pages/index.d.ts" />
const React = require('react');
let radioList = {};
/**
 * radio
 */
class Main extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            checked: this.props.checked
        };
    }
    click() {
        if (!this.state.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            });
            this.change(!this.state.checked);
        }
    }
    change(checked) {
        this.state.checked = checked;
        this.setState(this.state);
        this.props.onChange && this.props.onChange(this.state.checked);
    }
    componentDidMount() {
        if (!radioList[this.props.name]) {
            radioList[this.props.name] = [function () {
                    this.change(false);
                }];
        }
        else {
            radioList[this.props.name].push(function () {
                this.change(false);
            });
        }
    }
    render() {
        return React.createElement("span", {className: "radio " + (this.props.name ? this.props.name : '') + ' ' + (this.state.checked ? 'selected' : ''), onClick: this.click.bind(this)});
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
})
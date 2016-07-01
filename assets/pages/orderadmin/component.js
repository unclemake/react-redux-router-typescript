define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
const React = require('react');
const react_redux_1 = require('react-redux');
require('../index.css');
//获取state
const mapStateToProps = state => {
    return state;
};
class App extends React.Component {
    render() {
        const { state, dispatch } = this.props;
        return React.createElement("section", {className: "h100"});
    }
}
exports.App = App;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(App);
})
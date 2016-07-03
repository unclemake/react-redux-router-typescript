define(function(require, exports, module) {"use strict";
/// <reference path="../../index.d.ts" />
const React = require('react');
const ReactDOM = require('react-dom');
const react_router_1 = require('react-router');
const index_1 = require('../sidebar/index');
function async(text) {
    return (location, callback) => {
        console.log('加载：' + text);
        require.async(text, (mod) => {
            var Com = mod.default;
            callback(null, (prop) => {
                return React.createElement(Main, __assign({}, prop), React.createElement(Com, null));
            });
        });
    };
}
class Main extends React.Component {
    render() {
        return React.createElement("div", {className: "h100"}, React.createElement(index_1.default, __assign({}, this.props)), React.createElement("main", null, this.props.children));
    }
}
class AppRouter extends React.Component {
    render() {
        return React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Redirect, {from: "/", to: "home"}), React.createElement(react_router_1.Route, {path: "/home", getComponents: async('../home/index')}), React.createElement(react_router_1.Route, {path: "/my", getComponents: async('../my/index')}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById('app'));
})
define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
const React = require('react');
const ReactDOM = require('react-dom');
const react_router_1 = require('react-router');
const index_1 = require('../sidebar/index');
function async(text) {
    return (location, callback) => {
        console.log('加载：' + text);
        require.async(text, (mod) => {
            callback(null, mod.default);
        });
    };
}
class AppRouter extends React.Component {
    render() {
        return React.createElement("div", {className: "h100"}, React.createElement(index_1.default, null), React.createElement("main", null, React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Redirect, {from: "/", to: "message"}), React.createElement(react_router_1.Route, {path: "message", getComponents: async('../message/index')}), React.createElement(react_router_1.Route, {path: "reception", getComponents: async('../reception/index')}))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById('app'));
})
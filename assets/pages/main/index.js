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
        return React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Redirect, {from: "/", to: "message"}), React.createElement(react_router_1.Route, {path: "/message", getComponents: async('../message/index')}), React.createElement(react_router_1.Route, {path: "/msgset", getComponents: async('../msgset/index')}), React.createElement(react_router_1.Route, {path: "/reception", getComponents: async('../reception/index')}), React.createElement(react_router_1.Route, {path: "/orderadmin", getComponents: async('../orderadmin/index')}), React.createElement(react_router_1.Route, {path: "/patientadmin", getComponents: async('../patientadmin/index')}), React.createElement(react_router_1.Route, {path: "/archivesadmin", getComponents: async('../archivesadmin/index')}), React.createElement(react_router_1.Route, {path: "/websiteadmin", getComponents: async('../websiteadmin/index')}), React.createElement(react_router_1.Route, {path: "/websiteadmin/expert", getComponents: async('../websiteadmin/components/expert')}), React.createElement(react_router_1.Route, {path: "/paymenset", getComponents: async('../paymenset/index')}));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById('app'));
})
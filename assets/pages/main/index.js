define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
var React = require('react');
var ReactDOM = require('react-dom');
var react_router_1 = require('react-router');
var index_1 = require('../sidebar/index');
function async(text) {
    return function (location, callback) {
        console.log('加载：' + text);
        require.async(text, function (mod) {
            callback(null, mod.default);
        });
    };
}
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        _super.apply(this, arguments);
    }
    AppRouter.prototype.render = function () {
        return React.createElement("div", {className: "h100"}, React.createElement(index_1.default, null), React.createElement("main", null, React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Redirect, {from: "/", to: "reception"}), React.createElement(react_router_1.Route, {path: "home", getComponents: async('../home/index')}), React.createElement(react_router_1.Route, {path: "reception", getComponents: async('../reception/index')}), React.createElement(react_router_1.Route, {path: "/*", getComponents: async('../error/index')}))));
    };
    return AppRouter;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
ReactDOM.render(React.createElement(AppRouter, null), document.getElementById('app'));
})
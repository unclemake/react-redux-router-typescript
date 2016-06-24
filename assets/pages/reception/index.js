define(function(require, exports, module) {"use strict";
/**
* 预约中心
*/
var React = require('react');
var component_1 = require('./component');
require('./index.css');
var react_redux_1 = require('react-redux');
var redux_1 = require('redux');
var redux_2 = require('./redux');
var redux_thunk_1 = require('redux-thunk');
//创建store
var store = redux_1.createStore(redux_2.frootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
//渲染
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return React.createElement(react_redux_1.Provider, {store: store}, React.createElement(component_1.default, null));
    };
    return App;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
* 档案管理
*/
const React = require('react');
const index_1 = require('./component/index');
const react_redux_1 = require('react-redux');
const redux_1 = require('redux');
const reducer_1 = require('./reducer');
const redux_thunk_1 = require('redux-thunk');
require('./index.css');
//创建store
const store = redux_1.createStore(reducer_1.frootReducer, redux_1.applyMiddleware(redux_thunk_1.default));
//渲染
class App extends React.Component {
    render() {
        return React.createElement(react_redux_1.Provider, __assign({store: store}, this.props), React.createElement(index_1.default, null));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
})
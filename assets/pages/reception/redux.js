define(function(require, exports, module) {/// <reference path="../index.d.ts" />
"use strict";
var redux_actions_1 = require('redux-actions');
var redux_1 = require('redux');
/**
 * 默认数据
 */
var initialState = {
    orderList: [
        {
            id: 1,
            url: 'components/global/image/head.png',
            name: '娃哈哈1',
            state: 0
        }, {
            id: 2,
            url: 'components/global/image/head.png',
            name: '娃哈哈',
            state: 0
        }
    ],
    charList: []
};
/**
 * action
 */
//修改预约用户状态
exports.UPDATE_ORDER = 'UPDATE_ORDER';
exports.updateOrder = redux_actions_1.createAction(exports.UPDATE_ORDER, function (args) { return args; });
/**
 * reducer
 */
exports.reducer = redux_actions_1.handleActions((_a = {},
    _a[exports.UPDATE_ORDER] = function (state, action) {
        state.orderList.forEach(function (orderUser) {
            if (orderUser.id == action.payload.id) {
                orderUser.state = action.payload.state;
            }
            return orderUser;
        });
        return state;
    },
    _a
), initialState);
/**
 * 合并reducers
 */
exports.frootReducer = redux_1.combineReducers({
    state: exports.reducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.frootReducer;
var _a;
})
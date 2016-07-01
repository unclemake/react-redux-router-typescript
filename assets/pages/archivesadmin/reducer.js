define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
 * reducer
 */
const redux_actions_1 = require('redux-actions');
const redux_1 = require('redux');
const action = require('./action');
/**
 * 默认数据
 */
const initialState = {
    orderUserList: [{
            id: 1,
            name: '娃哈哈',
            IDType: '身份证',
            ID: '320923198911912312',
            paymentMethod: '现金',
            doctorTime: '2016-16-01 11:11:00',
        }]
};
exports.reducer = redux_actions_1.handleActions({
    [action.UPDATE_USER]: (state, action) => {
        state = Object.assign({}, state);
        state.orderUserList.push(action.payload);
        return state;
    }
}, initialState);
/**
 * 合并reducers
 */
exports.frootReducer = redux_1.combineReducers({
    state: exports.reducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.frootReducer;
})
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
    state: 0,
    messageLabelList: [
        {
            id: 1,
            name: '素材库',
            selected: true
        }, {
            id: 1,
            name: '就医指南',
            selected: false
        }
    ],
    messageMaterialList: [
        {
            id: 1,
            labelId: 1,
            title: '饭后不能立即吃水果',
            content: '吃吃吃吃吃',
            selected: true
        },
        {
            id: 2,
            labelId: 2,
            title: '饭后不能立即吃水果2',
            content: '吃吃吃吃吃',
            selected: true
        }
    ],
    userGroupList: [
        {
            id: 1,
            name: '国际门诊',
            selected: true,
            total: 25
        }, {
            id: 2,
            name: '国际门诊2',
            selected: false,
            total: 40
        }
    ],
    userTypeGroupList: [{
            id: 1,
            name: '上海交通大学',
            selected: true,
            userList: [{
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    selected: true,
                }, {
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    selected: true,
                }, {
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    selected: false,
                }]
        }]
};
exports.reducer = redux_actions_1.handleActions({
    [action.UPDATE_STATE]: (state, action) => {
        state = Object.assign({}, state);
        state.state = action.payload;
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
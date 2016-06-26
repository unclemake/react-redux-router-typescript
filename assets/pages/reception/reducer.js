define(function(require, exports, module) {"use strict";
/// <reference path="../index.d.ts" />
/**
 * reducer
 */
const redux_actions_1 = require('redux-actions');
const action = require('./action');
const redux_1 = require('redux');
/**
 * 默认数据
 */
const initialState = {
    currentUser: {
        id: 20,
        name: '猪头三',
    },
    currentChatRecord: {
        id: 20,
        name: '猪头三',
        list: [{
                url: 'components/global/image/head.png',
                name: '娃哈哈',
                time: '2016-10-11 12:28:00',
                txt: '你好2',
                style: 0
            }, {
                url: 'components/global/image/head.png',
                name: '娃哈哈',
                time: '2016-10-11 12:48:00',
                txt: '你好2',
                style: 1
            }]
    },
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
    chatList: [
        {
            id: 1,
            name: '部门',
            unread: 20,
            myList: [{
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '我的',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }, {
                    id: 2,
                    url: 'components/global/image/head.png',
                    name: '味道2',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                },
                {
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '我的',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }, {
                    id: 2,
                    url: 'components/global/image/head.png',
                    name: '味道2',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }, {
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '我的',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }, {
                    id: 2,
                    url: 'components/global/image/head.png',
                    name: '味道2',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }
            ],
            otherList: [{
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '其他人',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }, {
                    id: 2,
                    url: 'components/global/image/head.png',
                    name: '味道2',
                    reception: {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '味道2'
                    }
                }
            ],
            notList: [{
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '未分配'
                }, {
                    id: 2,
                    url: 'components/global/image/head.png',
                    name: '味道2'
                }
            ]
        }
    ],
    chatRecordList: [{
            id: 20,
            name: '猪头三',
            list: [{
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    time: '2016-10-11 ',
                    txt: '你好2',
                    style: 0
                }, {
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    time: '2016-10-11 12:28:00',
                    txt: '你好2',
                    style: 1
                }]
        }, {
            id: 21,
            name: '猪头二',
            list: [{
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    time: '2016-10-11 12:48:00',
                    txt: '你好2',
                    style: 1
                }]
        }
    ]
};
exports.reducer = redux_actions_1.handleActions({
    [action.UPDATE_ORDER_STATE]: (state, action) => {
        state = Object.assign({}, state);
        for (var value of state.orderList) {
            if (value.id == action.payload.id) {
                value.state++;
                if (value.state == 3) {
                    state.orderList = state.orderList.filter(value => value.state != 3);
                }
                break;
            }
        }
        return state;
    },
    //添加聊天记录
    [action.ADD_CHAT_RECORD]: (state, action) => {
        state = Object.assign({}, state);
        state.currentChatRecord.list.push(action.payload);
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
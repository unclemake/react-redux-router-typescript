define(function(require, exports, module) {"use strict";
const redux_actions_1 = require('redux-actions');
/**
 * 修改预约用户状态
 */
exports.UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE';
exports.updateOrder = redux_actions_1.createAction(exports.UPDATE_ORDER_STATE, (orderUser) => orderUser);
/**
 * 添加聊天记录
 */
exports.ADD_CHAT_RECORD = 'ADD_CHAT_RECORD';
exports.addChatRecord = redux_actions_1.createAction(exports.ADD_CHAT_RECORD, (ChatRecord) => ChatRecord);
})
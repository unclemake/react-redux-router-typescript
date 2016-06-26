/// <reference path="../index.d.ts" />
/**
 * action
 */
import { State, OrderUser, ChatUserRecord, ChatUser, ChatList, ChatRecord, User} from './model';
import { handleActions, createAction, Action } from 'redux-actions';

/**
 * 修改预约用户状态
 */
export const UPDATE_ORDER_STATE = 'UPDATE_ORDER_STATE';
export const updateOrder = createAction<OrderUser>(
    UPDATE_ORDER_STATE,
    (orderUser) => orderUser
);


/**
 * 添加聊天记录
 */
export const ADD_CHAT_RECORD = 'ADD_CHAT_RECORD';
export const addChatRecord = createAction<ChatRecord>(
    ADD_CHAT_RECORD,
    (ChatRecord) => ChatRecord
);

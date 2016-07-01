/// <reference path="../index.d.ts" />
/**
 * reducer
 */
import { handleActions, createAction, Action } from 'redux-actions';
import { combineReducers } from 'redux';
import * as action from './action';
import {State, orderUser} from './model';

/**
 * 默认数据
 */
const initialState: State = {
    orderUserList: [{
        id: 1,
        name: '娃哈哈',
        IDType: '身份证',
        ID: '320923198911912312',
        paymentMethod: '现金',
        doctorTime: '2016-16-01 11:11:00',
    }]
};



export const reducer = handleActions<State, any>({
    [action.UPDATE_USER]: (state: State, action: Action<orderUser>): State => {
        state = Object.assign({}, state);
        state.orderUserList.push(action.payload)
        return state;
    }
}, initialState);


/**
 * 合并reducers
 */
export const frootReducer = combineReducers({
    state: reducer
});


export default frootReducer


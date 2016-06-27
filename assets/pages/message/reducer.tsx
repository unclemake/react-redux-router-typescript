/// <reference path="../index.d.ts" />
/**
 * reducer
 */
import { handleActions, createAction, Action } from 'redux-actions';
import { combineReducers } from 'redux';
import * as action from './action';
import {State} from './model';

/**
 * 默认数据
 */
const initialState: State = {
    state: 0,
    messageLabelList: [
        {
            id: 1,
            name: '素材库',
            selected: true
        }, {
            id: 2,
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
            selected: false
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



export const reducer = handleActions<State, any>({
    [action.UPDATE_STATE]: (state: State, action: Action<number>): State => {
        state = Object.assign({}, state);
        state.state = action.payload;
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


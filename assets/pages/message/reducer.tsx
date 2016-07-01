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
            selected: true
        }
    ],
    messageMaterialList: [
        {
            id: 1,
            labelId: 1,
            title: '饭后不能立即吃水果',
            content: '吃吃吃吃吃',
            selected: false
        },
        {
            id: 2,
            labelId: 2,
            title: '饭后不能立即吃水果2',
            content: '吃吃吃吃吃',
            selected: false
        },
        {
            id: 3,
            labelId: 2,
            title: '饭后不能立即吃水果2',
            content: '吃吃吃吃吃',
            selected: false
        },
        {
            id: 4,
            labelId: 2,
            title: '饭后不能立即吃水果2',
            content: '吃吃吃吃吃',
            selected: false
        }
    ],

    indexGroup: 0,

    userGroupList: [
        {
            id: 1,
            name: '国际门诊',
            selected: false,
            total: 25,
            list: [{
                id: 1,
                name: '上海交通大学',
                selected: true,
                userList: [{
                    id: 1,
                    url: 'components/global/image/head.png',
                    name: '娃哈哈',
                    selected: true,
                }, {
                        id: 2,
                        url: 'components/global/image/head.png',
                        name: '娃哈哈',
                        selected: true,
                    }, {
                        id: 3,
                        url: 'components/global/image/head.png',
                        name: '娃哈哈',
                        selected: false,
                    }]
            }, {
                    id: 2,
                    name: '上海交通大学22',
                    selected: true,
                    userList: [{
                        id: 11,
                        url: 'components/global/image/head.png',
                        name: '娃哈哈',
                        selected: true,
                    }, {
                            id: 22,
                            url: 'components/global/image/head.png',
                            name: '娃哈哈',
                            selected: true,
                        }, {
                            id: 33,
                            url: 'components/global/image/head.png',
                            name: '娃哈哈',
                            selected: false,
                        }]
                }]
        }, {
            id: 2,
            name: '国际门诊2',
            selected: false,
            total: 40
        }
    ]
};



export const reducer = handleActions<State, any>({
    [action.UPDATE_STATE]: (state: State, action: Action<number>): State => {
        state = Object.assign({}, state);
        state.state = action.payload;
        return state;
    },
    [action.UPDATE_LABEL_SELECTED]: (state: State, action: Action<{ id: number, selected: boolean }>): State => {
        state = Object.assign({}, state);

        state.messageLabelList.forEach(value => value.id == action.payload.id && (value.selected = action.payload.selected))

        return state;
    },
    [action.UPDATE_MATERIA_SELECTED]: (state: State, action: Action<{ id: number, selected: boolean }>): State => {
        state = Object.assign({}, state);

        state.messageMaterialList.forEach(value => value.id == action.payload.id && (value.selected = action.payload.selected))

        return state;
    },
    [action.UPDATE_GROUP_SELECTED]: (state: State, action: Action<{ id: number, selected: boolean }>): State => {
        state = Object.assign({}, state);
        let userTypeGroupList = state.userGroupList.filter(value => {
            if (value.id == action.payload.id) {
                value.selected = action.payload.selected;
                return true;
            }
        })[0];

        userTypeGroupList.list && userTypeGroupList.list.forEach(value => {
            value.userList.forEach(value => value.selected = action.payload.selected);
        });

        return state;
    },
    [action.UPDATE_USER_SELECTED]: (state: State, action: Action<{ groupId: number, id: number, selected: boolean }>): State => {
        state = Object.assign({}, state);
        let userTypeGroupList = state.userGroupList[state.indexGroup].list;

        var userTypeGroup = userTypeGroupList.filter(value => value.id == action.payload.groupId)[0];

        userTypeGroup.userList.forEach(value => {
            if (value.id == action.payload.id) {
                value.selected = action.payload.selected;
            }
        });

        state.userGroupList[state.indexGroup].selected = userTypeGroupList.every(value => value.userList.every(value => value.selected == true));

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


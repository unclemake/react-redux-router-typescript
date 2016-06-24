/// <reference path="../index.d.ts" />


import { handleActions, createAction, Action } from 'redux-actions';
import { combineReducers } from 'redux';


/**
 * 数据模型
 */
export interface State {
    //预约列表
    orderList: OrderUser[],

    //聊天列表
    charList: Department[],

    //聊天记录列表
    charRecordList: CharRecordList[]
}


//部门
interface Department {
    id: number,
    name: string
}

interface CharRecordList extends Department {
    myList: CharUser,
    otherList: CharUser,
    notList: CharUser
}

//用户数据
interface User {
    id: number,
    //姓名
    name?: string,
    //头像
    url?: string
}


//聊天用户
interface CharUser extends User {
    reception?: User
}

//预约用户
export interface OrderUser extends User {
    state: number
}

//聊天记录
interface CharRecord extends User {
    txt: number
}


/**
 * 默认数据
 */
const initialState: State = {
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
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const updateOrder = createAction<OrderUser>(
    UPDATE_ORDER,
    (args: { id: number, state: number }) => args
);


/**
 * reducer
 */
export const reducer = handleActions<State, OrderUser>({
    [UPDATE_ORDER]: (state: State, action: Action<OrderUser>): State => {
        state.orderList.forEach(orderUser => {
            if (orderUser.id == action.payload.id) {
                orderUser.state = action.payload.state;
            }
            return orderUser;
        });
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






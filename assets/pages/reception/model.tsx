/// <reference path="../index.d.ts" />
import {User} from '../user/model'

export {User}

/**
 * 数据模型
 */
export interface State {
    //当前登录用户
    currentUser: User,

    //当前聊天记录
    currentChatRecord?: ChatUserRecord,

    //预约列表
    orderList: OrderUser[],

    //聊天列表
    chatList: ChatList[],

    //聊天记录列表
    chatRecordList: ChatUserRecord[]
}


//部门
export interface ChatList {
    id: number,
    name: string,
    unread: number,
    myList: ChatUser[],
    otherList: ChatUser[],
    notList: ChatUser[]
}

//聊天用户
export interface ChatUser extends User {
    reception?: User
}

//预约用户
export interface OrderUser extends User {
    state: number
}


//聊天记录列表
export interface ChatUserRecord {
    id: number,
    name: string,
    list: ChatRecord[]
}

//聊天记录
export interface ChatRecord extends User {
    time: string,
    style: number,
    txt: string
}







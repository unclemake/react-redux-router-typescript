/// <reference path="../index.d.ts" />

import {User} from '../user/model'


/**
 * 数据模型
 */
export interface State {
    //状态 进行到哪一步
    state: number,

    //标签列表
    messageLabelList: MessageLabel[],

    //信息素材列表
    messageMaterialList: MessageMaterial[]

    //用户组列表
    userGroupList: UserGroup[]

    //当前分组
    userTypeGroupList: UserTypeGroup[]
}


/**
 * 标签
 */
export interface MessageLabel {
    id: number,
    name: string,
    selected: boolean
}


/**
 * 信息素材
 */
export interface MessageMaterial {
    id: number,
    labelId: number,
    title: string,
    content: string,
    selected: boolean
}

/**
 * 用户群组
 */
export interface UserGroup {
    id: number,
    name: string,
    selected: boolean,
    total: number
}

/**
 * 群组里面分的组
 */
export interface UserTypeGroup {
    id: number,
    name: string,
    selected: boolean
    userList: MessageUser[]
}


/**
 * 群组里面分的组
 */
export interface MessageUser extends User {
    selected: boolean
}




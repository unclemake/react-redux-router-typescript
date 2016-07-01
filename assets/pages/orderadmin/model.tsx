/// <reference path="../index.d.ts" />

import {User} from '../user/model'


/**
 * 数据模型
 */
export interface State {
    //预约用户列表
    orderUserList: orderUser[]
}


/**
 * 预约用户
 */
export interface orderUser extends User {
    //支付方式
    paymentMethod: string,
    //就诊时间
    doctorTime: string
}


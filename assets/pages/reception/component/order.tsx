/// <reference path="../../index.d.ts" />
/**
 * 预约列表
 */
import * as React from 'react';
import { State, OrderUser, ChatUserRecord, ChatUser, ChatList, ChatRecord, User} from '../model';
import Scroll from '../../../components/scroll/index';


export default class Component extends React.Component<{ list: OrderUser[], updataOrder: Function }, void> {

    stateText = {
        0: '',
        1: '候诊中',
        2: '就诊中'
    }

    stateBtnText = {
        0: '候诊',
        1: '就诊',
        2: '就诊结束'
    }

    updataOrder(id) {
        this.props.updataOrder({
            id
        });
    };

    render() {
        return <section className="order-box module">
            <h2>已预约患者</h2>
            <section className="seach">
                <input type="text" placeholder="输入姓名／证件号／微信号" />
                <a className="iconfont icon-book seach-btn"></a>
            </section>
            <section className="list">
                <p className="count">
                    已搜索到 108 位预约患者
                </p>
                <ul>
                    {
                        this.props.list.map((value, index) => {
                            return <li key={index}>
                                <img className="head" src={value.url} />
                                <div className="fl">
                                    <p className="name">{value.name}</p>
                                    <p>{this.stateText[value.state]}</p>
                                </div>
                                <a className="btn" onClick={() => {
                                    this.updataOrder(value.id);
                                } } >{this.stateBtnText[value.state]}</a>
                            </li>;
                        })
                    }
                </ul>
            </section>
        </section>
    }
}











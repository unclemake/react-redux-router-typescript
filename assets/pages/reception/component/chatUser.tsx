/// <reference path="../../index.d.ts" />
/**
 * 聊天用户列表
 */
import * as React from 'react';
import { State, OrderUser, ChatUserRecord, ChatUser, ChatList, ChatRecord, User} from '../model';
import Scroll from '../../../components/scroll/index';


export default class Component extends React.Component<{
    chatList: ChatList[]
}, void> {


    /**
     * 用户组件
     * @param value 数据
     * @param index index
     */
    userComponent(value: ChatUser, index: number) {
        return <li key={index}>
            <div className="head fl">
                <img src={value.url} />
                <p className="name">{value.name}</p>
            </div>
            {
                value.reception && <div className="head fr">
                    <img src={value.reception.url} />
                    <p className="name">{value.reception.name}</p>
                </div>
            }
            {
                value.reception && <i className="iconfont icon-bag"></i>
            }
        </li>;

    }

    list(value: ChatList, index) {
        return <dl key={index}>
            <dt>
                <i className="iconfont icon-bag mr20 fl"></i><span className="fl">{value.name}</span>{ value.unread && <span className="tag">{value.unread}</span>}
            </dt>
            <dd>
                <ul>
                    { value.myList.map((value, i) => this.userComponent(value, i)) }
                </ul>
            </dd>
            <dd>
                <ul>

                    { value.notList.map((value, i) => this.userComponent(value, i)) }
                </ul>
            </dd>
            <dd className="gray-dd">
                <ul>
                    { value.otherList.map((value, i) => this.userComponent(value, i)) }
                </ul>
            </dd>
        </dl>
    }


    render() {
        let {chatList} = this.props;
        return <section className="chat-list">
            <Scroll>
                <div className="chat-list-content">
                    { chatList.map((value, index) => this.list(value, index)) }
                </div>
            </Scroll>
        </section >
    }
}


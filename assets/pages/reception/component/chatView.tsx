/// <reference path="../../../index.d.ts" />
/**
 * 聊天窗口
 */
import * as React from 'react';
import { State, OrderUser, ChatUserRecord, ChatUser, ChatList, ChatRecord, User} from '../model';
import * as  util from '../../../components/util/index';
import ChatListComponent from './chatList';


export default class Component extends React.Component<{
    chatUserRecord: ChatUserRecord,
    addChatRecord: (chatRecord: ChatRecord) => ChatRecord
}, any> {
    state = {
        txt: ''
    }

    getHtml(txt: string) {
        return txt;
    }

    getTxt(html: string) {
        return html;
    }


    addChatRecord() {
        this.props.addChatRecord({
            time: util.formatDate(new Date()),
            style: 0,
            txt: this.state.txt
        });
    }

    txtChange(e) {

        //this.state.txt = e.

        console.log(e);

        //this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let {txt} = this.state;
        return <section className="chat-content">
            <div className="header">
                <span className="name fl">
                    {this.props.chatUserRecord.name}
                </span>
                <i className="iconfont icon-bag fr">
                </i>
            </div>
            <ChatListComponent chatRecordList={this.props.chatUserRecord.list}/>
            <div className="chat-send">
                <div className="palette">
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                </div>

                <div className="input-txt" onInput={this.txtChange.bind(this) } contentEditable={true} dangerouslySetInnerHTML={{ __html: this.getHtml(txt) }}></div>
                <a className="btn fr btn-send">
                    发送
                </a>
            </div>
        </section>;
    }
}

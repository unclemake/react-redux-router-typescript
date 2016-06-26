/// <reference path="../../index.d.ts" />
/**
 * 聊天列表
 */
import * as React from 'react';
import { State, OrderUser, ChatUserRecord, ChatUser, ChatList, ChatRecord, User} from '../model';


export default class Component extends React.Component<{
    chatRecordList: ChatRecord[]
}, void> {

    getStyle = {
        0: '',
        1: 'li-right'
    }

    render() {
        let {chatRecordList} = this.props;
        return <div className="content">
            {
                chatRecordList.map((item, index) => {
                    if (index > 0) {
                        var prevTime = new Date(chatRecordList[index - 1].time.replace('-', '/'));
                        var indexTime = new Date(chatRecordList[index].time.replace('-', '/'));
                        var reduceTime = indexTime.getTime() - prevTime.getTime();

                        if (reduceTime / 1000 / 60 >= 10) {
                            var divTime = <div className="li">
                                <div className="time"><time>{indexTime.getHours() }：{indexTime.getMinutes() }</time></div>
                            </div>;
                        }
                    }

                    return <section key={index}>
                        {divTime}
                        <div className={"li " + this.getStyle[item.style]} >
                            <img className="head" src={item.url}/>
                            <div className="txt">
                                <i className="icon"></i>
                                {item.txt}
                            </div>
                        </div>
                    </section>;
                })
            }
        </div>;
    }
}
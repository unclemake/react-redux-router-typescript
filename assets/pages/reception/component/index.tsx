/// <reference path="../../index.d.ts" />
/**
* 预约中心
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../action';
import {State, OrderUser, ChatRecord} from '../model';
import Order from './order';
import ChatView from './chatView';
import ChatUser from './chatUser';
import Scroll from '../../../components/scroll/index';
import * as util from '../../../components/util/index';
import '../index.css';


interface AppProps {
    state: State,
    dispatch: Dispatch
}

//获取state
const mapStateToProps = state => {
    return state;
};

export class App extends React.Component<AppProps, void> {

    render() {
        const { state, dispatch } = this.props;
        return <section className="h100">
            <section  className="fr h100">
                <Order list={state.orderList} updataOrder={(args: OrderUser) => dispatch(action.updateOrder(args)) }/>
            </section>
            <section className="chat-box  module">
                <header>
                    <span className="fl">
                        咨询患者
                    </span>
                    <span className="fr">
                        <i className="iconfont icon-bag"></i>
                        <i className="iconfont icon-bag ml10"></i>
                    </span>
                </header>
                <div className="chat-cont">
                    <ChatUser chatList={state.chatList} />
                    <ChatView chatUserRecord={state.currentChatRecord} addChatRecord={(args: ChatRecord) => dispatch(action.addChatRecord(args)) }/>
                </div>
            </section>
        </section>;
    }
}

export default connect(mapStateToProps)(App);







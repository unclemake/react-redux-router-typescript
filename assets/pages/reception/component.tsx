/**
* 预约中心
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { State, OrderUser, updateOrder } from './redux';
import './index.css';



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
            <Order list={state.orderList} updataOrder={(args: OrderUser) => dispatch(updateOrder(args)) }/>

            <section className="chat-box module">
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
                    <CharUser />
                    <CharView />
                </div>
            </section>
        </section>;
    }
}

export default connect(mapStateToProps)(App);

/**
 * 聊天窗口
 */
class CharView extends React.Component<void, void> {
    render() {
        return <section className="chat-content">
            <div className="header">
                <span className="name fl">
                    John
                </span>
                <i className="iconfont icon-bag fr">
                </i>
            </div>
            <CharList />
            <div className="chat-send">
                <div className="palette">
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                    <i className="iconfont icon-book"></i>
                </div>
                <div className="input-txt"></div>
                <a className="btn fr btn-send">
                    发送
                </a>
            </div>
        </section>;
    }
}

/**
 * 聊天列表
 */
class CharList extends React.Component<void, void> {
    render() {
        return <div className="content">
            <div className="li">
                <div className="time"><time>10：28</time></div>
            </div>
            <div className="li">
                <img className="head" src="./components/global/image/head.png" />
                <p className="txt">
                    <i className="icon"></i>
                    我想咨询下神经科偏头痛
                </p>
            </div>
            <div className="li li-right">
                <img className="head" src="./components/global/image/head.png" />
                <p className="txt">
                    <i className="icon"></i>
                    公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。
                </p>
            </div>
        </div>;
    }
}


/**
 * 聊天用户列表
 */
class CharUser extends React.Component<void, void> {
    render() {
        return <section className="chat-list">
            <dl>
                <dt>
                    <i className="iconfont icon-bag mr20 fl"></i><span className="fl">国际门诊</span><span className="tag">28</span>
                </dt>
                <dd>
                    <ul>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <div className="head fr">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <i className="iconfont icon-bag"></i>
                        </li>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <div className="head fr">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <i className="iconfont icon-bag"></i>
                        </li>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <div className="head fr">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <i className="iconfont icon-bag"></i>
                        </li>
                    </ul>
                </dd>
                <dd>
                    <ul>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                        </li>
                    </ul>
                </dd>
                <dd className="gray-dd">
                    <ul>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <div className="head fr">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <i className="iconfont icon-bag"></i>
                        </li>
                        <li>
                            <div className="head fl">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <div className="head fr">
                                <img src="./components/global/image/head.png" />
                                <p className="name">王庆雅</p>
                            </div>
                            <i className="iconfont icon-bag"></i>
                        </li>
                    </ul>
                </dd>
            </dl>
        </section>
    }
}


/**
 * 预约列表
 */
class Order extends React.Component<{ list: OrderUser[], updataOrder: Function }, void> {

    stateText = {
        0: '候诊中',
        1: '候诊中2'
    }

    stateBtnText = {
        0: '候诊',
        1: '候诊2'
    }

    updataOrder(id, state) {
        state++;
        this.props.updataOrder({
            id, state
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
                        this.props.list.map(value => {
                            return <li>
                                <img className="head" src={value.url} />
                                <div className="fl">
                                    <p className="name">{value.name}</p>
                                    <p>{this.stateText[value.state]}</p>
                                </div>
                                <a className="btn" onClick={() => {
                                    this.updataOrder(value.id, value.state);
                                } } >{this.stateBtnText[value.state]}</a>
                            </li>;
                        })
                    }
                </ul>
            </section>
        </section>
    }
}













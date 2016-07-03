/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
import '../../pages/reception/index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="history-page main-content-bg">
            <section className="grid-12 h100 br1">
                <section className="history-seach-box">
                    <section className="seach-box"><input type="text" placeholder="输入标签名" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>
                    <section className="time-box">
                        <span className="fl">2016/06/01-2016/06/02</span>
                        <span className="checkbox-move fr">
                            <span className="span">咨询记录</span>
                            <span className="span">就诊记录</span>
                        </span>
                    </section>
                    <ul className="user-list">
                        <li className="selected">
                            <img className="head" src="../../components/global/image/head.png" />
                            <div className="fl p10">
                                <p className="cf">
                                    <span className="th">姓名</span><span className="td">王庆雅</span>
                                </p>
                                <p>
                                    <span className="th">客服</span>
                                    <span className="td">护士A</span>
                                    <span className="th">聊天日期</span><span className="td">2016-4-25</span>
                                </p>
                            </div>
                        </li>
                        <li>
                            <img className="head" src="../../components/global/image/head.png" />
                            <div className="fl p10">
                                <p className="cf">
                                    <span className="th">姓名</span><span className="td">王庆雅</span>
                                </p>
                                <p>
                                    <span className="th">客服</span>
                                    <span className="td">护士A</span>
                                    <span className="th">聊天日期</span><span className="td">2016-4-25</span>
                                </p>
                            </div>
                        </li>
                    </ul>


                </section>
            </section>
            <section className="grid-12 h100">
                <section className="chat-content chat-list-box">
                    <div className="content">
                        <div className="li">
                            <div className="time"><time>10：28</time></div>
                        </div>
                        <div className="li">
                            <img className="head" src="../../components/global/image/head.png" />
                            <p className="txt">
                                <i className="icon"></i>
                                我想咨询下神经科偏头痛
                            </p>
                        </div>
                        <div className="li li-right">
                            <img className="head" src="../../components/global/image/head.png" />
                            <p className="txt">
                                <i className="icon"></i>
                                公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。公公偏头痛啊，公公偏头痛。偏头痛啊。偏头痛啊。
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    }
}


/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
import '../../pages/reception/index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="home-page pr h100">
            <section className="order-box module fl">
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
                        <li>
                            <img className="head" src="../../components/global/image/head.png" />
                            <div className="fl">
                                <p className="name">王清雅</p>
                                <p>候诊中</p>
                            </div>
                            <a className="btn">候诊</a>
                        </li>
                    </ul>
                </section>
            </section>

            <section className="right-box">
                <section className="user-data">
                    <h3>
                        健康档案
                    </h3>
                    <table className="user-table">
                        <tr>
                            <th>
                                姓名
                            </th>
                            <td>
                                John
                            </td>
                            <th>
                                性别
                            </th>
                            <td>
                                男
                            </td>
                            <th>
                                性别
                            </th>
                            <td>
                                41岁
                            </td>
                            <th>
                                国籍
                            </th>
                            <td>
                                美国
                            </td>
                            <th>
                                婚育情况
                            </th>
                            <td>
                                已婚已育
                            </td>
                            <th>
                                血型
                            </th>
                            <td>
                                AB
                            </td>
                        </tr>
                    </table>
                    <a className="show-more-btn">
                        <i className="iconfont icon-bag"></i>
                    </a>
                </section>
                <section className="user-content">
                    <table>
                        <tr>
                            <th>
                                疾病名称
                            </th>
                            <td>
                                <input className="text" />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                病情描述
                            </th>
                            <td>
                                <textarea className="textarea"></textarea>
                            </td>
                        </tr>
                    </table>
                    <div className="tc">
                        <a className="btn btn-huge mt40">
                            提交（就诊结束）
                        </a>
                    </div>
                </section>
            </section>
        </section>
    }
}


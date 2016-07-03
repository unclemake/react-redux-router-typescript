/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
import '../../pages/reception/index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <div className="main-content">
            <section className="orderadmin-page">
                <section className="seach-box"><input className="tc" type="text" placeholder="输入关键字" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>

                <section className="orderadmin-content">
                    <section className="mb20">
                        <a className="blue"><i className="iconfont icon-bag blue"></i> 新增用户</a>
                    </section>
                    <table className="table">
                        <tr>
                            <th>ID</th>
                            <th>姓名</th>
                            <th>证件类型</th>
                            <th>证件号</th>
                            <th>支付方式</th>
                            <th>就诊时间</th>
                            <th>操作</th>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                        <tr>
                            <td>ZT0012</td>
                            <td>郭小民</td>
                            <td>身份证</td>
                            <td>310107198608081240</td>
                            <td>现金</td>
                            <td>2016-06-01 15: 36</td>
                            <td>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>详情</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                <a className="mr15"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                            </td>
                        </tr>
                    </table>
                </section>
            </section>
        </div>
    }
}


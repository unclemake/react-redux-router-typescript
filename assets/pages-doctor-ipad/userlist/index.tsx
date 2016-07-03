/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="userlist-page pr">
            <div className="return-box">
                <a className="return-btn iconfont icon-left">
                </a>
                返回
            </div>
            <section className="userlist-content">
                <table className="userlist-table">
                    <tr>
                        <th>头像</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>初诊/复诊</th>
                        <th>就诊状态</th>
                        <th>操作</th>
                    </tr>
                    <tr>
                        <td>
                            <img className="userlist-img" src="../../components/global/image/head.png" />
                        </td>
                        <td>
                            王庆雅
                        </td>
                        <td>
                            女
                        </td>
                        <td>
                            32
                        </td>
                        <td>
                            复诊
                        </td>
                        <td>
                            在诊
                        </td>
                        <td>
                            <a className="btn btn-huge">检查报告</a>
                            <a className="btn btn-huge ml10">健康档案</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className="userlist-img" src="../../components/global/image/head.png" />
                        </td>
                        <td>
                            王庆雅
                        </td>
                        <td>
                            女
                        </td>
                        <td>
                            32
                        </td>
                        <td>
                            复诊
                        </td>
                        <td>
                            在诊
                        </td>
                        <td>
                            <a className="btn btn-huge">检查报告</a>
                            <a className="btn btn-huge  ml10">健康档案</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className="userlist-img" src="../../components/global/image/head.png" />
                        </td>
                        <td>
                            王庆雅
                        </td>
                        <td>
                            女
                        </td>
                        <td>
                            32
                        </td>
                        <td>
                            复诊
                        </td>
                        <td>
                            在诊
                        </td>
                        <td>
                            <a className="btn btn-huge">检查报告</a>
                            <a className="btn btn-huge  ml10">健康档案</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className="userlist-img" src="../../components/global/image/head.png" />
                        </td>
                        <td>
                            王庆雅
                        </td>
                        <td>
                            女
                        </td>
                        <td>
                            32
                        </td>
                        <td>
                            复诊
                        </td>
                        <td>
                            在诊
                        </td>
                        <td>
                            <a className="btn btn-huge">检查报告</a>
                            <a className="btn btn-huge  ml10">健康档案</a>
                        </td>
                    </tr>
                </table>
            </section>
        </section>;
    }
}


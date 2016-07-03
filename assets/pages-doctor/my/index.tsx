/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
import '../../pages/reception/index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="main-content-bg">
            <section className="my-page">
                <div className="title">
                    <a>修改密码</a>
                    <a className="selected">个人介绍</a>
                </div>
                <table className="docter-table">
                    <tr>
                        <th>姓名</th>
                        <td><input className="text" type="text" /></td>
                        <th>性别</th>
                        <td><input className="text sm" type="text" /></td>
                        <th>职称</th>
                        <td><input className="text" type="text" /></td>
                        <th>学科</th>
                        <td><input className="text sm" type="text" /></td>
                    </tr>
                    <tr>
                        <th>
                            头像
                        </th>
                        <td colSpan="6">
                            <a className="upload-btn">
                                <img src="../../components/global/image/head.png" />
                            </a>
                            <p className="f18 mt15">
                                尺寸建议：120*120px
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            简介
                        </th>
                        <td colSpan="7">
                            <textarea className="textarea"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="6" className="lin14">
                            <p>
                                审核意见
                            </p>
                            <p className="red f18">
                                审核不通过：用户头像请上传本人头像。
                            </p>
                        </th>
                    </tr>
                </table>
                <div className="mt50 tc">
                    <a className="btn btn-huge">保存</a>
                    <a className="btn btn-gray-bo btn-huge ml40">取消</a>
                </div>
            </section>
        </section>
    }
}


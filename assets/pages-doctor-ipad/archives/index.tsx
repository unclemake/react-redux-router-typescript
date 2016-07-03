/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="archives-page pr">
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
            <section className="archives-box">
                <table className="archives-table">
                    <tr>
                        <th>
                            就诊记录：
                        </th>
                        <td>
                            2016-04-30
                        </td>
                        <th>
                            主治医生：
                        </th>
                        <td>
                            宋晓敏
                        </td>
                        <th>
                            填写人：
                        </th>
                        <td>
                            包强
                        </td>
                    </tr>
                    <tr>
                        <th>
                            疾病名称：
                        </th>
                        <td colSpan="5">
                            慢性肾小球肾炎
                        </td>
                    </tr>
                    <tr>
                        <th>
                            病情描述：
                        </th>
                        <td colSpan="5" className="pr">
                            <div className="describe">
                                尿检红细胞满视野，蛋白三个＋，肾小球肾炎穿刺手术，尿检红细胞满视野，蛋白三个＋，肾小球肾
                                尿检红细胞满视野，蛋白三个＋，肾小球肾炎穿刺手术，尿检红细胞满视野，蛋白三个＋，肾小球肾
                            </div>
                            <i className="iconfont icon-bag move-btn"></i>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="6">
                            检查报告：
                        </th>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <img className="archives-img" src="../../components/global/image/head.png" />
                            <img className="archives-img" src="../../components/global/image/head.png" />
                            <img className="archives-img" src="../../components/global/image/head.png" />
                        </td>
                    </tr>
                </table>
            </section>
        </section>;
    }
}


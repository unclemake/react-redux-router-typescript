/// <reference path="../../index.d.ts" />
/**
* 短信设置
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {Paging} from '../../../components/paging/index';
import Nav from './nav';

import '../index.css';

//渲染
export default class App extends React.Component<void, void> {
    render() {
        return <section className="websiteadmin-page">
            <Nav />
            <section className="seach-box mt20"><input className="tc" type="text" placeholder="输入标签名" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>
            <div className="add-box">
                <a className="fl">+新增医院介绍</a>
                <div className="tx gray tc">
                    当前专家人数100
                </div>
            </div>
            <section className="websiteadmin-content2">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>职称</th>
                            <th>简介</th>
                            <th>审核状态</th>
                            <th>排序</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ZT0012</td>
                            <td><img className="head" src="./components/global/image/head.png" /></td>
                            <td>jhon</td>
                            <td>jhon</td>
                            <td>jhon</td>
                            <td>jhon</td>
                            <td>jhon</td>
                            <td>jhon</td>
                            <td>jhon</td>
                        </tr>
                    </tbody>
                </table>
                <Paging sum={20} onChange={() => { } } />
            </section>
        </section>
    }
}

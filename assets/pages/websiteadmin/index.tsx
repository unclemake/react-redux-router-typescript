/// <reference path="../index.d.ts" />
/**
* 短信设置
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Scroll from '../../components/scroll/index';
import * as util from '../../components/util/index';
import {Radio, Checkbox} from '../../components/checkbox/index';

import './index.css';

//渲染
export default class App extends React.Component<void, void> {
    render() {
        return <section className="websiteadmin-page">
            <nav>
                <a className="selected">医院介绍</a>
                <a>专家介绍</a>
                <a>就医指南</a>
                <a>健康贴士</a>
                <a>素材库</a>
            </nav>
            <section className="websiteadmin-content">
                <section className="left-box">
                    <div className="add-box">
                        <a>+新增医院介绍</a>
                    </div>
                    <section className="left-box-content">
                        <table className="table-add">
                            <tr>
                                <th>医院名称</th>
                                <td>
                                    <input className="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>宣传图片</th>
                                <td>
                                    <a className="iconfont icon-bag upload-btn">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th>医院地址</th>
                                <td>
                                    <input className="text" />
                                </td>
                            </tr>
                            <tr>
                                <th>咨询电话</th>
                                <td>
                                    <input className="text" />
                                </td>
                            </tr>
                            <tr>
                                <th colspan="2">医院概况</th>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <textarea className="textarea"></textarea>
                                </td>
                            </tr>
                        </table>
                        <div className="tc mt40">
                            <a className="btn btn-huge">
                                保存
                            </a>
                            <a className="btn btn-huge btn-gray-bo ml40"><i className="iconfont icon-bag"></i>预览</a>
                        </div>
                    </section>
                </section>
                <section className="right-box">
                    <section className="left-box-content">
                        <ul className="department-list">
                            <li>
                                <span>仁济医院国际门诊部</span>
                                <span className="fr">
                                    <a className="iconfont icon-bag">编辑</a>
                                    <a className="iconfont icon-bag">删除</a>
                                </span>
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </section>
    }
}

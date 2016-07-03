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
        return <section>
            <section className="paymenset-page dn">
                <h2>
                    保险支付
                </h2>
                <ul className="paymenset-list">
                    <li className="add-box">
                        <i className="iconfont icon-bag"></i>
                        <p>添加支付方式</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>
                            编辑&nbsp; |&nbsp; 删除支付方式
                        </p>
                    </li>
                </ul>
            </section>

            <section className="paymenset-page">
                <table className="paymenset-table">
                    <tbody>
                        <tr>
                            <th>支付logo</th>
                            <td>
                                <a className="upload-btn">
                                    <img src="../../components/global/image/head.png" />
                                </a>
                                <p className="f14 tc upload-into">
                                    尺寸建议120*120
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                支付说明
                            </th>
                            <td>
                                <Radio>关闭说明</Radio>
                                <Radio className="ml20">开启说明</Radio>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <textarea className="textarea"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="tc m40">
                    <a className="btn btn-huge">保存</a>
                    <a className="btn btn-huge btn-gray-bo ml40">取消</a>
                </div>
            </section >
        </section>
    }
}

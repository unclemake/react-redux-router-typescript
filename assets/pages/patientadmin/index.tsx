/// <reference path="../index.d.ts" />
/**
* 短信设置
*/
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {Page} from '../../components/layer/index';
import * as util from '../../components/util/index';
import {Radio, Checkbox} from '../../components/checkbox/index';
import { Scrollbars } from 'react-custom-scrollbars';
import './index.css';

//渲染
export default class App extends React.Component<any, any> {
    state = {
        pageShow: false
    }

    addPageShow(bl: boolean) {

        this.state.pageShow = bl;
        this.setState(this.state);
    }


    render() {
        return <section className="patientadmin-page">
            <a className="add-box" onClick={this.addPageShow.bind(this, true) }>+新增医院介绍</a>
            <section className="seach-box"><input type="text" className="tc" placeholder="输入标签名" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>
            <section className="patientadmin-cont">
                <section className="left-box">
                    <section className="left-box-content">
                        <h3>群组</h3>
                        <section className="left-box-content-scroll">
                            <Scrollbars  >
                                <div className="p30">
                                    <table className="table-left">
                                        <tbody>
                                            <tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr><tr>
                                                <th>国际门诊</th>
                                                <td>10</td>
                                                <td><a className="blue">修改群组名</a></td>
                                                <td><a className="blue">解除群组</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Scrollbars>
                        </section>
                    </section>
                </section>
                <section className="right-box">
                    <table className="table-right">
                        <tbody>
                            <tr>
                                <th>
                                    <img className="head" src="../../components/global/image/head.png" />
                                </th>
                                <td>王亲亚</td>
                                <td>国际门诊<i className="iconfont icon-bag"></i></td>
                                <td>备注内容<i className="iconfont icon-bag"></i></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
            <Page show={this.state.pageShow}>
                <h3>新增群组</h3>
                <div className="group-name-box">
                    群组名<input className="text ml20" type="text" />
                </div>
                <div className="group-name-box">
                    <span className="fl">用户列表</span>
                    <section className="seach-box"><input type="text" placeholder="输入用户名/备注" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>
                </div>
                <section className="layer-table-box">
                    <table className="layer-table">
                        <tbody>
                            <tr>
                                <td>
                                    <Checkbox />
                                </td>
                                <td>
                                    <img className="head" src="../../components/global/image/head.png" />
                                </td>
                                <td>
                                    王亲亚
                                </td>
                                <td>
                                    国际门诊
                                </td>
                                <td>
                                    备注内容：甲状腺手术
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <div className="tc mt40">
                    <a className="btn btn-huge">保存</a>
                    <a className="btn btn-huge btn-gray-bo ml40"  onClick={this.addPageShow.bind(this, false) }>取消</a>
                </div>
            </Page>
        </section>
    }
}

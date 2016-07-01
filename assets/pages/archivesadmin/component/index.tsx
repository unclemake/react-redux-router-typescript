/// <reference path="../../index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../action';
import {State} from '../model';
import Scroll from '../../../components/scroll/index';
import * as util from '../../../components/util/index';
import Sidebar from '../../sidebar/index';


interface AppProps {
    state: State,
    dispatch: Dispatch
}

//获取state
const mapStateToProps = state => {
    return state;
};

export class App extends React.Component<AppProps, any> {
    state = {
        show: false
    }

    detailedShow() {
        this.state.show = true;
        this.setState(this.state);
    }

    renderDetailed() {
        const { state, dispatch } = this.props;
        return <section className="orderadmin-page">
            <section className="orderadmin-content-all">
                <table className="table-vertical">
                    <tbody>

                        <tr>
                            <th>就诊人姓名</th>
                            <td>小包总</td>
                        </tr>
                        <tr>
                            <th>证件类型</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>证件类型</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>证件号</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>支付方式</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>期望就诊时间</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>过往就诊信息</th>
                            <td>身份证</td>
                        </tr>
                        <tr>
                            <th>病情资料</th>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <img className="phote" src="../../components/global/image/head.png" />
                                <img className="phote" src="../../components/global/image/head.png" />
                                <img className="phote" src="../../components/global/image/head.png" />
                            </td>
                        </tr>
                        <tr>
                            <th>医生</th>
                            <td>
                                <select>
                                    <option>哈哈哈</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="tc mt100">
                    <a className="btn btn-big">保存</a>
                    <a className="btn btn-big btn-gray ml40" onClick={() => {
                        this.setState({
                            show: false;
                        });
                    } }>取消</a>
                </div>
            </section>
        </section>

    }

    renderList() {
        const { state, dispatch } = this.props;
        return <section className="orderadmin-page">
            <section className="seach-box"><input className="tc" type="text" placeholder="输入标签名" /><a className="iconfont icon-seach seach-btn"></a><div className="number">分组标签&nbsp; 3/10</div></section>
            <section className="orderadmin-content">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>姓名</th>
                            <th>证件类型</th>
                            <th>证件号</th>
                            <th>支付方式</th>
                            <th>就诊时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.orderUserList.map((value, index) => {
                                return <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.IDType}</td>
                                    <td>{value.ID}</td>
                                    <td>{value.paymentMethod}</td>
                                    <td>{value.doctorTime}</td>
                                    <td>
                                        <a className="mr20" onClick={this.detailedShow.bind(this) } ><i className="iconfont icon-bag mr5"></i>详情</a>
                                        <a className="mr20"><i className="iconfont icon-bag mr5"></i>回诊</a>
                                        <a className="mr20"><i className="iconfont icon-bag mr5"></i>取消预约</a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </section>
        </section>
    }


    render() {
        const { state, dispatch } = this.props;
        return <section className="main-content">
            {this.state.show ? this.renderDetailed() : this.renderList() }
        </section >
    }
}


export default connect(mapStateToProps)(App);







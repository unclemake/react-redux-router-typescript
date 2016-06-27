/// <reference path="../../index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../action';
import {State} from '../model';
import Scroll from '../../../components/scroll/index';
import {Radio, Checkbox} from '../../../components/checkbox/index';
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

export class App extends React.Component<AppProps, void> {

    renderOneView() {
        return <div className="message-content cf">
            <section className="message-box-left">
                <section className="seach-box">
                    <input type="text" placeholder="输入标签名" />
                    <a className="iconfont icon-seach seach-btn"></a>
                </section>
                <div className="lable-cont">分组标签&nbsp; 3/10</div>

                <section className="group-box mt15">
                    <dl className="group-list">
                        <dt>
                            <Checkbox showCheckbox={true}>
                                全部群组
                            </Checkbox>
                        </dt>
                        <dd><Checkbox showCheckbox={true}><span className="txt">国际门诊</span>(25) </Radio></dd>
                    </dl>
                </section>
            </section>
            <section className="message-box-right">
                <section className="user-list">
                    <dl className="pt15">
                        <dt>
                            <Checkbox showCheckbox={true}>
                                上海交大教授
                                <span className="number">10/16</span>
                            </Checkbox>
                        </dt>
                        <dd>
                            <dl>
                                <dt>
                                    <Checkbox showCheckbox={true}>
                                        上海交大教授
                                        <span className="number">10/16</span>
                                    </Checkbox>
                                </dt>
                                <dd>
                                    <ul>
                                        <li>
                                            <Checkbox className="check-img">
                                                <img className="head" src="../components/global/image/head.png" />
                                                <span className="arrow"></span>
                                                <span className="iconfont  icon-hook"></span>
                                            </Checkbox>
                                        </li>
                                        <li>
                                            <Checkbox className="check-img" checked={true}>
                                                <img className="head" src="../components/global/image/head.png" />
                                                <span className="arrow"></span>
                                                <span className="iconfont  icon-hook"></span>
                                            </Checkbox>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </dd>
                    </dl>
                </section>
            </section>
            <section className="send-box cf">
                <div className="grid-12 tr pr40">
                    <a className="return-btn">
                        <span className="iconfont icon-left"></span>
                    </a>
                </div>
                <div className="grid-12 pl40">
                    <Checkbox className="mr10 vm"/>
                    <span className="vm mr10 iconimg icon-mail"></span>
                    <span className="vm ">同事发送短信</span>
                    <a className="btn btn-big vm send-btn ml20">
                        发送
                    </a>
                </div>
            </section>
        </div>
    }


    renderTwoView() {
        return <section className="message-content-box">
            <div className="message-content-box-c">
                <div className="message-content-title">
                    <span className="fl">筛选：</span>
                    <ul className="filter-list">
                        <li>
                            <a className="btn">素材库</a>
                        </li>
                        <li>
                            <a className="btn btn-blue">就医指南</a>
                        </li>
                        <li>
                            <a className="btn btn-blue">健康贴士</a>
                        </li>
                    </ul>
                    <section className="seach-box">
                        <input type="text" placeholder="输入标签名" />
                        <a className="iconfont icon-seach seach-btn"></a>
                        <div className="number">分组标签&nbsp; 3/10</div>
                    </section>
                </div>
                <div className="content">
                    <dl className="message-material-list">
                        <dt>推送信息素材库&nbsp; </dt>
                    </dl>
                    <dl className="message-material-list">
                        <dt>就医指南&nbsp; <span className="iconfont icon-bottom"></span></dt>
                        <dd className="selected">
                            <p className="title">
                                <span className="radio selected vm">
                                </span>
                                饭后不能立即吃水果
                            </p>
                            <p className="txt">
                                很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。
                            </p>
                            <a className="iconfont icon-seach seach-btn"></a>
                        </dd>
                        <dd>
                            <p className="title">
                                <span className="radio selected vm">
                                </span>
                                饭后不能立即吃水果
                            </p>
                            <p className="txt">
                                很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。
                            </p>
                            <a className="iconfont icon-seach seach-btn"></a>
                        </dd>
                        <dd>
                            <p className="title">
                                <span className="radio selected vm">
                                </span>
                                饭后不能立即吃水果
                            </p>
                            <p className="txt">
                                很多人都喜欢饭后吃点水果，这是一种错误的生活习惯。食物进入胃以后，需要经过1到2小时的消化，如果饭后立即吃水果，就会被先前吃进的食物阻挡，致使水果不能正常地消化。时间长了，就会引起腹胀、腹泻或便秘等症状。
                            </p>
                            <a className="iconfont icon-seach seach-btn"></a>
                        </dd>
                    </dl>
                </div>
                <section className="send-box tc cf">
                    <a className="return-btn">
                        <span className="iconfont icon-right"></span>
                    </a>
                </section>
            </div>
        </section>
    }

    renderThreeView() {
        return <section className="send-success-box">
            <div className="content">
                <span className="vm iconimg icon-mail"></span>
                发送成功
            </div>
            <p className="txt">
                <span className="blue">2S</span>&nbsp; 后自动跳转至主页
            </p>
        </section>
    }


    renderView() {
        switch (this.props.state.state) {
            case 0:
                return this.renderOneView();
            case 1:
                return this.renderTwoView();
            case 2:
                return this.renderThreeView();
        }
    }

    renderProcess() {
        let {state} = this.props.state;

        let getClass = (i) => {
            let css = "li "
            if (i > state) {
                return css + '';
            } else if (i == state) {
                return css + 'selected';
            } else if (i < state) {
                return css + 'prev';
            }
        }

        return <section className="process-box">
            <div className={getClass(0) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>1</span></span>
                <p>选择推送内容</p>
            </div>
            <div className={getClass(1) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>2</span></span>
                <p>选择推送内容</p>
            </div>
            <div className={getClass(2) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>3</span></span>
                <p>推送信息</p>
            </div>
        </section>
    }


    render() {
        const { state, dispatch } = this.props;
        return <div className="h100">
            <section className="h100 message-page main-content">
                { this.renderProcess() }
                { this.renderView() }
            </section>
        </div>
    }
}


export default connect(mapStateToProps)(App);







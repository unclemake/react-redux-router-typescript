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
        return <section className="msgset-page main-content-bg">
            <h2>短信设置 <span className="ml20 f18 black">设置哪些功能开启短信提醒</span></h2>
            <div className="msgset-content">
                <h3>预约提醒</h3>
                <ul className="set-list">
                    <li>
                        <p className="title">
                            <Checkbox />预约就诊的前一天<span className="ml30 f14 black">其中[date]为系统变量，会自动生成预约时间，格式如2016-06-01 13: 00-17: 00</span>
                        </p>
                        <p className="txt-title black">
                            短信内容:
                        </p>
                        <p className="txt">
                            【仁济医院】您好，您预约了明天到“仁济医院国际门诊”就诊，就诊时间[date]，就诊地点：上海市浦东新区北园路33号，联系电话：0086-21-68383408。
                        </p>
                    </li>
                    <li>
                        <p className="title">
                            <Checkbox />预约成功
                        </p>
                        <p className="txt-title black">
                            短信内容:
                        </p>
                        <p className="txt">
                            【仁济医院】您好，您预约了明天到“仁济医院国际门诊”就诊，就诊时间[date]，就诊地点：上海市浦东新区北园路33号，联系电话：0086-21-68383408。
                        </p>
                    </li>
                    <li>
                        <p className="title">
                            <Checkbox />就诊叫号提醒
                        </p>
                        <p className="txt-title black">
                            短信内容:
                        </p>
                        <p className="txt">
                            【仁济医院】您现在可以就诊，请到护士台。
                        </p>
                    </li>
                    <li>
                        <p className="title">
                            <Checkbox />健康档案更新提醒
                        </p>
                        <p className="txt-title black">
                            短信内容:
                        </p>
                        <p className="txt">
                            【仁济医院】您好，您的健康档案有更新，请到“仁济微网站-个人中心-健康档案”查看。
                        </p>
                    </li>
                </ul>
            </div>
            <div className="tc mt100 save-box">
                <a className="btn btn-huge">保存</a>
                <a className="btn btn-huge btn-gray-bo ml40">取消</a>
            </div>
        </section>
    }
}

/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="main-content-bg home-page">
            <p className="title">
                就诊患者
            </p>

            <section className="patient-content">
                <div className="center-box">
                    <p className="phote">
                        <img src="./components/global/image/head.png" />
                    </p>
                    <p className="name">
                        王庆雅
                    </p>
                    <div className="fun cf">
                        <div className="grid-12 tr bo-l"><span className="iconfont icon-bag mr15"></span>健康档案</div>
                        <div className="grid-12 tl"><span className="iconfont icon-bag mr15"></span>就诊结束</div>
                    </div>
                </div>
            </section>

            <div className="patient-msg">
                <div className="grid-12 bo-l blue">
                    <p>
                        已就诊数：5
                    </p>
                    <p>
                        待就诊数：6
                    </p>
                </div>
                <div className="grid-12">
                    <p>
                        下一个患者
                    </p>
                    <p className="f64">
                        李小猫
                    </p>
                </div>
            </div>
        </section>;
    }
}


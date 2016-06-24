/// <reference path="../index.d.ts" />
import * as React from 'react';


export default class Component extends React.Component<void, void> {
    render() {
        return <section className="page-sidebar">
            <header>
                <img src="components/global/image/head.png" />
                <p className="name">Di Xu</p>
                <p className="mt20">
                    设置<span className="line"></span>退出
                </p>
            </header>
            <nav>
                <a className="selected">
                    <i className="iconfont icon-book"></i>
                    <span className="fl">
                        接待中心
                    </span>
                    <span className="tag">28</span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        信息推送
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        患者管理
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        健康档案
                    </span>
                </a>
                <a>
                    <span className="icon">
                        <i className="iconfont icon-book"></i>
                    </span>
                    <span className="fl">
                        网站维护
                    </span>
                </a>
            </nav>
            <footer>
                <a>中文</a><span className="line"></span><a>English</a>
            </footer>
        </section>;
    }
}

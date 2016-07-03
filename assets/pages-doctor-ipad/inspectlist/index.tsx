/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';

import './index.css';
export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        return <section className="inspectlist-page pr">
            <div className="return-box">
                <a className="return-btn iconfont icon-left">
                </a>
                返回
            </div>
            <section className="userlist-content">
                <ul className="inspect-list">
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                    <li>
                        <img src="../../components/global/image/head.png" />
                        <p>2016-06-17</p>
                    </li>
                </ul>
            </section>
        </section>;
    }
}


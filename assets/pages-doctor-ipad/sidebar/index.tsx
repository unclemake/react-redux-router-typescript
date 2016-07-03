/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {

    render() {
        let pathname = this.props.location.pathname;
        return <section className="page-sidebar">
            <header>
                <img src="components/global/image/head.png" />
                <p className="mt10">
                    退出
                </p>
            </header>
            <footer>
                <a>中文</a>
                <a>English</a>
            </footer>
        </section>;
    }
}


/// <reference path="../../index.d.ts" />
import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


export default class Component extends React.Component<ReactRouter.RouteComponentProps<void, void>, void> {


    navList: {
        name: string,
        icon: string,
        url: string,
        number?: number
    }[] = [
        {
            name: '就诊中心',
            icon: 'book',
            url: '/home'
        },
        {
            name: '个人中心',
            icon: 'book',
            url: '/my'
        }
    ]

    render() {
        let pathname = this.props.location.pathname;
        return <section className="page-sidebar">
            <header>
                <img src="components/global/image/head.png" />
                <p className="name">Di Xu</p>
                <p className="mt20">
                    设置<span className="line"></span>退出
                </p>
            </header>
            <nav>
                {
                    this.navList.map((value, index) => {
                        return <Link key={index} className={pathname == value.url ? 'selected' : ''} to={ value.url}>
                            <i className={"iconfont icon-" + value.icon}></i>
                            <span className="fl">
                                {value.name}
                            </span>
                            {value.number && <span className="tag">{value.number}</span>}
                        </Link>
                    })
                }
            </nav>
            <footer>
                <a>中文</a><span className="line"></span><a>English</a>
            </footer>
        </section>;
    }
}


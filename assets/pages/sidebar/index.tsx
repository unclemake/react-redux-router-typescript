/// <reference path="../index.d.ts" />
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
            name: '接待中心',
            icon: 'book',
            url: '/reception',
            number: 28
        },
        {
            name: '短信设置',
            icon: 'book',
            url: '/orderadmin'
        },
        {
            name: '信息推送',
            icon: 'book',
            url: '/message'
        },
        {
            name: '预约管理',
            icon: 'book',
            url: '/'
        },
        {
            name: '患者管理',
            icon: 'book',
            url: '/'
        },
        {
            name: '档案管理',
            icon: 'book',
            url: '/'
        },
        {
            name: '网站维护',
            icon: 'book',
            url: '/'
        },
        {
            name: '支付管理',
            icon: 'book',
            url: '/'
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
                        return <Link className={pathname == value.url ? 'selected' : ''} to={ value.url}>
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


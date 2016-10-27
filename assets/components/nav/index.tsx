import * as React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


export default class Component extends React.Component<any, void> {
    render() {
        return <ul>
            <li><Link to='/home'>首页</Link></li>
            <li><Link to='/my'>关于</Link></li>
        </ul>
    }
}

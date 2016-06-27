/// <reference path="../index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect, hashHistory } from 'react-router';


import Sidebar from '../sidebar/index';
import Reception from '../reception/index';

function async(text) {
    return (location, callback) => {
        console.log('加载：' + text);
        require.async(text, (mod) => {
            var Com = mod.default;
            callback(null, (prop) => {
                return <Main {...prop}><Com /></Main>;
            })
        })
    }
}


class Main extends React.Component<void, void> {
    render() {
        return <div className="h100">
            <Sidebar {...this.props} />
            <main>
                {this.props.children}
            </main>
        </div>;
    }
}

export default class AppRouter extends React.Component<void, void> {

    render() {
        return <Router history={hashHistory}  >
            <Redirect from="/" to="message" />
            <Route path="/message" getComponents={ async('../message/index') } />
            <Route path="/reception" getComponents={ async('../reception/index') } />
        </Router>
    }
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
);
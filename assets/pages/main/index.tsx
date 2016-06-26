/// <reference path="../index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


import Sidebar from '../sidebar/index';
import Reception from '../reception/index';


function async(text) {
    return (location, callback) => {
        console.log('加载：' + text);
        require.async(text, (mod) => {
            callback(null, mod.default)
        })
    }
}

export default class AppRouter extends React.Component<void, void> {

    render() {
        return <div className="h100">
            <Sidebar />
            <main>
                <Router>
                    <Redirect from="/" to="message" />
                    <Route path="message" getComponents={ async('../message/index') } />
                    <Route path="reception" getComponents={ async('../reception/index') } />
                </Router>
            </main>
        </div>;
    }
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
);
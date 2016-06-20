/// <reference path="../index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, Redirect } from 'react-router';


import Sidebar from '../sidebar/index';


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
                    <Redirect from="/" to="home" />

                    <Route path="home" getComponents={ async('../home/index') } />

                    <Route path="login" getComponents={ async('../login/index') } />

                    {//404
                    }
                    <Route  path="/*" getComponents={ async('../error/index') } />
                </Router >
            </main>
        </div>;
    }
}

ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
);
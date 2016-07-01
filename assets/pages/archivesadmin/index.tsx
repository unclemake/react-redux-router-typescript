/// <reference path="../index.d.ts" />
/**
* 档案管理
*/
import * as React from 'react';
import Component from './component/index';
import { Provider } from 'react-redux';
import { Store, createStore, Dispatch, applyMiddleware } from 'redux';

import { frootReducer} from './reducer';
import thunk  from 'redux-thunk';

import './index.css';

//创建store
const store: Store = createStore(frootReducer, applyMiddleware(thunk));


//渲染
export default class App extends React.Component<void, void> {
    render() {
        return <Provider store={store} {...this.props}>
            <Component />
        </Provider>
    }
}

/**
* 预约中心
*/
import * as React from 'react';
import Component from './component';
import './index.css';
import { Provider } from 'react-redux';
import { Store, createStore, Dispatch, applyMiddleware } from 'redux';

import { frootReducer} from './redux';
import thunk  from 'redux-thunk';


//创建store
const store: Store = createStore(frootReducer, applyMiddleware(thunk));


//渲染
export default class App extends React.Component<void, void> {
    render() {
        return <Provider store={store}>
            <Component />
        </Provider>
    }
}

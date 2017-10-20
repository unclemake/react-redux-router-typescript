import * as React from 'react';
import { Store, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { BasePage } from '@components/global/baseClass';
import reducer from './reducer';
import { addTodo } from './acitons';
import * as model from './model';
import { autobind } from 'core-decorators';

interface IPageState {
    text: string
};

/**
 * 
 * 子组件
 * @export
 * @class Page
 * @extends {React.Component<any, any>}
 */
@autobind
export default class Page extends React.PureComponent<any, {
    a: number,
    b: number
}> {

    states = {
        a: 1,
        b: 1
    }

    state = {
        a: 1,
        b: 1
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(this.state.a);
    //     console.log(nextState.a);
    //     return true;
    // }

    render() {

        this.setState(value => value.a = 1);

        const { props, state } = this;
        return (<div>
            组件Test{this.states.a}
            <a onClick={() => {
                this.states.a++;
                this.setState(this.states);
            }} >点击</a>
        </div>);
    }
}

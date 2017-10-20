import * as React from 'react';
import { Store, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { autobind } from 'core-decorators';

type Pick<T> = {
    [P in keyof T]: T[P];
};

/**
 * 基类
 * 
 * @export
 * @class BaseComponent
 * @extends {React.PureComponent<P, S>}
 * @template P 
 * @template S 
 */
@autobind
export abstract class BaseComponent<P, S> extends React.PureComponent<P, S> {
    /**
     * 记录状态
     * 
     * @type {S}
     * @memberof BaseComponent
     */
    states: S

    /**
     * 更新状态
     * 
     * @param {Pick<P>} state 
     * @memberof BaseComponent
     */
    setStates(state: Pick<S> = this.states) {
        this.setState(state);
    }
}

/**
 * 页面属性
 * 
 * @interface IPageProps
 * @template params url参数
 * @template data 页面数据
 */
interface IPageProps<params, data> {
    router: RouteComponentProps<params>
    data: data
    dispatch: Dispatch<any>
    store: Store<any>
}

@autobind
export class BasePage<params, data> extends BaseComponent<IPageProps<params, data>, any> {

}

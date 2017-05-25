import * as React from 'react';
import { Store, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { autobind } from 'core-decorators';


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
export class BasePage<params, data> extends React.Component<IPageProps<params, data>, any> {

}


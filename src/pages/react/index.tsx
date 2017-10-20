import * as React from 'react';
import { Store, createStore, Dispatch } from 'redux';
import { Provider, connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { BasePage } from '@components/global/baseClass';
import reducer from './reducer';
import * as acitons from './acitons';
import { addTodo, completeTodo } from './acitons';
import * as model from './model';
import { SelectedEnum, IState } from './model';
import Test from './test';
import { autobind } from 'core-decorators';
import './index.less';

interface IPageState {
    text: string
};

/**
 * 
 * react页面
 * @export
 * @class Page
 * @extends {BasePage<void, model.Todo[]>}
 */
@autobind
export default class Page extends BasePage<void, IState> {

    /**
     * 点击事件
     * 
     * @param {React.KeyboardEvent<HTMLInputElement>} e 
     * @memberof Page
     */
    onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        const { dispatch } = this.props;

        if (e.key === 'Enter' && e.currentTarget.value) {
            dispatch(addTodo(e.currentTarget.value));
            e.currentTarget.value = '';
        }
    }

    /**
     * checkBox改变事件
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     * @memberof Page
     */
    checkboxOnChange(e: React.ChangeEvent<HTMLInputElement>, todo: model.Todo) {
        const { dispatch } = this.props;
        dispatch(completeTodo(todo));
    }

    /**
     * 选中所有点击事件
     * 
     * @memberof Page
     */
    toggleAll() {
        this.props.dispatch(acitons.completeAll());
    }

    /**
     * 清理选中
     * 
     * @memberof Page
     */
    clearCompleted() {
        this.props.dispatch(acitons.clearCompleted());
    }

    /**
     * 页面渲染
     * 
     * @returns
     * 
     * @memberOf Page
     */
    render() {
        const { props, state } = this;
        const { data } = props;
        return (<div className='page-react'>
            <section id='todoapp'>
                <header id='header'>
                    <h1>todos</h1>
                    <input id='new-todo' onKeyPress={this.onKeyPress}
                        placeholder='What needs to be done?' autoFocus={true} />
                </header>
                <section id='main' style={{ display: 'block' }}>
                    <input id='toggle-all' onClick={this.toggleAll} type='checkbox' />
                    {/* <label for='toggle-all'>Mark all as complete</label> */}
                    {this.renderList()}
                </section>
                <footer id='footer' style={{ display: 'block' }}>
                    <span id='todo-count'><strong>2</strong> items left</span>
                    {this.renderFilters()}
                    <span id='clear-completed' onClick={this.clearCompleted}>Clear completed</span>
                </footer>
            </section>
            <footer id='info'>
                <p>Double-click to edit a todo</p>
            </footer>
        </div>);
    }

    /**
     * 渲染列表
     * 
     * @returns 
     * @memberof Page
     */
    renderList() {
        const { props, state } = this;
        return <ul id='todo-list'>
            {
                props.data.list.map(value => {
                    return <li >
                        <div className='view'>
                            <input onChange={(e) => this.checkboxOnChange(e, value)}
                                checked={value.completed}
                                className='toggle' type='checkbox' />
                            <label>{value.text}</label>
                            <a className='destroy'></a>
                        </div>
                        <input className='edit' value={value.text} />
                    </li>
                })
            }
        </ul>
    }

    /**
     * 过滤点击
     * 
     * @param {SelectedEnum} value 
     * @memberof Page
     */
    selectedOnClick(value: SelectedEnum) {
        this.props.dispatch(acitons.editFilter(value));
    }

    /**
     * 渲染显示过滤
     * 
     * @memberof Page
     */
    renderFilters() {
        const { data } = this.props;

        let selectedArray = [SelectedEnum.All, SelectedEnum.Active, SelectedEnum.Completed];

        return <ul id='filters'>
            {
                selectedArray.map(value => {
                    return <li>
                        <a onClick={() => this.selectedOnClick(value)}
                            className={value === data.Filter ? 'selected' : ''}>
                            {SelectedEnum[value]}</a>
                    </li>
                })
            }
        </ul>
    }

}
export { reducer };

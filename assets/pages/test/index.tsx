import * as React from 'react';
import { autobind } from 'core-decorators';
import { BasePage } from '@components/global/baseClass';


let state = {
    text: 0
}

/**
 * react页面默认default 加载组件
 * @class Component
 * @extends {React.Component<any, any>}
 */
@autobind
export default class Component extends BasePage<{ id: number }, void> {

    state = state;

    /**
     * 点击事件
     * 
     * 
     * @memberOf Component
     */
    onClick() {
        this.state.text++;
        // 每次setState 会创建一个新的state 所以闭包的state 不会在切换页面时保存值
        this.setState(this.state);
    }

    /**
     * 渲染函数
     * @returns jsx
     * @memberOf Component
     */
    render() {
        const { props } = this;
        return (<section className='page-home'>
            <p>
                {props.router.match.params.id}
            </p>
            <p>
                点击次数:{this.state.text}
            </p>
            <a onClick={this.onClick}>点击</a>
        </section>)
    }
}
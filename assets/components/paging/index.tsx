/// <reference path="../../pages/index.d.ts" />
import * as React from 'react';
import {msg} from '../layer/index';


interface PagingProps {
    index?: number,
    sum: number,
    className?: string,
    onChange: (index: number) => void
}

export class Paging extends React.Component<PagingProps, any> {



    renderPage(index) {
        return (index > 0 && index <= this.props.sum) && <span onClick={() => this.onChange(index) } className={ index == (this.props.index || 1) ? 'btn' : 'btn btn-gray-bo' } > { index }</span >;
    }

    onChange(index) {

        if (!/^[1-9]\d*$/g.test(index)) {
            msg('请输入正整数!');
        }
        if (index && index > 0 && index <= this.props.sum) {
            this.props.onChange(index);
        }
    }


    textValue;

    render() {
        let index = this.props.index || 1;
        let props = this.props;

        return <section className={"paging " + (this.props.className || '') }>

            {index > 1 && <span className="btn btn-gray-bo" onClick={() => this.onChange(index - 1) }>上一页</span>}

            {this.renderPage(index - 3) }
            {this.renderPage(index - 2) }
            {this.renderPage(index - 1) }
            {this.renderPage(index) }
            {this.renderPage(index + 1) }
            {this.renderPage(index + 2) }
            {this.renderPage(index + 3) }


            {index != props.sum && <span className="btn btn-gray-bo" onClick={() => this.onChange(index + 1) }>下一页</span>}

            <span>共 {index}/{props.sum}</span>
            <span><input type="text" className="text" ref="text" onChange={(e) => {
                this.textValue = e.target.value
            } }/></span>
            <span className="btn btn-gray-bo" onClick={() => {
                this.onChange(this.textValue);
            } }>跳转</span>
        </section>;
    }
}

import * as React from 'react';


export default class Component extends React.Component<any, any> {

    state = {
        btnNu: 1,
        btnText: '点击我'
    };


    btnClick() {
        this.setState({
            btnNu: this.state.btnNu + 1
        });
    }

    render() {
        const {state} = this;
        return <section className='page-home'>
            <h2>简单例子1</h2>
            <div>
                <a onClick={this.btnClick.bind(this)}>{state.btnText}:{state.btnNu}</a>&nbsp;&nbsp;
                <a onClick={() => this.btnClick()}>{state.btnText}:{state.btnNu}</a>
            </div>
            <Component2 nu={10} />
            <input />
            <input />
        </section>
    }
}



class Component2 extends React.Component<{
    nu: number
}, any> {

    state = {
        btnNu: this.props.nu,
    };

    btnClick() {
        this.setState({
            btnNu: this.state.btnNu + 1,
        });
    }

    render() {
        const {state} = this;
        return <section className='page=home'>
            <h2>简单例子2</h2>
            <div>
                <a onClick={this.btnClick.bind(this)} className='ant-btn'><i className='iconfont icon-home white'></i>点击:{state.btnNu}</a>
            </div>
        </section>;
    }
}

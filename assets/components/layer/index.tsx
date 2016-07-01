import * as React from 'react';
import * as ReactDOM from 'react-dom';


type msgProps = {
    msg: string
}
interface msgState {
    left: number,
    top: number,
    mleft: string,
    mtop: string,
    class: string
}
class MsgComponent<T> extends React.Component<T, any> {

    state = {
        mleft: 0,
        mtop: 0,
        left: '0px',
        top: '0px',
        class: ''
    }

    calculateStyle() {
        var t = this;

        t.state.mleft = t.refs['layer'].clientWidth / -2;
        t.state.mtop = t.refs['layer'].clientHeight / -2;
        t.state.top = "50%";
        t.state.left = "50%";
        t.setState(t.state);
    }

    show() {
        this.state.class = 'show';
        this.setState(this.state);
        setTimeout(function () {
            this.calculateStyle();
        }.bind(this), 1);
    }

    componentDidMount() {
        this.show();
    }

    render() {
        return (
            <section ref="layer"
                style={{
                    marginLeft: this.state.mleft,
                    marginTop: this.state.mtop,
                    top: this.state.top,
                    left: this.state.left,
                }}
                className={"layer-msg " + this.state.class}>{this.props.msg}</section>
        );
    }
}

export var msg = (msg: string) => {
    var divEle = createDiv();
    ReactDOM.render(
        <MsgComponent msg={msg} />,
        divEle
    );
    setTimeout(function () {
        divEle.remove();
    }, 3000);
}

class ConfirmComponent extends MsgComponent<any> {
    props = {
        msg: '内容',
        title: '标题',
        cb: () => { },
        cancle: () => { }
    }
    render() {
        return (
            <section className={"layer-confirm " + this.state.class} ref="layer"  style={{
                marginLeft: this.state.mleft,
                marginTop: this.state.mtop,
                top: this.state.top,
                left: this.state.left,
            }}>
                {!!this.props.title && <div className="layer-title">{this.props.title}</div> }
                <div className="layer-content">{this.props.msg}</div>
                <div className="layer-footer">
                    <a className="btn btn-blue" onClick={this.props.cb }>确定</a>
                    <a className="btn btn-gray" onClick={this.props.cancle }>取消</a>
                </div>
            </section >
        );
    }
}

type confirmProps = {
    msg: string
    title?: string
    cb?: () => boolean | void
    cancle?: () => boolean | void
}
export var confirm = (props: confirmProps) => {
    mask();
    var divEle = createDiv();
    var callback = () => {
        if (props.cb) {
            if (props.cb() !== false) {
                divEle.remove();
                mask(false);
            }
        } else {
            divEle.remove();
            mask(false);
        }
    }

    var cancleCb = () => {
        if (props.cancle) {
            if (props.cancle() !== false) {
                divEle.remove();
                mask(false);
            }
        } else {
            divEle.remove();
            mask(false);
        }
    }

    ReactDOM.render(
        <ConfirmComponent msg={props.msg} title={props.title} cb={callback} cancle={cancleCb}/>,
        divEle
    );
    return divEle;
}

let layerBox = document.createElement('div');
layerBox.id = "layer-box";
document.body.appendChild(layerBox);

function createDiv() {
    let dialogHolder = document.createElement('div');
    layerBox.appendChild(dialogHolder);
    return dialogHolder;
}


export var clear = () => {
    maskCont--;
    maskDiv = null;
    layerBox.innerHTML = "";
}


//遮罩生成
var maskDiv;
var maskCont = 0;
export var mask = (bl: boolean = true) => {
    if (maskDiv && bl) {
        maskCont++;
    } else if (bl) {
        maskDiv = createDiv();
        maskDiv.className = 'layer-mask show';
        maskCont = 1;
    }

    if (!bl) {
        maskCont--;
        if (maskCont <= 0) {
            maskDiv && maskDiv.remove();
            maskDiv = null;
        }
    }
}


type pageProps = {
    onHide?: () => {}
    show?: boolean
}

export class Page extends MsgComponent<pageProps> {

    componentDidMount() {
    }

    render() {
        if (this.props.show) {
            mask();
            setTimeout(() => {
                this.calculateStyle();
            }, 1);
        } else {
            mask(false);
        }

        return (
            <section  style={{
                marginLeft: this.state.mleft,
                marginTop: this.state.mtop,
                top: this.state.top,
                left: this.state.left,
            }} className={"layer-page " + (this.props.show ? 'show' : '') } ref = "layer" >
                <a className="close-btn" onClick={this.props.onHide }><i className="iconfont icon-left"></i></a>
                <section className="layer-page-content">
                    {this.props.children}
                </section>
            </section>
        );
    }
}



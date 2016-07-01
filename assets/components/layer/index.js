define(function(require, exports, module) {"use strict";
const React = require('react');
const ReactDOM = require('react-dom');
class MsgComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            mleft: 0,
            mtop: 0,
            left: '0px',
            top: '0px',
            class: ''
        };
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
        return (React.createElement("section", {ref: "layer", style: {
            marginLeft: this.state.mleft,
            marginTop: this.state.mtop,
            top: this.state.top,
            left: this.state.left,
        }, className: "layer-msg " + this.state.class}, this.props.msg));
    }
}
exports.msg = (msg) => {
    var divEle = createDiv();
    ReactDOM.render(React.createElement(MsgComponent, {msg: msg}), divEle);
    setTimeout(function () {
        divEle.remove();
    }, 3000);
};
class ConfirmComponent extends MsgComponent {
    constructor(...args) {
        super(...args);
        this.props = {
            msg: '内容',
            title: '标题',
            cb: () => { },
            cancle: () => { }
        };
    }
    render() {
        return (React.createElement("section", {className: "layer-confirm " + this.state.class, ref: "layer", style: {
            marginLeft: this.state.mleft,
            marginTop: this.state.mtop,
            top: this.state.top,
            left: this.state.left,
        }}, !!this.props.title && React.createElement("div", {className: "layer-title"}, this.props.title), React.createElement("div", {className: "layer-content"}, this.props.msg), React.createElement("div", {className: "layer-footer"}, React.createElement("a", {className: "btn btn-blue", onClick: this.props.cb}, "确定"), React.createElement("a", {className: "btn btn-gray", onClick: this.props.cancle}, "取消"))));
    }
}
exports.confirm = (props) => {
    exports.mask();
    var divEle = createDiv();
    var callback = () => {
        if (props.cb) {
            if (props.cb() !== false) {
                divEle.remove();
                exports.mask(false);
            }
        }
        else {
            divEle.remove();
            exports.mask(false);
        }
    };
    var cancleCb = () => {
        if (props.cancle) {
            if (props.cancle() !== false) {
                divEle.remove();
                exports.mask(false);
            }
        }
        else {
            divEle.remove();
            exports.mask(false);
        }
    };
    ReactDOM.render(React.createElement(ConfirmComponent, {msg: props.msg, title: props.title, cb: callback, cancle: cancleCb}), divEle);
    return divEle;
};
let layerBox = document.createElement('div');
layerBox.id = "layer-box";
document.body.appendChild(layerBox);
function createDiv() {
    let dialogHolder = document.createElement('div');
    layerBox.appendChild(dialogHolder);
    return dialogHolder;
}
exports.clear = () => {
    maskCont--;
    maskDiv = null;
    layerBox.innerHTML = "";
};
//遮罩生成
var maskDiv;
var maskCont = 0;
exports.mask = (bl = true) => {
    if (maskDiv && bl) {
        maskCont++;
    }
    else if (bl) {
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
};
class Page extends MsgComponent {
    componentDidMount() {
    }
    render() {
        if (this.props.show) {
            exports.mask();
            setTimeout(() => {
                this.calculateStyle();
            }, 1);
        }
        else {
            exports.mask(false);
        }
        return (React.createElement("section", {style: {
            marginLeft: this.state.mleft,
            marginTop: this.state.mtop,
            top: this.state.top,
            left: this.state.left,
        }, className: "layer-page " + (this.props.show ? 'show' : ''), ref: "layer"}, React.createElement("a", {className: "close-btn", onClick: this.props.onHide}, React.createElement("i", {className: "iconfont icon-left"})), React.createElement("section", {className: "layer-page-content"}, this.props.children)));
    }
}
exports.Page = Page;
})
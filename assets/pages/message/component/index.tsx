/// <reference path="../../index.d.ts" />

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as action from '../action';
import {State} from '../model';
import Scroll from '../../../components/scroll/index';
import {Radio, Checkbox} from '../../../components/checkbox/index';
import * as util from '../../../components/util/index';
import Sidebar from '../../sidebar/index';


interface AppProps {
    state: State,
    dispatch: Dispatch
}

//获取state
const mapStateToProps = state => {
    return state;
};

export class App extends React.Component<AppProps, any> {

    state = {
        zeroCount: 3
    }

    dispatch = this.props.dispatch;


    /**
    * 第一页开始
    */
    renderOneView() {
        let {messageLabelList} = this.props.state;
        return <section className="message-content-box">
            <div className="message-content-box-c">
                <div className="message-content-title">
                    <span className="fl">筛选：</span>
                    <ul className="filter-list">
                        {
                            messageLabelList.map((value, index) => {
                                return <li key={index}>
                                    <a onClick={() => {
                                        this.dispatch(action.update_label_selected({
                                            id: value.id, selected: !value.selected
                                        }));
                                    } } className={"btn " + (value.selected ? 'btn-blue' : '') }>{value.name}</a>
                                </li>
                            })
                        }
                    </ul>
                    <section className="seach-box">
                        <input type="text" placeholder="输入标签名" />
                        <a className="iconfont icon-seach seach-btn"></a>
                        <div className="number">分组标签&nbsp; 3/10</div>
                    </section>
                </div>
                <div className="content">
                    {
                        messageLabelList.map((value, index) => {
                            if (value.selected) {
                                return <dl className="message-material-list" key={index}>
                                    <dt>{value.name}&nbsp; <span className="iconfont icon-bottom"></span></dt>
                                    {this.renderMessageMaterial(value.id) }
                                </dl>
                            }
                        })
                    }
                </div>
            </div>
            <section className="send-box tc cf">
                <a className="return-btn" onClick={() => { this.dispatch(action.updateState(1)) } }>
                    <span className="iconfont icon-right"></span>
                </a>
            </section>
        </section>
    }

    renderMessageMaterial(id: number) {
        let {messageMaterialList} = this.props.state;
        let data = messageMaterialList.filter(value => value.labelId == id);
        return data.map((value, index) => {
            return <dd key={index} className={value.selected ? 'selected' : ''}>
                <div className="title">
                    <Radio checked={value.selected} onChange={(checked) => {
                        this.dispatch(action.update_materia_selected({
                            id: value.id,
                            selected: checked
                        }));
                    } } >
                        {value.title}
                    </Radio>
                </div>
                <p className="txt">
                    {value.content}
                </p>
                <a className="iconfont icon-seach seach-btn"></a>
            </dd>
        });
    }




    /**
     * 第二页开始
     */
    renderTwoView() {
        let cont = 0;
        let contSelected = 0;
        let state = this.props.state;
        let userTypeGroupList = state.userGroupList[state.indexGroup];
        userTypeGroupList.list.forEach((value, index) => {
            cont += value.userList.length;
            value.userList.forEach((value, index) => {
                value.selected && contSelected++;
            });
        });

        return <div>
            <div className="message-content cf">
                <section className="message-box-left">
                    <section className="seach-box">
                        <input type="text" placeholder="输入标签名" />
                        <a className="iconfont icon-seach seach-btn"></a>
                    </section>
                    <div className="lable-cont">分组标签&nbsp; 3/10</div>

                    <section className="group-box mt15">
                        <dl className="group-list">
                            <dt>
                                <Checkbox onChange={
                                    (checked) => {
                                        this.selectedAll(checked);
                                    }
                                } checked={this.props.state.userGroupList.every(value => value.selected) } className="fuck">
                                    全部群组
                                </Checkbox>
                            </dt>
                            {
                                this.props.state.userGroupList.map((value, index) => {
                                    return <dd className="cp" key={index}>
                                        <Checkbox checked={value.selected} onChange={ (checked) => {
                                            this.dispatch(action.update_group_selected({
                                                id: value.id,
                                                selected: checked
                                            }))
                                        } } ></Checkbox><span className="txt">{value.name}</span>({value.total})
                                    </dd>;
                                })
                            }
                        </dl>
                    </section>
                </section>
                <section className="message-box-right">
                    <section className="user-list">
                        <dl className="pt15">
                            <dt>
                                <Checkbox onChange={ (checked) => {
                                    this.dispatch(action.update_group_selected({
                                        id: userTypeGroupList.id,
                                        selected: checked
                                    }))
                                } } checked={cont == contSelected }>
                                    全部
                                    <span className="number">{contSelected}/{cont}</span>
                                </Checkbox>
                            </dt>
                            {
                                userTypeGroupList.list.map((value, index) => {
                                    let cont = value.userList.length;
                                    let contSelect = value.userList.filter(value => value.selected == true).length;
                                    let groupValue = value;
                                    return <dd key={index}>
                                        <dl>
                                            <dt>
                                                <Checkbox checked={cont == contSelect } onChange={(checked) => {
                                                    value.userList.forEach((value, index) => {
                                                        this.dispatch(action.update_user_selected({
                                                            groupId: groupValue.id,
                                                            id: value.id,
                                                            selected: checked
                                                        }));
                                                    })
                                                } }>
                                                    {value.name}
                                                    <span className="number">{contSelect}/{cont}</span>
                                                </Checkbox>
                                            </dt>
                                            <dd>
                                                <ul>
                                                    {
                                                        value.userList.map((value, index) => {
                                                            return <li key={index}>
                                                                <Checkbox onChange={(checked) => {
                                                                    this.dispatch(action.update_user_selected({
                                                                        groupId: groupValue.id,
                                                                        id: value.id,
                                                                        selected: checked
                                                                    }));
                                                                } } showCheckbox={false} className="check-img" checked={value.selected}>
                                                                    <img className="head" src={value.url} />
                                                                    <span className="arrow"></span>
                                                                    <span className="iconfont  icon-hook"></span>
                                                                </Checkbox>
                                                            </li>;
                                                        })
                                                    }
                                                </ul>
                                            </dd>
                                        </dl>
                                    </dd>;
                                })
                            }
                        </dl>
                    </section>
                </section>
            </div>
            <section className="send-box cf">
                <div className="grid-12 tr pr40">
                    <a className="return-btn" onClick={() => { this.dispatch(action.updateState(0)) } }>
                        <span className="iconfont icon-left"></span>
                    </a>
                </div>
                <div className="grid-12 pl40">
                    <Checkbox className="mr10 vm"/>
                    <span className="vm mr10 iconimg icon-mail"></span>
                    <span className="vm ">同事发送短信</span>
                    <a className="btn btn-big vm send-btn ml20" onClick={this.sendMessage.bind(this) } >
                        发送
                    </a>
                </div>
            </section>
        </div >
    }

    /**
     * 选中所有群组
     * @param checked 状态
     */
    selectedAll(checked: boolean) {
        let state = this.props.state;
        state.userGroupList.forEach(value => {
            this.dispatch(action.update_group_selected({
                id: value.id,
                selected: checked
            }))
        })
    }


    /**
     * 发送短信
     */
    sendMessage() {
        this.dispatch(action.updateState(2));
        this.zeroCount();
    }

    /**
     * 倒计时
     */
    zeroCount() {
        this.state.zeroCount--;
        this.setState(this.state);

        if (this.state.zeroCount == 0) {
            this.state.zeroCount = 3;
            this.dispatch(action.updateState(0));
        } else {
            setTimeout(() => this.zeroCount(), 1000)
        }
    }

    /**
     * 第三页开始
     */
    renderThreeView() {
        return <section className="send-success-box">
            <div className="content">
                <span className="vm iconimg icon-mail"></span>
                发送成功
            </div>
            <p className="txt">
                <span className="blue">{this.state.zeroCount}S</span>&nbsp; 后自动跳转至主页
            </p>
        </section>
    }


    renderView() {
        switch (this.props.state.state) {
            case 0:
                return this.renderOneView();
            case 1:
                return this.renderTwoView();
            case 2:
                return this.renderThreeView();
        }
    }

    renderProcess() {
        let {state} = this.props.state;

        let getClass = (i) => {
            let css = "li "
            if (i > state) {
                return css + '';
            } else if (i == state) {
                return css + 'selected';
            } else if (i < state) {
                return css + 'prev';
            }
        }

        return <section className="process-box">
            <div className={getClass(0) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>1</span></span>
                <p>选择推送内容</p>
            </div>
            <div className={getClass(1) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>2</span></span>
                <p>选择推送内容</p>
            </div>
            <div className={getClass(2) }>
                <span className="line-left"></span>
                <span className="line-right"></span>
                <span className="number"><span>3</span></span>
                <p>推送信息</p>
            </div>
        </section>
    }


    render() {
        const { state, dispatch } = this.props;
        return <div className="h100">
            <section className="h100 message-page main-content">
                { this.renderProcess() }
                { this.renderView() }
            </section>
        </div>
    }
}


export default connect(mapStateToProps)(App);







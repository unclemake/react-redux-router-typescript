/// <reference path="../../pages/index.d.ts" />
import * as React from 'react';


interface CheckboxProps {
    checked?: boolean,
    name?: string
    className?: string,
    showCheckbox?: boolean,
    onChange?: (checked: boolean) => void
}

export class Checkbox extends React.Component<CheckboxProps, any> {

    state = {
        checked: this.props.checked
    }

    click() {
        this.change(!this.state.checked);
    }

    change(checked: boolean) {
        this.state.checked = checked;
        this.setState(this.state);
        this.props.onChange && this.props.onChange(this.state.checked);
    }

    className = 'checkbox';

    /**
     * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
     * @param only
     */
    renderCheckbox(only: boolean = true) {
        let className = this.className;
        className += this.state.checked ? ' selected ' : '';
        className += only && this.props.className ? this.props.className : '';

        return <div className={className} onClick={only && this.click.bind(this) } >
        </div>;
    }

    /**
   * 渲染有子级的checkbox
   * @param only
   */
    renderTextCheckbox() {
        return <div className={'cp ' + (this.props.className && this.props.className) + (this.state.checked ? ' selected' : '') } onClick={this.click.bind(this) } >
            {this.props.showCheckbox && this.renderCheckbox(false) }
            {this.props.children}
        </div>;
    }


    render() {
        return this.props.children ? this.renderTextCheckbox() : this.renderCheckbox();
    }
}

let radioList: any = {}
export class Radio extends Checkbox {
    className = 'radio'
    click() {
        if (!this.state.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            })

            this.change(!this.state.checked);
        }
    }

    componentDidMount() {
        if (!radioList[this.props.name]) {
            radioList[this.props.name] = [() => {
                this.change(false);
            }];
        } else {
            radioList[this.props.name].push(() => {
                this.change(false);
            });
        }
    }

}



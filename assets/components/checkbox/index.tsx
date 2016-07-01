/// <reference path="../../pages/index.d.ts" />
import * as React from 'react';


interface CheckboxProps {
    checked?: boolean,
    name?: string
    className?: string,
    showCheckbox?: boolean,
    onChange?: (checked: boolean) => void
}

export class Checkbox<T extends CheckboxProps> extends React.Component<T, any> {

    click() {
        this.change(!this.props.checked);
    }

    change(checked: boolean) {
        this.props.onChange && this.props.onChange(checked);
    }

    className = 'checkbox';


    getClassName() {
        let className = this.className + ' ';
        className += this.props.checked ? ' selected ' : '';
        className += !this.props.children && this.props.className ? this.props.className : '';

        return className;
    }

    /**
     * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
     * @param only
     */
    renderCheckbox() {
        return <div className={this.getClassName() } onClick={!this.props.children && this.click.bind(this) } >
        </div>;
    }

    /**
   * 渲染有子级的checkbox
   * @param only
   */
    renderTextCheckbox() {
        return <div className={'cp ' + (this.props.className && this.props.className) + (this.props.checked ? ' selected' : '') } onClick={this.click.bind(this) } >
            {(this.props.showCheckbox === undefined || !!this.props.showCheckbox) && this.renderCheckbox() }
            {this.props.children}
        </div>;
    }


    render() {
        return this.props.children ? this.renderTextCheckbox() : this.renderCheckbox();
    }
}

let radioList: any = {}




export class Radio extends Checkbox<CheckboxProps> {
    className = 'radio'
    click() {
        if (!this.props.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            })

            this.change(!this.props.checked);
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


interface SwitchBoxProps extends CheckboxProps {
    closeText?: string,
    openText?: string,
    width?: string
}
export class SwitchBox extends Checkbox<SwitchBoxProps> {

    className = 'switchbox'

    /**
   * 渲染基础 checkbox 如果仅仅渲染基础 需要继承 className
   * @param only
   */
    renderCheckbox() {
        return <div width={this.props.width} className={this.getClassName() } onClick={!this.props.children && this.click.bind(this) } >
            <span className="span">{this.props.closeText || '关'}</span>
            <span className="span">{this.props.openText || '开'}</span>
        </div>;
    }
}


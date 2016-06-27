/// <reference path="../../pages/index.d.ts" />
import * as React from 'react';


interface RadioProps {
    checked?: boolean,
    name?: string,
    className?: string,
    onChange?: (checked: boolean) => void
}

let radioList: any = {}

/**
 * radio
 */
export default class Main extends React.Component<RadioProps, any> {

    state = {
        checked: this.props.checked
    }

    click() {
        if (!this.state.checked) {
            radioList[this.props.name].forEach((fun) => {
                fun();
            })

            this.change(!this.state.checked);
        }
    }

    change(checked: boolean) {
        this.state.checked = checked;
        this.setState(this.state);
        this.props.onChange && this.props.onChange(this.state.checked);
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

    render() {
        return <span className={ "radio " + (this.props.name ? this.props.name : '') + ' ' + (this.state.checked ? 'selected' : '') } onClick={this.click.bind(this) } >
        </span >;
    }
}


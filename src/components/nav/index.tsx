import * as React from 'react';
import {
    Link
} from 'react-router-dom'
import './index.css'

export default class Component extends React.Component<any, any> {
    render() {
        return <nav className='nav'>
            <Link to='/'>react</Link>
            <Link to='/test/1'>test1</Link>
            <Link to='/test/2'>test2</Link>
            <Link to='/antd'>antd</Link>
            <Link to='/dfadfadf'>404</Link>
        </nav>
    }
}

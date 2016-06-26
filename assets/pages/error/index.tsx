import * as React from 'react';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import {msg} from '../../components/layer/index';
import {Router} from '../../components/ajax-router/index';
import ajax from 'ajax';
import {Link} from 'react-router';


export default class Main extends React.Component<ReactRouter.RouteComponentProps<{ id: string, type: string }, any>, any> {

    render() {
        var id = this.props.params.id || 404;
        return <div>
            <Header text='出错了！T.T' />
            <main className="main-pb error-box">
                <table>
                    <tr>
                        <td>
                            <p className="pr">
                                <img className="img" src="/asset/pages/error/error.jpg" />
                                <span className="error-code">{id}</span>
                            </p>
                        </td>
                    </tr>
                </table>

            </main>
            <Footer/>
        </div>;
    }
}


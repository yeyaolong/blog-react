import React, { Component } from 'react';
import LoginForm from './loginForm'
import Background from '../../../public/assets/image/background.jpg';
require('./login.less');

class Login extends Component {
    constructor (props) {
        super (props);
        this.state = {}
    }

    render () {
        return (
            <div className="login">
                <div className="container">
                    <LoginForm />
                    <div className="login-picture">
                        <img src={Background} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
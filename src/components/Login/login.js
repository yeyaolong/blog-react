import React, { Component } from 'react';
import LoginForm from './loginForm'
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
                    <div className="login-picture"></div>
                </div>
            </div>

        )
    }
}

export default Login
import React, { Component } from 'react';
require('./login.less');

class LoginForm extends Component {
    constructor (props) {
        super (props);
        this.state = {}
    }

    render () {
        return (
            <div className="loginForm">
                <div className="head">
                    <span>登录博客</span>
                </div>
                <div className="body">
                    <div className="username">
                        <input type="text" name="username" id="username" placeholder="请从输入账号"/>
                    </div>
                    <div className="password">
                        <input type="password" name="passowrd" placeholder="请输入密码"/>
                    </div>
                </div>
                <div className="foot">
                    <div className="submit">
                        <span>登录</span>
                    </div>
                    <div className="forget">
                        <span>忘记密码?</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm
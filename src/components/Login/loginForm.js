import React, { Component } from 'react';
import $http from '../../api/http';
import urlList from "../../api/urlList";
require('./login.less');

class LoginForm extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.submit = this.submit.bind(this);
    }

    handleChangeUsername (event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword (event) {
        this.setState({password: event.target.value});
    }

    submit () {
        let username = this.state.username;
        let password = this.state.password;
        if (username && (username + '').trim().length > 0 && password && (password + '').trim().length > 0) {
            let params = {
                username: username,
                password: password
            }
            $http.post(urlList.Login, params).then((res) => {
                if (res.data.code === 200) {
                    window.location.href= res.data.redirect;
                }
            });
        } else {
            console.error("请将内容填写完整");
        }

    }

    render () {
        return (
            <div className="loginForm">
                <div className="head">
                    <span>登录博客</span>
                </div>
                <div className="body">
                    <div className="username">
                        <input type="text" name="username" id="username" onChange={this.handleChangeUsername} value={this.state.username} placeholder="请从输入账号"/>
                    </div>
                    <div className="password">
                        <input type="password" name="passoword" onChange={this.handleChangePassword} value={this.state.password} placeholder="请输入密码"/>
                    </div>
                </div>
                <div className="foot">
                    <div className="submit" onClick={this.submit}>
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
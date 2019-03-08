import React, { Component } from 'react';
import Logo from '../../../public/assets/image/logo.png';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            headerStyle: {
                width: '100%',
                height: '63px',
                backgroundColor: '#eff4fa',
                position:  'relative'
            },
            logStyle: {
                height: '100%',
                padding: '8px 0 8px 8px',
                fontSize: '32px',
                display: 'inline-block',
            },
            logImgStyle: {
                height: '47px',
                verticalAlign: 'middle',
                marginRight: '12px'
            },
            welcomeStyle: {
                display: 'inline-block',
                textAlign: 'right',
                height: '47px',
                lineHeight: '47px',
                position: 'absolute',
                right: '0',
                bottom: '0',
                padding: '8px 8px 8px 8px',
            },
            userNameStyle: {
                color: '#5a98de',
                cursor: 'pointer'
            }
        }
    }

    render () {
        return (
            <div className="header" style={this.state.headerStyle}>
                <div className="logo" style={this.state.logStyle}>
                    <img src={Logo} style={this.state.logImgStyle}/>
                    河童重工的博客
                </div>
                <div className="welcome" style={this.state.welcomeStyle}>
                    您好，<span style={this.state.userNameStyle}>{this.state.username ? this.state.username : '请登录'}</span>
                </div>
            </div>
        );
    }
}

export default Header
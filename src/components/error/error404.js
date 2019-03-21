import React, { Component } from 'react';
import logo404 from '../../../public/assets/image/404/logo404.svg';
// import meteor from '../../../public/assets/image/404/meteor.svg';
import astronaut from '../../../public/assets/image/404/astronaut.svg';
// import mars from '../../../public/assets/image/404/mars.svg';
import spaceship from '../../../public/assets/image/404/spaceship.svg';
// import star from '../../../public/assets/image/404/star.svg';
class Error404 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: 'Oh no!!',
            subtitle: '页面未找到'
        }
    }

    goBack () {
        history.back();
    }

    render () {
        return (
            <div className="error-404">
                <div className="mars"></div>
                <img className="logo-404" src={logo404} />
                <p className="title">{this.state.title}</p>
                <p className="subtitle">
                    {this.state.subtitle}
                </p>
                <div className="center">
                    <a className="btn-back" href="#" onClick={this.goBack}>返回上一页</a>
                </div>
                <img className="astronaut" src={astronaut} />
                <img className="spaceship" src={spaceship} />
            </div>
        )
    }
}

export default Error404;
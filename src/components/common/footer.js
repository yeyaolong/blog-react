import React, { Component } from 'react';
require('../../../public/assets/css/global.less');

class Footer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            list: [
                {'name': '百度', 'url': 'http://www.baidu.com'},
                {'name': 'Github', 'url': 'https://github.com/'},
                {'name': 'Node.js', 'url': 'https://nodejs.org/en/'},
                {'name': 'React', 'url': 'https://react.docschina.org/'},
                {'name': 'Vue', 'url': 'https://cn.vuejs.org/v2/guide/login.html'},
                {'name': '开发指南', 'url': 'https://www.yuque.com/fe9/basic/iwtzab'}
            ]
        }
    }

    render () {
        let items = []
        for (let i = (this.state.list.length -1 ); i >=0; i--) {
            items.push(<span className="link" key={i}><a href={this.state.list[i].url} target="_blank">{this.state.list[i].name}</a></span>)
        }
        return (
          <div className="footer-container">
            <div className="link-container">
                {items}
            </div>
          </div>
        );
    }
}

export default Footer
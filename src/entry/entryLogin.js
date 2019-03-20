import React from 'react';
import ReactDom from 'react-dom';
import '../../public/assets/js/init';
import Login from '../components/Login/login';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import MockMachine from '../mock'

require('normalize.css');
require('../../public/assets/css/global.less');


console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
    /* 仅在开发环境中，使用mock */
    MockMachine.startMock();
}

let headerContainer = document.getElementById('header');
ReactDom.render(<Header />, headerContainer);

let contentContainer = document.getElementById('content');
ReactDom.render(<Login />, contentContainer);

let footContainer = document.getElementById('footer');
ReactDom.render(<Footer />, footContainer);
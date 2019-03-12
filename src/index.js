import React from 'react';
import ReactDom from 'react-dom';
import Init from './components/common/init';
import Login from './components/Login/login';
import Header from './components/common/header';
import Footer from './components/common/footer';
require('normalize.css');
require('../public/assets/css/global.less');

Init();

let headerContainer = document.getElementById('header');
ReactDom.render(<Header />, headerContainer);

let contentContainer = document.getElementById('content');
ReactDom.render(<Login />, contentContainer);

let footContainer = document.getElementById('footer');
ReactDom.render(<Footer />, footContainer);
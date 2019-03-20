import React from 'react';
import ReactDom from 'react-dom';

import Error404 from '../components/error/error404';

let container = document.getElementById("error-404");
ReactDom.render(<Error404 />, container);
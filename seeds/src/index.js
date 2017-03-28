import React from 'react';
import { Router, hashHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import './stylesheet/index.less';

render(
	<Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
);

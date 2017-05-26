import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import reducer from './reducers';
import routes from './routes';
import './stylesheets/reset.less';
// optional style for responsive mode
import './stylesheets/reset-resp.less';

const middleware = [ thunk ];

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
  document.getElementById('root')
);

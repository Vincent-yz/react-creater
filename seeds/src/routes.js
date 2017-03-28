import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Test from './component/Test';
import Api from './component/Api';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="test" component={Test}/>
		<Route path="Api" component={Api} />
	</Route>
)
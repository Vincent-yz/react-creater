import { combineReducers } from 'redux';

import todos from './todo';

const reducer = combineReducers({
	todos,
});

export default reducer;


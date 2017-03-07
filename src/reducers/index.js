import { combineReducers } from 'redux';
import matrix from './matrix';
import counter from './counter';

const Reducer = combineReducers({
	matrix,
	counter
});

export default Reducer;
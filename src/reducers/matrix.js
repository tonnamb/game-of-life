import * as types from '../actions/types';
import initializeMatrix from '../algorithms/initializeMatrix';
import propagateMatrix from '../algorithms/propagateMatrix';

let [ squareList, idRef ] = initializeMatrix();

const matrix = (state = squareList, action) => {
	switch (action.type) {
		case types.TOGGLE_CELL:
			let newState = JSON.parse(JSON.stringify(state));
			const newAlive = !state[action.cell].alive;
			newState[action.cell] = Object.assign({}, 
				state[action.cell], 
				{alive: newAlive});
			return newState;

		case types.PROPAGATE:
			const propagatedState = propagateMatrix(state, idRef);
			return propagatedState;

		default:
			return state;
	}
}

export default matrix;
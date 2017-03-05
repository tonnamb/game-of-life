import { TOGGLE_CELL } from '../actions/types';
import initializeMatrix from '../algorithms/initializeMatrix';

let squareList;
[ squareList ] = initializeMatrix();

const matrix = (state = squareList, action) => {
	switch (action.type) {
		case TOGGLE_CELL:
			let newState = [ ...state ];
			const newAlive = !state[action.cell].alive;
			newState[action.cell] = Object.assign({}, 
				state[action.cell], 
				{alive: newAlive});
			return newState;
		default:
			return state;
	}
}

export default matrix;
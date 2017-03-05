import { TOGGLE_CELL } from '../actions/types'

let idRef = new Array(70);
for (let i=0; i<70; i++) {
	idRef[i] = new Array(40);
}

let squareList = [];
let counter = 0;

for (let j=0; j<40; j++) {
	for (let i=0; i<70; i++) {
		squareList.push({
			id: counter, 
			x: i*10, 
			y: j*10, 
			alive: false,
			color: 'white'});
		idRef[i][j] = counter;
		counter += 1;
	}
}

const matrix = (state = squareList, action) => {
	switch (action.type) {
		case TOGGLE_CELL:
			let newState = [ ...state ];
			const newAlive = !state[action.cell].alive;
			newState[action.cell] = Object.assign({}, 
				state[action.cell], 
				{alive: newAlive, color: newAlive ? 'DeepSkyBlue' : 'white'});
			return newState;
		default:
			return state;
	}
}

export default matrix;
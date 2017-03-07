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

		case types.CLEAR_BOARD:
			return squareList;

		case types.RANDOMIZE:
			let randomState = JSON.parse(JSON.stringify(state));
			for ( let i=0; i<randomState.length; i++ ) { 
				randomState[i].alive = (Math.round(Math.random()) === 1);
			}
			return randomState;

		case types.CREATE_BLINKER:
			let blinkerState = JSON.parse(JSON.stringify(squareList));
			blinkerState[idRef[3][2]].alive = true;
			blinkerState[idRef[3][3]].alive = true;
			blinkerState[idRef[3][4]].alive = true;
			return blinkerState;

		case types.CREATE_PULSAR:
			let pulsar = JSON.parse(JSON.stringify(squareList));
			pulsar[idRef[5][3]].alive = true;
			pulsar[idRef[6][3]].alive = true;
			pulsar[idRef[7][3]].alive = true;
			pulsar[idRef[11][3]].alive = true;
			pulsar[idRef[12][3]].alive = true;
			pulsar[idRef[13][3]].alive = true;
			pulsar[idRef[3][5]].alive = true;
			pulsar[idRef[3][6]].alive = true;
			pulsar[idRef[3][7]].alive = true;
			pulsar[idRef[8][5]].alive = true;
			pulsar[idRef[8][6]].alive = true;
			pulsar[idRef[8][7]].alive = true;
			pulsar[idRef[10][5]].alive = true;
			pulsar[idRef[10][6]].alive = true;
			pulsar[idRef[10][7]].alive = true;
			pulsar[idRef[15][5]].alive = true;
			pulsar[idRef[15][6]].alive = true;
			pulsar[idRef[15][7]].alive = true;
			pulsar[idRef[5][8]].alive = true;
			pulsar[idRef[6][8]].alive = true;
			pulsar[idRef[7][8]].alive = true;
			pulsar[idRef[11][8]].alive = true;
			pulsar[idRef[12][8]].alive = true;
			pulsar[idRef[13][8]].alive = true;
			pulsar[idRef[5][10]].alive = true;
			pulsar[idRef[6][10]].alive = true;
			pulsar[idRef[7][10]].alive = true;
			pulsar[idRef[11][10]].alive = true;
			pulsar[idRef[12][10]].alive = true;
			pulsar[idRef[13][10]].alive = true;
			pulsar[idRef[3][11]].alive = true;
			pulsar[idRef[3][12]].alive = true;
			pulsar[idRef[3][13]].alive = true;
			pulsar[idRef[8][11]].alive = true;
			pulsar[idRef[8][12]].alive = true;
			pulsar[idRef[8][13]].alive = true;
			pulsar[idRef[10][11]].alive = true;
			pulsar[idRef[10][12]].alive = true;
			pulsar[idRef[10][13]].alive = true;
			pulsar[idRef[15][11]].alive = true;
			pulsar[idRef[15][12]].alive = true;
			pulsar[idRef[15][13]].alive = true;
			pulsar[idRef[5][15]].alive = true;
			pulsar[idRef[6][15]].alive = true;
			pulsar[idRef[7][15]].alive = true;
			pulsar[idRef[11][15]].alive = true;
			pulsar[idRef[12][15]].alive = true;
			pulsar[idRef[13][15]].alive = true;
			return pulsar;

		case types.CREATE_GLIDER:
			let glider = JSON.parse(JSON.stringify(squareList));
			glider[idRef[3][2]].alive = true;
			glider[idRef[4][3]].alive = true;
			glider[idRef[2][4]].alive = true;
			glider[idRef[3][4]].alive = true;
			glider[idRef[4][4]].alive = true;
			return glider;

		case types.CREATE_GOSPER:
			let gosper = JSON.parse(JSON.stringify(squareList));
			gosper[idRef[2][6]].alive = true;
			gosper[idRef[3][6]].alive = true;
			gosper[idRef[2][7]].alive = true;
			gosper[idRef[3][7]].alive = true;
			gosper[idRef[12][6]].alive = true;
			gosper[idRef[12][7]].alive = true;
			gosper[idRef[12][8]].alive = true;
			gosper[idRef[13][5]].alive = true;
			gosper[idRef[13][9]].alive = true;
			gosper[idRef[14][4]].alive = true;
			gosper[idRef[14][10]].alive = true;
			gosper[idRef[15][4]].alive = true;
			gosper[idRef[15][10]].alive = true;
			gosper[idRef[16][7]].alive = true;
			gosper[idRef[17][5]].alive = true;
			gosper[idRef[17][9]].alive = true;
			gosper[idRef[18][6]].alive = true;
			gosper[idRef[18][7]].alive = true;
			gosper[idRef[18][8]].alive = true;
			gosper[idRef[19][7]].alive = true;
			gosper[idRef[22][4]].alive = true;
			gosper[idRef[22][5]].alive = true;
			gosper[idRef[22][6]].alive = true;
			gosper[idRef[23][4]].alive = true;
			gosper[idRef[23][5]].alive = true;
			gosper[idRef[23][6]].alive = true;
			gosper[idRef[24][3]].alive = true;
			gosper[idRef[24][7]].alive = true;
			gosper[idRef[26][2]].alive = true;
			gosper[idRef[26][3]].alive = true;
			gosper[idRef[26][7]].alive = true;
			gosper[idRef[26][8]].alive = true;
			gosper[idRef[36][4]].alive = true;
			gosper[idRef[36][5]].alive = true;
			gosper[idRef[37][4]].alive = true;
			gosper[idRef[37][5]].alive = true;
			return gosper;

		default:
			return state;
	}
}

export default matrix;
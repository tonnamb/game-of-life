import matrix from './matrix';
import * as types from '../actions/types';
import initializeMatrix from '../algorithms/initializeMatrix';
import propagateMatrix from '../algorithms/propagateMatrix';

let squareList;
let idRef;

beforeEach(() => {

	[ squareList, idRef ] = initializeMatrix();

});

it('handles action with unknown type', () => {
	expect(matrix(undefined, {})).toEqual(squareList);
});

it('TOGGLE_CELL: from default state', () => {
	const targetCell = 0;
	const toggleAction = {
		type: types.TOGGLE_CELL,
		cell: targetCell
	};
	let expectedState = JSON.parse(JSON.stringify(squareList));
	expectedState[targetCell] = {id: 0, x: 0, y: 0, alive: true}
	expect(matrix(squareList, toggleAction)).toEqual(expectedState);
});

it('PROPAGATE: from blinker', () => {
	squareList[idRef[3][2]].alive = true;
	squareList[idRef[3][3]].alive = true;
	squareList[idRef[3][4]].alive = true;
	const expectedState = propagateMatrix(squareList, idRef);
	expect(matrix(squareList, { type: types.PROPAGATE })).toEqual(expectedState);
});

it('CLEAR_BOARD: from a 2x2 block', () => {
	let squareBlock = JSON.parse(JSON.stringify(squareList));
	squareBlock[idRef[2][2]].alive = true;
	squareBlock[idRef[2][3]].alive = true;
	squareBlock[idRef[3][2]].alive = true;
	squareBlock[idRef[3][3]].alive = true;
	expect(matrix(squareBlock, { type: types.CLEAR_BOARD })).toEqual(squareList);
	
});

it('RANDOMIZE', () => {
	expect(matrix(squareList, { type: types.RANDOMIZE })).not.toEqual(squareList);
});

it('CREATE_BLINKER', () => {
	let blinker = JSON.parse(JSON.stringify(squareList));
	blinker[idRef[3][2]].alive = true;
	blinker[idRef[3][3]].alive = true;
	blinker[idRef[3][4]].alive = true;
	expect(matrix(squareList, { type: types.CREATE_BLINKER })).toEqual(blinker);
});

it('CREATE_PULSAR', () => {
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
	expect(matrix(squareList, { type: types.CREATE_PULSAR })).toEqual(pulsar);
});

it('CREATE_GLIDER', () => {
	let glider = JSON.parse(JSON.stringify(squareList));
	glider[idRef[3][2]].alive = true;
	glider[idRef[4][3]].alive = true;
	glider[idRef[2][4]].alive = true;
	glider[idRef[3][4]].alive = true;
	glider[idRef[4][4]].alive = true;
	expect(matrix(squareList, { type: types.CREATE_GLIDER})).toEqual(glider);
});

it('CREATE_GOSPER', () => {
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
	expect(matrix(squareList, { type: types.CREATE_GOSPER})).toEqual(gosper);
});
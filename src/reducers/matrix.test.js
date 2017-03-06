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
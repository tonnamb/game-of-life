import matrix from './matrix';
import * as types from '../actions/types';
import initializeMatrix from '../algorithms/initializeMatrix';

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
	let expectedState = [ ...squareList ];
	expectedState[targetCell] = {id: 0, x: 0, y: 0, alive: true}
	expect(matrix(squareList, toggleAction)).toEqual(expectedState);
});
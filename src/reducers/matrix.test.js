import matrix from './matrix';
import * as types from '../actions/types';

let squareList;

beforeEach(() => {

	squareList = [];
	let counter = 0;
	
	for (let j=0; j<40; j++) {
		for (let i=0; i<70; i++) {
			squareList.push({
				id: counter, 
				x: i*10, 
				y: j*10, 
				alive: false,
				color: 'white'});
			counter += 1;
		}
	}

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
	expectedState[targetCell] = {id: 0, x: 0, y: 0, alive: true, color: 'DeepSkyBlue'}
	expect(matrix(squareList, toggleAction)).toEqual(expectedState);
});
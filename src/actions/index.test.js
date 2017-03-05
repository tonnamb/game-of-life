import * as actions from './index';
import * as types from './types';

it('create action to toggle cell', () => {
	const cell = 1;
	const expectedAction = {
		type: types.TOGGLE_CELL,
		cell
	};
	expect(actions.toggleCell(cell)).toEqual(expectedAction);
});
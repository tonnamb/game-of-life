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

it('create action to propagate game', () => {
	expect(actions.propagateGame()).toEqual({type: types.PROPAGATE});
});

it('create action to clear board', () => {
	expect(actions.clearBoard()).toEqual({type: types.CLEAR_BOARD});
});

it('create action to randomize board', () => {
	expect(actions.randomizeBoard()).toEqual({type: types.RANDOMIZE});
});

it('create action to create blinker', () => {
	expect(actions.createBlinker()).toEqual({type: types.CREATE_BLINKER});
});

it('create action to create Pulsar', () => {
	expect(actions.createPulsar()).toEqual({type: types.CREATE_PULSAR});
});

it('create action to create glider', () => {
	expect(actions.createGlider()).toEqual({type: types.CREATE_GLIDER});
});

it('create action to create Gosper glider gun', () => {
	expect(actions.createGosper()).toEqual({type: types.CREATE_GOSPER});
});
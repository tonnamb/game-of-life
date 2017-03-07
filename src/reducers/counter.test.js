import counter from './counter';
import * as types from '../actions/types';

it('handles action with unknown type', () => {
	expect(counter(undefined, {})).toEqual(0);
    expect(counter(2, { type: 'weird types'})).toEqual(2);
    expect(counter(4, { type: types.TOGGLE_CELL })).toEqual(4);
});

it('PROPAGATE: add 1 to counter each time', () => {
    expect(counter(0, { type: types.PROPAGATE })).toEqual(1);
    expect(counter(9, { type: types.PROPAGATE })).toEqual(10);
});

it('CLEAR_BOARD: reset counter to zero', () => {
    expect(counter(7, { type: types.CLEAR_BOARD })).toEqual(0);
});

it('RANDOMIZE: reset counter to zero', () => {
    expect(counter(11, { type: types.RANDOMIZE })).toEqual(0);
});

it('CREATE_BLINKER: reset counter to zero', () => {
    expect(counter(1, { type: types.CREATE_BLINKER })).toEqual(0);
});

it('CREATE_GLIDER: reset counter to zero', () => {
    expect(counter(3, { type: types.CREATE_GLIDER })).toEqual(0);
});

it('CREATE_GOSPER: reset counter to zero', () => {
    expect(counter(4, { type: types.CREATE_GOSPER })).toEqual(0);
});
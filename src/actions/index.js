import * as types from './types';

export function toggleCell(cell) {
	return {
		type: types.TOGGLE_CELL,
		cell
	};
}

export function propagateGame() {
	return {
		type: types.PROPAGATE
	}
}
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
	};
}

export function clearBoard() {
	return {
		type: types.CLEAR_BOARD
	};
}

export function randomizeBoard() {
	return {
		type: types.RANDOMIZE
	};
}

export function createBlinker() {
	return {
		type: types.CREATE_BLINKER
	};
}

export function createPulsar() {
	return {
		type: types.CREATE_PULSAR
	};
}

export function createGlider() {
	return {
		type: types.CREATE_GLIDER
	};
}

export function createGosper() {
	return {
		type: types.CREATE_GOSPER
	};
}
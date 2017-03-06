import propagateMatrix from './propagateMatrix';
import initializeMatrix from './initializeMatrix';
import countLiveNeigh from './countLiveNeigh';

let squareList;
let idRef;

beforeEach(() => {

	[ squareList, idRef ] = initializeMatrix();

});

it('returns squareList of the same length', () => {
	expect(propagateMatrix(squareList, idRef).length).toBe(2800);
});

it('kills single cell at [2, 2]', () => {
	squareList[idRef[2][2]].alive = true;
	const newSquareList = propagateMatrix(squareList, idRef);
	expect(newSquareList[idRef[0][1]].alive).toBe(false);
	expect(newSquareList[idRef[1][1]].alive).toBe(false);
	expect(newSquareList[idRef[2][1]].alive).toBe(false);
	expect(newSquareList[idRef[0][2]].alive).toBe(false);
	expect(newSquareList[idRef[1][2]].alive).toBe(false);
	expect(newSquareList[idRef[2][2]].alive).toBe(false);
	expect(newSquareList[idRef[0][3]].alive).toBe(false);
	expect(newSquareList[idRef[1][3]].alive).toBe(false);
	expect(newSquareList[idRef[2][3]].alive).toBe(false);
});

it('still life: block', () => {
	squareList[idRef[2][2]].alive = true;
	squareList[idRef[3][2]].alive = true;
	squareList[idRef[2][3]].alive = true;
	squareList[idRef[3][3]].alive = true;
	const newSquareList = propagateMatrix(squareList, idRef);
	expect(newSquareList[idRef[1][1]].alive).toBe(false);
	expect(newSquareList[idRef[2][1]].alive).toBe(false);
	expect(newSquareList[idRef[3][1]].alive).toBe(false);
	expect(newSquareList[idRef[4][1]].alive).toBe(false);
	expect(newSquareList[idRef[1][2]].alive).toBe(false);
	expect(newSquareList[idRef[2][2]].alive).toBe(true);
	expect(newSquareList[idRef[3][2]].alive).toBe(true);
	expect(newSquareList[idRef[4][2]].alive).toBe(false);
	expect(newSquareList[idRef[1][3]].alive).toBe(false);
	expect(newSquareList[idRef[2][3]].alive).toBe(true);
	expect(newSquareList[idRef[3][3]].alive).toBe(true);
	expect(newSquareList[idRef[4][3]].alive).toBe(false);
	expect(newSquareList[idRef[1][4]].alive).toBe(false);
	expect(newSquareList[idRef[2][4]].alive).toBe(false);
	expect(newSquareList[idRef[3][4]].alive).toBe(false);
	expect(newSquareList[idRef[4][4]].alive).toBe(false);
});

it('still life: beehive', () => {
	squareList[idRef[3][2]].alive = true;
	squareList[idRef[4][2]].alive = true;
	squareList[idRef[2][3]].alive = true;
	squareList[idRef[5][3]].alive = true;
	squareList[idRef[3][4]].alive = true;
	squareList[idRef[4][4]].alive = true;
	const newSquareList = propagateMatrix(squareList, idRef);
	expect(newSquareList[idRef[1][1]].alive).toBe(false);
	expect(newSquareList[idRef[2][1]].alive).toBe(false);
	expect(newSquareList[idRef[3][1]].alive).toBe(false);
	expect(newSquareList[idRef[4][1]].alive).toBe(false);
	expect(newSquareList[idRef[5][1]].alive).toBe(false);
	expect(newSquareList[idRef[6][1]].alive).toBe(false);
	expect(newSquareList[idRef[1][2]].alive).toBe(false);
	expect(newSquareList[idRef[2][2]].alive).toBe(false);
	expect(newSquareList[idRef[3][2]].alive).toBe(true);
	expect(newSquareList[idRef[4][2]].alive).toBe(true);
	expect(newSquareList[idRef[5][2]].alive).toBe(false);
	expect(newSquareList[idRef[6][2]].alive).toBe(false);
	expect(newSquareList[idRef[1][3]].alive).toBe(false);
	expect(newSquareList[idRef[2][3]].alive).toBe(true);
	expect(newSquareList[idRef[3][3]].alive).toBe(false);
	expect(newSquareList[idRef[4][3]].alive).toBe(false);
	expect(newSquareList[idRef[5][3]].alive).toBe(true);
	expect(newSquareList[idRef[6][3]].alive).toBe(false);
	expect(newSquareList[idRef[1][4]].alive).toBe(false);
	expect(newSquareList[idRef[2][4]].alive).toBe(false);
	expect(newSquareList[idRef[3][4]].alive).toBe(true);
	expect(newSquareList[idRef[4][4]].alive).toBe(true);
	expect(newSquareList[idRef[5][4]].alive).toBe(false);
	expect(newSquareList[idRef[6][4]].alive).toBe(false);
	expect(newSquareList[idRef[1][5]].alive).toBe(false);
	expect(newSquareList[idRef[2][5]].alive).toBe(false);
	expect(newSquareList[idRef[3][5]].alive).toBe(false);
	expect(newSquareList[idRef[4][5]].alive).toBe(false);
	expect(newSquareList[idRef[5][5]].alive).toBe(false);
	expect(newSquareList[idRef[6][5]].alive).toBe(false);
});

it('oscillator: blinker', () => {
	squareList[idRef[3][2]].alive = true;
	squareList[idRef[3][3]].alive = true;
	squareList[idRef[3][4]].alive = true;

	const newSquareList = propagateMatrix(squareList, idRef);

	expect(newSquareList[idRef[1][1]].alive).toBe(false);
	expect(newSquareList[idRef[2][1]].alive).toBe(false);
	expect(newSquareList[idRef[3][1]].alive).toBe(false);
	expect(newSquareList[idRef[4][1]].alive).toBe(false);
	expect(newSquareList[idRef[5][1]].alive).toBe(false);
	expect(newSquareList[idRef[1][2]].alive).toBe(false);
	expect(newSquareList[idRef[2][2]].alive).toBe(false);
	expect(newSquareList[idRef[3][2]].alive).toBe(false);
	expect(newSquareList[idRef[4][2]].alive).toBe(false);
	expect(newSquareList[idRef[5][2]].alive).toBe(false);
	expect(newSquareList[idRef[1][3]].alive).toBe(false);
	expect(newSquareList[idRef[2][3]].alive).toBe(true);
	expect(newSquareList[idRef[3][3]].alive).toBe(true);
	expect(newSquareList[idRef[4][3]].alive).toBe(true);
	expect(newSquareList[idRef[5][3]].alive).toBe(false);
	expect(newSquareList[idRef[1][4]].alive).toBe(false);
	expect(newSquareList[idRef[2][4]].alive).toBe(false);
	expect(newSquareList[idRef[3][4]].alive).toBe(false);
	expect(newSquareList[idRef[4][4]].alive).toBe(false);
	expect(newSquareList[idRef[5][4]].alive).toBe(false);
	expect(newSquareList[idRef[1][5]].alive).toBe(false);
	expect(newSquareList[idRef[2][5]].alive).toBe(false);
	expect(newSquareList[idRef[3][5]].alive).toBe(false);
	expect(newSquareList[idRef[4][5]].alive).toBe(false);
	expect(newSquareList[idRef[5][5]].alive).toBe(false);

	const new2SquareList = propagateMatrix(newSquareList, idRef);

	expect(new2SquareList[idRef[1][1]].alive).toBe(false);
	expect(new2SquareList[idRef[2][1]].alive).toBe(false);
	expect(new2SquareList[idRef[3][1]].alive).toBe(false);
	expect(new2SquareList[idRef[4][1]].alive).toBe(false);
	expect(new2SquareList[idRef[5][1]].alive).toBe(false);
	expect(new2SquareList[idRef[1][2]].alive).toBe(false);
	expect(new2SquareList[idRef[2][2]].alive).toBe(false);
	expect(new2SquareList[idRef[3][2]].alive).toBe(true);
	expect(new2SquareList[idRef[4][2]].alive).toBe(false);
	expect(new2SquareList[idRef[5][2]].alive).toBe(false);
	expect(new2SquareList[idRef[1][3]].alive).toBe(false);
	expect(new2SquareList[idRef[2][3]].alive).toBe(false);
	expect(new2SquareList[idRef[3][3]].alive).toBe(true);
	expect(new2SquareList[idRef[4][3]].alive).toBe(false);
	expect(new2SquareList[idRef[5][3]].alive).toBe(false);
	expect(new2SquareList[idRef[1][4]].alive).toBe(false);
	expect(new2SquareList[idRef[2][4]].alive).toBe(false);
	expect(new2SquareList[idRef[3][4]].alive).toBe(true);
	expect(new2SquareList[idRef[4][4]].alive).toBe(false);
	expect(new2SquareList[idRef[5][4]].alive).toBe(false);
	expect(new2SquareList[idRef[1][5]].alive).toBe(false);
	expect(new2SquareList[idRef[2][5]].alive).toBe(false);
	expect(new2SquareList[idRef[3][5]].alive).toBe(false);
	expect(new2SquareList[idRef[4][5]].alive).toBe(false);
	expect(new2SquareList[idRef[5][5]].alive).toBe(false);
});


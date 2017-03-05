import propagateMatrix from './propagateMatrix';
import initializeMatrix from './initializeMatrix';

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
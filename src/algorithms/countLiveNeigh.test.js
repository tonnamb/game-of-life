import countLiveNeigh from './countLiveNeigh';
import initializeMatrix from './initializeMatrix';

let squareList;
let idRef;

beforeEach(() => {

	[ squareList, idRef ] = initializeMatrix();

});

it('returns a number', () => {
	expect(typeof(countLiveNeigh(0, 0, squareList, idRef))).toBe(typeof(0));
});

it('correctly counts: single live cell at corner [0, 0]', () => {
	squareList[idRef[0][0]].alive = true;
	expect(countLiveNeigh(0, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 0, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(1, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(2, 2, squareList, idRef)).toBe(0);
});

it('correctly counts: single live cell at corner [69, 0]', () => {
	squareList[idRef[69][0]].alive = true;
	expect(countLiveNeigh(67, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 0, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(69, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(67, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(69, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(67, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(69, 2, squareList, idRef)).toBe(0);
});

it('correctly counts: single live cell at corner [0, 39]', () => {
	squareList[idRef[0][39]].alive = true;
	expect(countLiveNeigh(0, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(2, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 38, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(1, 38, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 38, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 39, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 39, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 39, squareList, idRef)).toBe(0);
});

it('correctly counts: single live cell at corner [69, 39]', () => {
	squareList[idRef[69][39]].alive = true;
	expect(countLiveNeigh(67, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(69, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(67, 38, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 38, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(69, 38, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(67, 39, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 39, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(69, 39, squareList, idRef)).toBe(0);
});

it('correctly counts: single live cell at [2, 2]', () => {
	squareList[idRef[2][2]].alive = true;
	expect(countLiveNeigh(1, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(2, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(3, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(3, 1, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(1, 2, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(3, 2, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(1, 3, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(2, 3, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(3, 3, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(1, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(2, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(3, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(4, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(4, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(4, 3, squareList, idRef)).toBe(0);
});

it('correctly counts: 2x2 block at corner [0, 0]', () => {
	squareList[idRef[0][0]].alive = true;
	squareList[idRef[1][0]].alive = true;
	squareList[idRef[0][1]].alive = true;
	squareList[idRef[1][1]].alive = true;
	expect(countLiveNeigh(0, 0, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(1, 0, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(2, 0, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(3, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 1, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(1, 1, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(2, 1, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(3, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 2, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(1, 2, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(2, 2, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(3, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(0, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(1, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(2, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(3, 3, squareList, idRef)).toBe(0);
});

it('correctly counts: 3x3 block at edge [30, 0]', () => {
	squareList[idRef[30][0]].alive = true;
	squareList[idRef[31][0]].alive = true;
	squareList[idRef[32][0]].alive = true;
	squareList[idRef[30][1]].alive = true;
	squareList[idRef[31][1]].alive = true;
	squareList[idRef[32][1]].alive = true;
	squareList[idRef[30][2]].alive = true;
	squareList[idRef[31][2]].alive = true;
	squareList[idRef[32][2]].alive = true;
	expect(countLiveNeigh(28, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(29, 0, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(30, 0, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(31, 0, squareList, idRef)).toBe(5);
	expect(countLiveNeigh(32, 0, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(33, 0, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(34, 0, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(28, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(29, 1, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(30, 1, squareList, idRef)).toBe(5);
	expect(countLiveNeigh(31, 1, squareList, idRef)).toBe(8);
	expect(countLiveNeigh(32, 1, squareList, idRef)).toBe(5);
	expect(countLiveNeigh(33, 1, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(34, 1, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(28, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(29, 2, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(30, 2, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(31, 2, squareList, idRef)).toBe(5);
	expect(countLiveNeigh(32, 2, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(33, 2, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(34, 2, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(28, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(29, 3, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(30, 3, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(31, 3, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(32, 3, squareList, idRef)).toBe(2);
	expect(countLiveNeigh(33, 3, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(34, 3, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(28, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(29, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(30, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(31, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(32, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(33, 4, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(34, 4, squareList, idRef)).toBe(0);
})

it('correctly counts: + block at corner [69, 39]', () => {
	squareList[idRef[68][37]].alive = true;
	squareList[idRef[67][38]].alive = true;
	squareList[idRef[68][38]].alive = true;
	squareList[idRef[69][38]].alive = true;
	squareList[idRef[68][39]].alive = true;
	expect(countLiveNeigh(65, 35, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(66, 35, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(67, 35, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(68, 35, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(69, 35, squareList, idRef)).toBe(0);

	expect(countLiveNeigh(65, 36, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(66, 36, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(67, 36, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(68, 36, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(69, 36, squareList, idRef)).toBe(1);

	expect(countLiveNeigh(65, 37, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(66, 37, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(67, 37, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(68, 37, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(69, 37, squareList, idRef)).toBe(3);

	expect(countLiveNeigh(65, 38, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(66, 38, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(67, 38, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(68, 38, squareList, idRef)).toBe(4);
	expect(countLiveNeigh(69, 38, squareList, idRef)).toBe(3);

	expect(countLiveNeigh(65, 39, squareList, idRef)).toBe(0);
	expect(countLiveNeigh(66, 39, squareList, idRef)).toBe(1);
	expect(countLiveNeigh(67, 39, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(68, 39, squareList, idRef)).toBe(3);
	expect(countLiveNeigh(69, 39, squareList, idRef)).toBe(3);
})

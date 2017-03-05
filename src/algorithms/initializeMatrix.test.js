import initializeMatrix from './initializeMatrix';

let squareList;
let idRef;

beforeEach(() => {

	[ squareList, idRef ] = initializeMatrix();

});

it('squareList: correct length', () => {
	expect(squareList.length).toBe(2800);
});

it('squareList: correct inside objects', () => {
	expect(squareList[0]).toEqual({
				id: 0, 
				x: 0, 
				y: 0, 
				alive: false});
	expect(squareList[1]).toEqual({
				id: 1, 
				x: 10, 
				y: 0, 
				alive: false});
	expect(squareList[71]).toEqual({
				id: 71, 
				x: 10, 
				y: 10, 
				alive: false});
	expect(squareList[72]).toEqual({
				id: 72, 
				x: 20, 
				y: 10, 
				alive: false});
	expect(squareList[141]).toEqual({
				id: 141, 
				x: 10, 
				y: 20, 
				alive: false});
});

it('idRef: correct length', () => {
	expect(idRef.length).toBe(70);
	expect(idRef[0].length).toBe(40);
});

it('idRef: correct value', () => {
	expect(idRef[0][0]).toBe(0);
	expect(idRef[1][0]).toBe(1);
	expect(idRef[2][0]).toBe(2);
	expect(idRef[0][1]).toBe(70);
	expect(idRef[1][1]).toBe(71);
	expect(idRef[1][5]).toBe(351);
})


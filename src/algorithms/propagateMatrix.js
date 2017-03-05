import countLiveNeigh from './countLiveNeigh';

const propagateMatrix = (squareList, idRef) => {
	let newList = [ ... squareList ];
	const dimX = idRef.length;
	const dimY = idRef[0].length;
	let count;

	for (let i=0; i<dimX; i++) {
		for (let j=0; j<dimY; j++) {
			count = countLiveNeigh(i, j, squareList, idRef);
			if (squareList[idRef[i][j]].alive) {
				if (count < 2 || count > 3) {
					newList[idRef[i][j]].alive = false;
				}
			} else {
				if (count === 3) {
					newList[idRef[i][j]].alive = true;
				}
			}
		}
	}

	return newList;
}

export default propagateMatrix;
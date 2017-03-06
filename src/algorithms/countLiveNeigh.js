const loopCount = (x, y, limX_1, limX_2, limY_1, limY_2, squareList, idRef) => {
	let count = 0;

	for (let i=limX_1; i<=limX_2; i++) {
		for (let j=limY_1; j<=limY_2; j++) {
			if (i === 0 && j === 0) continue;
			if (squareList[idRef[x+i][y+j]].alive) count += 1;
		}
	}

	return count;
}

const countLiveNeigh = (x, y, squareList, idRef) => {
	const dimX = idRef.length;
	const dimY = idRef[0].length;
	let num_neigh = 10;

	if ((x > 0 && x < dimX-1) && (y > 0 && y < dimY-1)) {
		num_neigh = loopCount(x, y, -1, 1, -1, 1, squareList, idRef);
	} else if (x === 0 && y === 0) {
		num_neigh = loopCount(x, y, 0, 1, 0, 1, squareList, idRef);
	} else if (x === 0 && y === dimY-1) {
		num_neigh = loopCount(x, y, 0, 1, -1, 0, squareList, idRef);
	} else if (x === dimX-1 && y === 0) {
		num_neigh = loopCount(x, y, -1, 0, 0, 1, squareList, idRef);
	} else if (x === dimX-1 && y === dimY-1) {
		num_neigh = loopCount(x, y, -1, 0, -1, 0, squareList, idRef);
	} else if (x === 0) {
		num_neigh = loopCount(x, y, 0, 1, -1, 1, squareList, idRef);
	} else if (y === 0) {
		num_neigh = loopCount(x, y, -1, 1, 0, 1, squareList, idRef);
	} else if (x === dimX-1) {
		num_neigh = loopCount(x, y, -1, 0, -1, 1, squareList, idRef);
	} else if (y === dimY-1) {
		num_neigh = loopCount(x, y, -1, 1, -1, 0, squareList, idRef);
	}

	return num_neigh;
}

export default countLiveNeigh;
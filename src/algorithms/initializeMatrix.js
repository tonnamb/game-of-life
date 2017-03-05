const initializeMatrix = () => {

	const xDim = 70;
	const yDim = 40;
	let idRef = new Array(xDim);
	for (let i=0; i<xDim; i++) {
		idRef[i] = new Array(yDim);
	}

	let squareList = [];
	let counter = 0;
	
	for (let j=0; j<yDim; j++) {
		for (let i=0; i<xDim; i++) {
			squareList.push({
				id: counter, 
				x: i*10, 
				y: j*10, 
				alive: false});
			idRef[i][j] = counter;
			counter += 1;
		}
	}

	return [ squareList, idRef ];
}

export default initializeMatrix;
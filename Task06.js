function maximum(...numbers) {
	let maxNo = numbers[0];

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > maxNo) maxNo = numbers[i];
	}

	return(maxNo);
}

maximum(15, 7, 10);

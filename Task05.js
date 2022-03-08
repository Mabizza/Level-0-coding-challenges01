function triangleCalc(a, b, c) {
	let side = (a + b + c) / 2;
	let triangle = side * (side - a) * (side - b) * (side - c);
	return Math.sqrt(triangle);
}

let area = triangleCalc(4, 7, 9);
console.log(area.toFixed(2));

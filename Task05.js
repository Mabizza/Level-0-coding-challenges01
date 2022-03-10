function triangleCalc(a, b, c) {
	const side = (a + b + c) / 2;
	const triangle = side * (side - a) * (side - b) * (side - c);
	return Math.sqrt(triangle);
}

let area = triangleCalc(4, 7, 8);
console.log(area.toFixed(2));

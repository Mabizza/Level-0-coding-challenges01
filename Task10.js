function intersect(a, b) {
	let setA = new Set(a);
	let setB = new Set(b);
	let intersection = new Set([...setA].filter((x) => setB.has(x)));
	let common = Array.from(intersection);
	console.log("Common letters: " + common.join());
}

intersect("house", "computers");

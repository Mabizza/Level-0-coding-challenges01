function printVowels(str) {
	let vowel = "aeiou";

	str.toLowerCase();
	let res = str.match(/[aeiou]/gi);

	res = [...new Set(res)];

	if (res.length != 0) {
		//arr.join(", "));
		console.log(res.join(", "));
	}
}

printVowels("umuzi");
printVowels("This is a long sentence");

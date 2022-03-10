function format(fmtStr) {
	const args = Array.prototype.slice.call(arguments, 1);
	return fmtStr.replace(/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

function number2Time(num) {
	const hours = Math.round(num / 60);
	const minutes = Math.round(num % 60);
	let minText = "minute";
	let hrText = "hour";

	if (hours >= 2) hrText = "hours";
	if (minutes >= 2) minText = "minutes";

	const str = format("{0} {1}, {2} {3}", hours, hrText, minutes, minText);
	console.log(str);
}
number2Time(133);

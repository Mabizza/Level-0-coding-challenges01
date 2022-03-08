function format(fmtstr) {
	let args = Array.prototype.slice.call(arguments, 1);
	return fmtstr.replace(/\{(\d+)\}/g, function (match, index) {
		return args[index];
	});
}

//---------------------------------------------
function number2Time(num) {
	let hours = Math.round(num / 60);
	let minutes = Math.round(num % 60);
	let min_text = "minute";
	let hr_text = "hour";

	if (hours >= 2) hr_text = "hours";
	if (minutes >= 2) min_text = "minutes";

	let str = format("{0} {1}, {2} {3}", hours, hr_text, minutes, min_text);
	console.log(str);
}
//---------------------------------------------
number2Time(133);

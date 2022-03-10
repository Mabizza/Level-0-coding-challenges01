function convertCelsiusToFahrenheit(degree) {
	const result = Math.round((9 * degree) / 5 + 32);
	return(result);
}

//---------------------------------------------
function convertFahrenheitToCelsius(degree) {
	const result = Math.round(((degree - 32) * 5) / 9);
	return(result);
}

convertCelsiusToFahrenheit(0);
convertFahrenheitToCelsius(32);

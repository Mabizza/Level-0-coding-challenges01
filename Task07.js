function convertCelsiusToFahrenheit(degree)
{
    let result = Math.round(((9 * degree) / 5 + 32));
    console.log(result);
}

//---------------------------------------------
function convertFahrenheitToCelsius(degree)
{
    let result = Math.round((degree - 32) * 5 / 9);
    console.log(result);
}
//---------------------------------------------
ConvertCelsiusToFahrenheit(0);
ConvertFahrenheitToCelsius(32);

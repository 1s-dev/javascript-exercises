const convertToCelsius = function (temp) {
  let rawCelsius = (temp - 32) * (5 / 9);
  let roundedCelsius = parseFloat(rawCelsius.toFixed(1));
  return roundedCelsius;
};

const convertToFahrenheit = function (temp) {
  let rawFahrenheit = (temp * 9) / 5 + 32;
  let roundedFahrenheit = parseFloat(rawFahrenheit.toFixed(1));
  return roundedFahrenheit;
};

/*
Celsius = (Fahrenheit - 32) * (5 / 9)
function convertToCelsius (temp) {
  let rawCelsius = (temp - 32) * (5 / 9);
  let roundedCelsius = parseFloat(rawCelsius.toFixed(1))
  return roundedCelsius
}

Fahrenheit = (Celsius * 2) + 30
function convertToFahrenheit (temp) {
  let rawFahrenheit = (temp * 2) + 30;
  let roundedFahrenheit = parseFloat(rawFahrenheit.toFixed(1))
  return roundedFahrenheit
}
*/

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

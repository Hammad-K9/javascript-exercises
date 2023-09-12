const convertToCelsius = function(temp) {
  let res = (temp - 32) * (5/9);
  //We want whole numbers to be displayed as int and not float
  return Math.round(res*10) / 10;
};

const convertToFahrenheit = function(temp) {
  let res = temp * (9/5) + 32;
  return Math.round(res*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((num, sum) => num + sum, 0);
};

const multiply = function(arr) {
  return arr.reduce((num, sum) => num * sum, 1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num === 0 || num === 1)
    return 1;
  let res = 1;
  for (let i = 2; i <= num; i++) 
    res *= i;
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

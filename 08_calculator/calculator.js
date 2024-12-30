const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number, 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number == 0)
    return 1;

  return number * factorial(number - 1);
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

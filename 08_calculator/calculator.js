const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  // let total = 0;
  // arr.forEach(num => total += num);
  // return total;
  return arr.reduce((num1, num2) => num1 + num2, 0);
};

const multiply = function (arr) {
  return arr.reduce((num1, num2) => num1 * num2, 1);
};

const power = function (base, exp) {
  let result = base;
  for (let i = 1; i < exp; i++) {
    result *= base;
  }
  return result;
};

const factorial = function (n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(sum([1, 3, 5, 7, 9]));

const nums = [0, 1, 2, 5, 10];
nums.forEach(n => console.log(factorial(n)));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

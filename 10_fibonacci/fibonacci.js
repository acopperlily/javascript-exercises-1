const fibonacci = function (n) {
  if (n < 0) return 'OOPS';
  if (n < 3) return 1;
  return (fibonacci(n - 2) + fibonacci(n - 1));
};

const nums = [1, 2, 3, 4, 6, 10, 15, 25, -25, '1', '2'];

nums.forEach(num => console.log(fibonacci(num)));

// Do not edit below this line
module.exports = fibonacci;

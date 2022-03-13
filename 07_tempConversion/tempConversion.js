const ftoc = function (fahr) {
  return +((fahr - 32) * 5 / 9).toFixed(1);
};

const ctof = function (cels) {
  return +(cels * 9 / 5 + 32).toFixed(1);
};

console.log(ftoc(32), ctof(0));
console.log(ftoc(100), ctof(73.2));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

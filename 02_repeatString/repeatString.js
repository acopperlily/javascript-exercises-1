const repeatString = function (text, num) {
  let result = '';
  if (num < 0) return 'ERROR';
  for (let i = 0; i < num; i++) result += text;
  return result;
};

// console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;

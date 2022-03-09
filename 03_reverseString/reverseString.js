// const reverseString = function (text) {
//   let result = '';
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i];
//   }
//   return result;
// };

const reverseString = function (text) {
  return text.split('').reverse().join('');
}

console.log(reverseString('hello'));

// Do not edit below this line
module.exports = reverseString;

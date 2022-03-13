const palindromes = function (text) {
  // let newText = '';
  // let backward = '';
  // text = text.toLowerCase();
  // for (let i = 0; i < text.length; i++) {
  //   if (text[i] >= 'a' && text[i] <= 'z') {
  //     newText += text[i];
  //   }
  // }
  // for (let i = newText.length - 1; i >= 0; i--) {
  //   backward += newText[i];
  // }
  // return newText == backward;
  let modString = text.toLowerCase().split('');
  let compare = modString.filter(letter => letter >= 'a' && letter <= 'z');
  return compare.join('') == compare.reverse().join('');
};

const strings = [
  'racecar',
  'racecar!',
  'Racecar!',
  'A car, a man, a maraca.',
  'Animal loots foliated detail of stool lamina.',
  'ZZZZ car, a man, a maracaz.',
  'no FUCKING way'
];

strings.forEach(item => console.log(palindromes(item)));

// Do not edit below this line
module.exports = palindromes;

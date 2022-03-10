// const removeFromArray = function (arr, ...args) {
//     args.forEach(arg => {
//         if (arr.includes(arg)) {
//             let x = arr.indexOf(arg);
//             arr.splice(x, 1);
//         };
//     });
//     return arr;
// };

const removeFromArray = function (arr, ...args) {
    return arr.filter(item => !args.includes(item));
}

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 2, 3));
console.log(removeFromArray([1, 2, 3, 4], 7, 'tacos'));
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));
console.log(removeFromArray(['hey', 2, 3, 'ho'], 'hey', 3));

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function (x, y) {
    if (x < 0 || y < 0 || typeof (x) != 'number' || typeof (y) != 'number') return 'ERROR';

    let result = 0;
    let start = Math.min(x, y);
    let stop = Math.max(x, y);

    for (let i = start; i <= stop; i++) {
        result += i;
    }

    return result;
};

console.log(sumAll(1, 4));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(10, '90'));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;

const leapYears = function (year) {
    // if (year % 400 == 0) return true;
    // if (year % 4 == 0 && year % 100 != 0) return true;
    // return false;

    return !(year % 400) || (!(year % 4) && !!(year % 100));
};

const years = [2000, 1985, 1600, 1800, 1900];
years.forEach(year => console.log(leapYears(year)));

// Do not edit below this line
module.exports = leapYears;

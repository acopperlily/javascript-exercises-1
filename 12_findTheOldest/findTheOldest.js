const findTheOldest = function (people) {
  let age = 0;
  let name;
  people.forEach(years => {
    if (!years.yearOfDeath) {
      let death = new Date();
      years.yearOfDeath = death.getFullYear();
    }
    let current = years.yearOfDeath - years.yearOfBirth;
    if (current > age) {
      age = current;
      name = years;
    }
  });
  return name;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const living = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
console.log(findTheOldest(living));

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function (people) {
  let age = "";
  const array = [];
  for (let i = 0; i < people.length; i++) {
    if (typeof people[i].yearOfDeath == "undefined") {
      const currentYear = new Date().getFullYear();
      age = currentYear - people[i].yearOfBirth;
      const obj = { name: people[i].name, age: age };
      array.push(obj);
    } else {
      age = people[i].yearOfDeath - people[i].yearOfBirth;
      const obj = { name: people[i].name, age: age };
      array.push(obj);
    }
  }

  array.sort(function (a, b) {
    return b.age - a.age;
  });
  return array[0];
};

/*
let age = "";
const array = [];
for (let i = 0; i < arrayObj.length; i++) {
  age = yearOfDeath - yearOfBirth;
  const obj = {name: arrayObj[i], age: age}
  array.push(obj);
}
array.sort(function(a, b){return b.age - a.age});
return array[0].name;

*/

// Do not edit below this line
module.exports = findTheOldest;

const removeFromArray = function (array, ...args) {
  let index = "";
  let finalArray = "";
  console.log(...args);
  console.log(args.length);
  console.log(array.indexOf(args[0]));
  for (let i = 0; i < args.length; i++) {
    index = array.indexOf(args[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

/*
const removeFromArray = function (array, input) {
  const index = array.indexOf(input);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};
*/

// Do not edit below this line
module.exports = removeFromArray;

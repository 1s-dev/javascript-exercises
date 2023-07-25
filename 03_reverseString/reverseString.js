const reverseString = function (input) {
  let splittedString = input.split("");
  let reversedString = splittedString.reverse();
  console.log(reversedString);
  let combinedString = reversedString.join("");
  return combinedString;
};

// Do not edit below this line
module.exports = reverseString;

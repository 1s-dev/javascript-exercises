const fibonacci = function (position) {
  let total = "";
  let array = [];
  Number(position);
  if (position < 0) {
    return "OOPS";
  } else if (position == 0) {
    return 0;
  } else {
    for (let i = 1; i <= position; i++) {
      if (i < 3) {
        array.push(1);
      } else {
        let firstNumber = array[i - 3];
        let secondNumber = array[i - 2];
        array.push(firstNumber + secondNumber);
      }
    }
    total = array[position - 1];
    return total;
  }
};

/*
A series of numbers in which each number ( Fibonacci number ) is the sum of the 
two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

let total = "";
let array = [];
for (let i = 0; i < position; i++) {
  if (i < 2) {
    array.push(1)
  } else {
    firstNumber = array[i - 2];
    secondNUmber = array[i - 1];
    array.push(firstNumber + secondNumber);
  }
 return array; 
}
total = array[position] + array[position + 1]
return total;


*/

// Do not edit below this line
module.exports = fibonacci;

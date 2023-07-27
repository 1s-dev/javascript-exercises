const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arraySum) {
  let total = 0;
  for (let i = 0; i <= arraySum.length - 1; i++) {
    total += arraySum[i];
  }
  return total;
};

const multiply = function (arrayMultiply) {
  let total = 1;
  if (arrayMultiply.length < 1) {
    total = 0;
    return total;
  } else {
    for (let i = 0; i <= arrayMultiply.length - 1; i++) {
      total *= arrayMultiply[i];
    }
    return total;
  }
};

const power = function (num, raisedPower) {
  return Math.pow(num, raisedPower);
};

const factorial = function (num) {
  let total = 1;
  if (num < 1) {
    return total;
  } else {
    for (let i = 1; i <= num; i++) {
      total *= i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

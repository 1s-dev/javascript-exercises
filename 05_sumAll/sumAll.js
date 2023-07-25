const sumAll = function (arg1, arg2) {
  let sum = 0;
  if (typeof arg1 == "number" && typeof arg2 == "number") {
    if (arg1 >= 0 && arg2 >= 0) {
      if (arg1 < arg2) {
        for (let i = arg1; i <= arg2; i++) {
          sum += i;
        }
        return sum;
      } else if (arg1 > arg2) {
        for (let i = arg2; i <= arg1; i++) {
          sum += i;
        }
        return sum;
      }
    } else {
      return "ERROR";
    }
  } else {
    return "ERROR";
  }
};

// given 1,4 -> returns the sum of 1 + 2 + 3 + 4 which is 10

/*
initial = 1
end = 4
sum = 0
if (typeof initial != "number" || typeof end != "number") {
  if (initial < end) {
    for (i = initial; i < end; i++) {
    sum += i;
    }
  } else if (initial > end) {
    for (i = end; i < initial; i++) {
    sum += i;
    }
  }
} else {
  return "ERROR"
}




*/

// Do not edit below this line
module.exports = sumAll;

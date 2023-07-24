const repeatString = function (string, number) {
  let msg = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    msg += string;
  }
  return msg;
};

// Do not edit below this line
module.exports = repeatString;

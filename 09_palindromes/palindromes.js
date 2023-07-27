const palindromes = function (string) {
  let normalizedString = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let position = "";
  if (normalizedString.length % 2 != 0) {
    position = (normalizedString.length + 1) / 2;
    let latterPart = normalizedString.substring(position); //Extract string after the middle position.
    let reversedLatterPart = latterPart.split("").reverse().join("");
    let firstPart = normalizedString.substring(0, position - 1);
    if (firstPart === reversedLatterPart) {
      return true;
    } else return false;
  } else if (normalizedString.length % 2 == 0) {
    position = normalizedString.length / 2;
    let latterPart = normalizedString.substring(position); //Extract string after the middle position.
    let reversedLatterPart = latterPart.split("").reverse().join("");
    let firstPart = normalizedString.substring(0, position);
    if (firstPart === reversedLatterPart) {
      return true;
    } else return false;
  } else {
    return false;
  }
};

/*
Check that string.length is an odd number
if (string.length % 2 != 0) {
  position = (string.length + 1) / 2
  length = 2;
  latterPart = string.substring(position + 1) //Extract string after the middle position.
  reverseLatterPart = latterPart.split.("")reverse().join()
  firstPart = string.substring(0, position)
  if (firstPart === latterPart) {
  return true;
  } else {
    return false;
  }
} else {
  return false;
}
*/

// Do not edit below this line
module.exports = palindromes;

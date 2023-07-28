const getTheTitles = function (arrayObj) {
  array = [];
  for (let i = 0; i < arrayObj.length; i++) {
    array.push(arrayObj[i].title);
  }
  return array;
};

// Do not edit below this line
module.exports = getTheTitles;

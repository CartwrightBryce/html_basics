//module-in-use page
var array = function (arr) {
  return "there are" + arr.length + "elements in this array";
};

var sum = function (a, b) {
  return a * b;
};

var pi = 3.14;

module.exports = {
  array: array,
  sum: sum,
  pi: pi,
};

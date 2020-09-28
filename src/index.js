exports.min = function min(array = [0]) {
  let min = 0;
  for (let val of array) {
    if (val < min) min = val;
  }
  return min;
};

exports.max = function max(array = [0]) {
  let max = 0;
  for (let val of array) {
    if (val > max) max = val;
  }
  return max;
};

exports.avg = function avg(array = [0]) {
  return array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
};

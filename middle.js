
const assertArraysEqual = require('./assertArraysEqual') 

// ACTUAL FUNCTION
const middle = function(array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 1) {
    return array.slice(1, -1);
  }

  return [array[length / 2 - 1], array[length / 2]];
};

module.exports = middle;


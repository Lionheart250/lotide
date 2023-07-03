const eqArrays = require('./eqArrays');

// Function to assert equality of two arrays and log a message
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Arrays are equal
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Arrays are not equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Arrays are equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]); // Arrays are not equal


module.exports = assertArraysEqual;

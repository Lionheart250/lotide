const eqArrays = require('./eqArrays');

// Function to assert equality of two arrays and log a message
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}



module.exports = assertArraysEqual;

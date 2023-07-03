
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};

// ACTUAL FUNCTION
const middle = function(array) {
  const length = array.length;
  const middleIndex = Math.floor(length / 2);

  if (length <= 2) {
    return [];
  }

  if (length % 2 === 1) {
    return [array[middleIndex]];
  }

  return [array[middleIndex - 1], array[middleIndex]];
}

// TEST CODE
assertArraysEqual(middle([1]), []); // Expected output: []
assertArraysEqual(middle([1, 2]), []); // Expected output: []
assertArraysEqual(middle([1, 2, 3]), [2]); // Expected output: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected output: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected output: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected output: [3, 4]
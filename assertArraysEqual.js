// Function to compare arrays for equality
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Function to assert equality of two arrays and log a message
function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
}

// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Arrays are equal
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Arrays are not equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Arrays are equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]); // Arrays are not equal

const assertArraysEqual = require('../assertArraysEqual');







// Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Arrays are equal
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Arrays are not equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Arrays are equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "d"]); // Arrays are not equal

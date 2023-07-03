const assertArraysEqual = require("../assertArraysEqual");

const middle = require('../middle');







assertArraysEqual(middle([1]), []); // Expected output: []
assertArraysEqual(middle([1, 2]), []); // Expected output: []
assertArraysEqual(middle([1, 2, 3]), [2]); // Expected output: [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected output: [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected output: [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected output: [3, 4]
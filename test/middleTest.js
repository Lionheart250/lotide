//const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', () => {
  it('should return all elements except for the first and last element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = middle(arr);
    const expected = [2, 3, 4];
    assert.deepEqual(result, expected);
  });
});





//assertArraysEqual(middle([1]), []); // Expected output: []
//assertArraysEqual(middle([1, 2]), []); // Expected output: []
//assertArraysEqual(middle([1, 2, 3]), [2]); // Expected output: [2]
//assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Expected output: [3]
//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Expected output: [2, 3]
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Expected output: [3, 4]
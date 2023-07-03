

//test code
//assertEqual(result.length, 5); // ensure we get back five elements
//assertEqual(result[0], "to");
//assertEqual(result[1], "costco");
//assertEqual(result[2], "I");
//assertEqual(result[3], "love");
//assertEqual(result[4], "you");

//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', () => {
  it('should return all elements except for the first element of an array', () => {
    const words = ["welcome", "to", "costco", "I", "love", "you"];
    const result = tail(words);
    assert.deepEqual(result, ["to", "costco", "I", "love", "you"]);
  });

  it('returns "to", "costco", "I", "love", "you" for ["welcome", "to", "costco", "I", "love", "you"]', () => {
    assert.deepEqual(tail(["welcome", "to", "costco", "I", "love", "you"]), ["to", "costco", "I", "love", "you"]);
  });

  // Add more test cases as needed
});



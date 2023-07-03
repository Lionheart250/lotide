const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["welcome", "to", "costco", "I", "love", "you"];
const result = tail(words);



//test code
assertEqual(result.length, 5); // ensure we get back five elements
assertEqual(result[0], "to");
assertEqual(result[1], "costco");
assertEqual(result[2], "I");
assertEqual(result[3], "love");
assertEqual(result[4], "you");
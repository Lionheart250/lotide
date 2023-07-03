const assertEqual = require('../assertEqual');


// Test cases
assertEqual(69, 69); // Assertion Passed: 69 === 69
assertEqual("Welcome to costo.... I love you", "goodbye world"); // Assertion failed: Welcome to costo.... I  love you !== goodbye world
assertEqual(1, 2); // Assertion Failed: 1 !== 2
assertEqual("xyz", "123"); // Assertion Failed: xyz !== 123
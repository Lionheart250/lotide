const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(arr1)} === ${inspect(arr2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(arr1)} !== ${inspect(arr2)}`);
  }
};

const numbers = [1, 2, 3, 4, 5];
const squares = map(numbers, num => num * num);
assertArraysEqual(squares, [1, 4, 9, 16, 25]);


const words = ["apple", "banana", "cherry", "date", "elderberry"];
const lengths = map(words, word => word.length);
assertArraysEqual(lengths, [5, 6, 6, 4, 10]);


const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const names = map(people, person => person.name);
assertArraysEqual(names, ["Alice", "Bob", "Charlie"]);

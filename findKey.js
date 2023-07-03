const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const galaxies = {
  "Andromeda": { stars: 1 },
  "Pinwheel":   { stars: 3 },
  "Whirlpool":      { stars: 2 },
  "Sombrero":   { stars: 3 },
  "MilkyWay":       { stars: 2 },
  "Cigar":  { stars: 3 }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}

const result = findKey(galaxies, x => x.stars === 2);
console.log(result);
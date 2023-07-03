const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
};
const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') { // Ignore spaces
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};
console.log(countLetters('LHL')); // Output: { 'L': 2, 'H': 1 }
console.log(countLetters('blub blub blub')); // Output: { 'H': 1, 'e': 1, 'l': 3, 'o': 2, 'W': 1, 'r': 1, 'd': 1 }
console.log(countLetters('What a cool test of counting')); // Output: { 'O': 1, 'p': 1, 'e': 2, 'n': 1, 'A': 1, 'I': 1, 'i': 1, 's': 2, 'a': 1, 'w': 1, 'm': 1 }

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(assertion passed);
  } else {
    console.log(assertion failed);
  }
};

assertEqual('Lighthouse labs', 'Bootcamp');
assertEqual(1, 1);
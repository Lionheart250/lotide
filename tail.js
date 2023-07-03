const assertEqual = require('./assertEqual');
function tail(array) {
  return array.slice(1);
};

console.log(tail);


module.exports = tail;
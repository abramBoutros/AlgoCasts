// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
function reverse(str) {
  return str.split("").reduce((reversed, char) => char + reversed , "");
}


module.exports = reverse;

// alternatives
// one

// function reverse(str) {
//   return str.split("").reverse().join("")
// }

// two 

// function reverse(str) {
//   return str.split("").reduce((reversed, char) => char + reversed , "");
// }
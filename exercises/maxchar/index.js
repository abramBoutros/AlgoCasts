// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  let arr = str.split("");

  arr.forEach(char => { 
    map[char] = map[char] + 1 || 1 
  });

  return Object
        .entries(map)
        .sort(({ 1: a }, { 1: b }) => b - a)[0][0]

}
console.log(maxChar("apple 1231111"));
module.exports = maxChar;

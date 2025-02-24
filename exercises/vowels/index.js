// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let map = {
    "a":1,
    "e":1,
    "i":1,
    "o":1,
    "u":1
  };
  let count = 0;
  for(let char of str){
    if(map[char.toLowerCase()]) count++;
  }

  return count;
}

module.exports = vowels;

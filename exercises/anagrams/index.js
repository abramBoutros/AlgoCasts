// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const isLetter =(char) => char.toLowerCase() !== char.toUpperCase()

function anagrams(s1, s2) {
  let hashmap = {};

  for(c of s1){
    if(isLetter(c)){
      if(!hashmap[c]) hashmap[c] = 1;
      else hashmap[c] += 1;
    }
  }

  for(c of s2){
    if(isLetter(c)){
      if(!hashmap[c]) return false;
      hashmap[c]--;
      if(hashmap[c] < 0) return false;
    }
  }
  if(Math.min(...Object.values(hashmap)) < 0 || Math.max(...Object.values(hashmap)) > 0 ) return false;
  return true;
}

anagrams('RAIL! SAFETY', 'fairy tales');
module.exports = anagrams;

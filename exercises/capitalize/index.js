// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const isLetter = (c) => c.toLowerCase() !== c.toUpperCase();

function capitalize(str) {
  let newStr = "";

  if(isLetter(str[0])){newStr += str[0].toUpperCase()}
  for(let i = 1; i < str.length; i++){
    if(!isLetter(str[i-1])) newStr += str[i].toUpperCase();
    else newStr += str[i];
  }

  return newStr;
}
capitalize('a short sentence')
module.exports = capitalize;




// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

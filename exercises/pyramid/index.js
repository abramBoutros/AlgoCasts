// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

   let res= "#";
  console.log( (" ".repeat(n-1) ) + res + (" ".repeat(n-1) ) );
   for(let i = 2; i <= n; i++){
    res += "##";
    console.log( (" ".repeat(Math.trunc(n-i))) + res + (" ".repeat(Math.trunc(n-i))));
  }

}

pyramid(3)


module.exports = pyramid;

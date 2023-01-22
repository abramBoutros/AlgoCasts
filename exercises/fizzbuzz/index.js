// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
      let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
        if(parseInt(arr[i - 1]) % 3 === 0  &&  parseInt(arr[i - 1]) % 5 === 0  ) arr[i - 1] = "fizzbuzz"
        else if(parseInt(arr[i - 1]) % 3 === 0 ) arr[i - 1] = "fizz"
        else if(parseInt(arr[i - 1]) % 5 === 0 ) arr[i - 1] = "buzz"
    }

    arr.forEach(char => console.log(char))
    return arr;
}

module.exports = fizzBuzz;

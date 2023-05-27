/*
/ lastIndexOf is a function that returns the last index of a number, if that number never occured in the array then it will return -1
*/

const lastIndexOf = function (array, item) {
  let lastIndex = -1; 

  // iterate over every item in the array given
  for (let i = 0; i < array.length; i++){

    // check if the value we are looking for has occured and if it has, record the index in a variable called lastIndex
    if (array[i] === item) {
      lastIndex = i; 
    } 
  }

  // returns the variable lastIndex
  return lastIndex; 
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
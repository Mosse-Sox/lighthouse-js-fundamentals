/*
/ range is a function that returns and array of numbers that are in a range that a user sets using start, end and step
*/
const range = function (start, end, step) {
  let rangeArray = [];

  //if start is larger then end, returns an empty array
  if (start > end) {
    return rangeArray; 
  // else if step is negative, returns and empty array  
  } else if (step < 0 ){
    return rangeArray;
  // loops through numbers from start to end and pushes all values that step stops at onto an array  
  } else {
    for (let i = start; i <= end; i += step){
      rangeArray.push(i);
    }
  }
  // returns the array
  return rangeArray; 
}

console.log(range(110, 10, 2));
//this function returns the final location of a parade float at the end of the parade by tracking the coordinates during the parade.
const finalPosition = function (moves) {
  //empty array to store final position after all moves are complete
  const finalLocation = [];
  //x and y locations, parade starts at 0,0 
  let x = 0;
  let y = 0;

  //loop through all moves the parade makes and records their position 
  for (const move in moves) {
    if(moves[move] === "west"){
      x--; 
    } else if (moves[move] === "east"){
      x++; 
    } else if (moves[move] === "north") {
      y++;
    } else if (moves[move] === "south") {
      y--; 
    }
  }

  //final x and y positions are added to the array and the array is returned 
  finalLocation.push(x);
  finalLocation.push(y);
  return finalLocation; 
}

//test array and checked in the console. 
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

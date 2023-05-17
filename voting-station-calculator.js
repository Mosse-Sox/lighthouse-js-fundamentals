//chooseStations is a function that returns the names of valid voting stations - capactiy is 20 or more, and is a school or community centre
const chooseStations = function (stations) {

  //empty array to push valid names of venues into
  const possibleStations = [];

  //loop through each item in the given array 
  for (const station of stations) {
    //checks if the station has a capacity of 20 or more and is a school or a community centre and pushes it onto our array
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
      possibleStations.push(station[0]);
    }
  }
  //returns the valid venues
  return possibleStations;
}

//test array
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
//call function to check if its returning the correct values
console.log(chooseStations(stations));
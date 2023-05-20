//ageCalculator is a function that returns the age of a person based on the year they were born and the current year
const ageCalculator = function (name, yearOfBirth, currentYear) {

  //age calculated using the current year minus the year they were born
  const age = currentYear - yearOfBirth;

  //returns the a string like "Suzie is 32 years old."
  return name + " is " + age + " years old.";
}

//test
console.log(ageCalculator("Suzie", 1983, 2015));
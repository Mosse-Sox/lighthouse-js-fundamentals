const whichSchool = function(age) {
  
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age < 19) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log(whichSchool(19));
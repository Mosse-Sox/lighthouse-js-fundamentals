const isCitizen = true;
const age = 26; 
const temperature = 55;
const raining = false;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn\'t such a good idea...");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}


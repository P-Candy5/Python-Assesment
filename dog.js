let human = 5;
let dog = 4;
let years = human * dog;
let age = 10.5 + years;

if (human == 2) {
  console.log("It's equivalent to 10.5 dog years");
} else if (human > 2) {
  console.log("Its equivalent to " + age + " dog years");
} else if (human < 2) {
  console.log("It's equivalent to " + years + " dog years");
} else if (human < 0) {
  console.log("INVALID AGE");
} else {
  console.log("NOT A NUMBER");
}

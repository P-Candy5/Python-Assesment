let feet = 1;

let inch = feet * 12;
let yards = feet * 0.33;
let miles = feet * 0.000189;

if (feet > 0) {
  console.log(
    "Distance in inches = " +
      inch +
      " inches. Distance in yards = " +
      yards +
      " yards. Distance in miles = " +
      miles
  );
} else {
  console.log("Input error");
}

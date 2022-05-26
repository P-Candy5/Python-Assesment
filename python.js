// let feet = 0;
let Height = 10;
let yourFeet = Height * 30.48;
let yourInch = Height * 2.54;

if (Height > 0) {
  console.log(
    Height +
      "ft is equivalent to " +
      yourFeet +
      "centimeters. And " +
      Height +
      "inch is equivalent to " +
      yourInch +
      "centimeters"
  );
} else {
  console.log("invalid input");
}

// Given an array of integers, calculate the ratios of its elements
// that are positive, negative, and zero.Print the decimal value
// of each fraction on a new line with  places after the decimal.

let arr = [-4, 3, -9, 0, 4, 1];

let positive = 0;
let negative = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
  if (0 < arr[i]) {
    positive++;
  } else if (0 > arr[i]) {
    negative++;
  } else {
    zero++;
  }
}
console.log(zero / arr.length);

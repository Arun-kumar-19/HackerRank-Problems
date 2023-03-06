let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
// 15 is expectd output
// return the absolute diagonal difference

// let n = 0;
// let m = 0;
// let x = arr.length;
// for (let i = 0; i < x; i++) {
//   n += arr[i][i];
//   for (let j = 2 - i; j <= 2 - i; j++) {
//     m += arr[i][j];
//   }
// }
// console.log(Math.abs(n - m));

// if (n < m) {
//   console.log(m - n);
// } else {
//   console.log(n - m);
// }
// let output = m - n;
// console.log(output);

let n = 0;
let m = 0;
for (let i = 0; i < arr.length; i++) {
  n += arr[i][i];
  m += arr[i][arr.length - i - 1];
}
console.log(Math.abs(n - m));

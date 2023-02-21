let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

let n = 0;
let m = 0;
for (let i = 0; i < arr.length; i++) {
  n += arr[i][i];
  for (let j = 2 - i; j <= 2 - i; j++) {
    m += arr[i][j];
  }
}

if (n < m) {
  console.log(m - n);
} else {
  console.log(n - m);
}
// let output = m - n;
// console.log(output);

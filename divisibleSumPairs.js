// determine the number of (i,j)pairs where i<j and a[i]+a[j] is divisible by k.

let k = 3;

let n = 6;
let ar = [1, 3, 2, 6, 1, 2];

let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if ((ar[i] + ar[j]) % k === 0) {
      count++;
    }
  }
}
console.log(count);

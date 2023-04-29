// Check whether, 1, 2 and 4 are divisors of 124.
// All 3 numbers divide evenly into 124 so return 3 .

let n = 1012;
let m = n.toString();

let count = 0;

for (let i = 0; i < m.length; i++) {
  if (n % m[i] === 0) {
    count++;
  }
}
console.log(count);

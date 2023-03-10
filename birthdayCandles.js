// Count how many candles are tallest.

let candles = [3, 2, 1, 3];

let n = candles.length;
let max = candles[0];
for (let i = 1; i < n; i++) {
  if (max <= candles[i]) {
    max = candles[i];
  }
}
let count = 0;
for (let j = 0; j < n; j++) {
  if (max === candles[j]) {
    count++;
  }
}
console.log(count);

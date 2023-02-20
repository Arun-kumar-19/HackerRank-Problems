let a = [1, 2, 3];
let b = [3, 2, 1];

let max_a = 0;
let max_b = 0;

for (let i = 0; i < a.length; i++) {
  if (a[i] > b[i]) {
    max_a++;
  } else if (a[i] < b[i]) {
    max_b++;
  }
}
console.log(max_a, max_b);

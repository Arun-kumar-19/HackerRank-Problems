// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.

let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let count = 0;

for (let j = 1; j < ar.length; j++) {
  if (ar[0] === ar[j]) {
    count++;
    ar.splice(0, 1);
    ar.splice(j, 1);
  }
}

console.log(count);

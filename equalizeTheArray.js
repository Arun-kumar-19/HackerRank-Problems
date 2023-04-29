let arr = [3, 3, 2, 1, 5, 6, 3];

let count = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      arr.splice(j, 1);
      count++;
    }
  }
}
console.log(count);

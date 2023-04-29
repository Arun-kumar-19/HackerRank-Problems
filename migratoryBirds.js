let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];

let type1 = 0;
let type2 = 0;
let type3 = 0;
let type4 = 0;
let type5 = 0;

for (let i = 0; i < arr.length; i++) {
  if (1 === arr[i]) {
    type1++;
  }
  if (2 === arr[i]) {
    type2++;
  }
  if (3 === arr[i]) {
    type3++;
  }
  if (4 === arr[i]) {
    type4++;
  }
  if (5 === arr[i]) {
    type5++;
  }
}
let array = [type1, type2, type3, type4, type5];
console.log(array.indexOf(Math.max(...array)) + 1);

// Given five positive integers,
// find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers

let arr = [1, 2, 3, 4, 5];
let miniMax = [];
for (let i = 0; i < arr.length; i++) {
  let add = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      add += arr[j];
    }
  }
  miniMax.push(add);
}
console.log(miniMax);

let max = miniMax[0];
for (let i = 1; i < miniMax.length; i++) {
  if (max < miniMax[i]) {
    max = miniMax[i];
  }
}
console.log(max);

let min = miniMax[0];
for (let i = 1; i < miniMax.length; i++) {
  if (min > miniMax[i]) {
    min = miniMax[i];
  }
}
console.log(min);

//  another way of solving
// let miniMax = [];
// for (let i = 0; i < arr.length; i++) {
//     let y=arr[i]
//   let add = 0;
//   for (let j = 0; j < arr.length; j++) {
// add+=arr[j]
//   }
//   let sum=add-y
//   miniMax.push(sum);
// }

// let max = miniMax[0];
// let min= miniMax[0];
// for (let i = 1; i < miniMax.length; i++) {
//   if (max < miniMax[i]) {
//     max = miniMax[i];
//   }else if(min > miniMax[i]){
//        min = miniMax[i];
//   }

// }
// console.log(min,max);

// Staircase detail
// This is a staircase of size :
//     #
//    ##
//   ###
//  ####
// #####
//######
let n = 6;
let str = "";
for (let i = 0; i < n; i++) {
  str += "#";
  let space = "";
  for (let j = n - 1 - i; j >= 1; j--) {
    space += " ";
  }
  console.log(space + str);
}

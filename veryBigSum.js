// didn't understand the question
let n = 8;
let str = "";
for (let i = 1; i <= n; i++) {
  str += i + " ";
  let space = "";
  for (let j = i; j <= n; j++) {
    space += " ";
  }
  console.log(space + str);
}

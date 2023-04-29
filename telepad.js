// Given a digit string, return all possible letter combinations
//  that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is
// given below.

const map = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

const input = "63";
console.log(Math.floor(input));
// let num = parseInt(input);

let ar = [];
for (let i = 0; i < map[input[0]].length; i++) {
  for (let j = 0; j < map[input[1]].length; j++) {
    let output = map[input[0]][i];
    let out = (output += map[input[1]][j]);
    ar.push(out);
  }
}
console.log(ar);

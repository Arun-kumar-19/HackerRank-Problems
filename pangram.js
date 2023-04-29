function pangram(str) {
  let lowercase = str.toLowerCase();
  let alphabets = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabets.length; i++) {
    if (lowercase.includes(alphabets[i]) === false) {
      return "not pangram";
    }
  }
  return "pangram";
}
let a = "abcd efgh ijkl mnop qrstu vwxyz";
console.log(pangram(a));

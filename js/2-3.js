function findLongestWord(str) {
  let longestWord = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'




правильно


const = findLongestWord = function(string) {
  let inputString=string.split(``);
  let longestWord=inputString{0};
  for (let i=1; i<inputString.length; i++) {
    if (inputString[i].length > longestWord.length) тут еще строка
  }
}
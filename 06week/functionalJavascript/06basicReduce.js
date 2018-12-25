// Basic: Reduce
function countWords(inputWords) {
  // SOLUTION GOES HERE
  return inputWords.reduce((allWords, word) => {
    word in allWords ? allWords[word]++ : (allWords[word] = 1);
    return allWords;
  }, {});
}

module.exports = countWords;

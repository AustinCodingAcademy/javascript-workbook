var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']


function countWords(inputWords) {
  return inputWords.reduce(function (wordCount, currentValue) {
    if (!wordCount[currentValue]) {
      wordCount[currentValue] = 1; // increment or initialize to 1
    } else {
      wordCount[currentValue] = wordCount[currentValue] + 1;
    }
    return wordCount;
  }, {}); //second argument to reduce initialises countMap to {}
}

module.exports = countWords

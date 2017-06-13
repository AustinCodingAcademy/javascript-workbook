function countWords(inputWords) {
      // SOLUTION GOES HERE
return inputWords.reduce(function(allWords, word){
// if (word in allWords){
// 	allWords[word]++;
// }
// else {
// 	allWords[word] = 1;
// }
// return allWords;
allWords[word] = ++allWords[word] || 1;
return allWords
}, {})


    }

    module.exports = countWords
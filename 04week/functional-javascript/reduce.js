function countWords(inputWords) {
     // SOLUTION GOES HERE

  return inputWords.reduce(function(curr, next){
    curr[next] = ++curr[next] || 1;
    return curr;
  }, {})

}

module.exports = countWords

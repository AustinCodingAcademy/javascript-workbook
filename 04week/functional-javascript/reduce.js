function countWords(inputWords) {
     // SOLUTION GOES HERE
     var result = {};
     inputWords.reduce(function(prev, current, idx, arr) {
       if (!result[current]) {
         result[current] = 1;
      } else {
        result[current]++;
      }
       return current;
     }, null);
     return result;
   }

   module.exports = countWords

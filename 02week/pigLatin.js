// check to make sure word is not a number
// scrub word by using toLowerCase() method and trim() method

// make an array out of variable word with split() and use a for loop to run through wordArr to find first instant of a vowel
// if first letter of word is a vowel, return word + 'yay'
// if first letter of word is a consonant, slice and assign to a variable.  add
// that variable to the end + 'ay'


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  // let newWord = '';
  const vowels = ['a','e','i','o','u'];
  let result;
  // remove spaces and converts to lower case
  word = word.toLowerCase().trim();
    // split word into array containing letters
  const wordArray = word.split('');
  console.log(wordArray);
  // loop through vowels
  // use includes**
  for (let w = 0; w < wordArray.length; w++) {
    console.log(wordArray[w]);
    if (!isNaN(wordArray[w])) return 'Invalid input, letters only'
    for (let v = 0; v < vowels.length; v++) {
      if (wordArray[0] === vowels[v]) {
        result = word + 'yay';
      } else if (vowels[v] === wordArray[w]) {
        console.log(w+' is the where the vowel is');
        if (!result) {
          const removed = word.slice(0, w);
          console.log(removed);
          word = word.slice(w);
          console.log(word);
          result = word + removed + 'ay';
        }
      }
    }
  }
  return result;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

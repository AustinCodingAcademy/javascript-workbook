//CODE PLAN//
//write a function strIsValid() to scrub code
  //trim spaces using trim()
  //make case consistent using toLowerCase()

//write a function chkForVowelStart()
  //use conditional to evaluate if input string starts with a,e,i,o,u
  //if truthy return original string concatinating 'yay' to the end

//write a function startsWithConsonant()
  //create variables to hold sliced string from input
    //assign strStartSlice to index 0 of slice to hold value
    //assign strEndSlice to slice from index 1(inclusive) to the end of the string (word.length)
  //return concat of strStartSlice, strEndSlice and 'ay'


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here

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

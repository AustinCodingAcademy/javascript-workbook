'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  // define what vowels are
  
  formattedWord = word.trim();
  formattedWord = word.toLowerCase();
  // const vowelArray = ["a","e","i","o","u"]

  const findVowel = word => {
    




  }

}


// class notes:
// 1. lowercase everything
// 2. is first letter vowel? (split letters into an array --> then do arr[0] to see if it's a vowel --> includes is function to check??)
// 3. move first letter to end (use shift or push to get to end)
// split(0)
// push(split(0))
// 4. add "ay" to string using concat/push/
// 5. shift until we find vowel

// while loop...
// while(arr[0]!=)


// if first letter a consonant, add "ay"... if first letter a vowel, add "hay"


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

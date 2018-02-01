'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  //create an array of vowels (a,e,i,o,u)
  //constanant letter goes to the end
  //add "ay" to the end.if the word begins with a vowel add "way"

  //function simply ask to translate Pig Latin.  String will store the series of words
  function translatePigLatin (str) {
    const vowels = ['a','e','i','o','u'];
    const result = str.split('');

    if (vowels.includes(str.charAt(0))) {
      return str += 'way';
    }
  }

  console.log (translatePigLatin("apple"));

  //If the word begins with a vowel will return true with the addition of way at the end.

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

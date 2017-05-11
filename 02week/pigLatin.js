'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  word = prompt('Enter a word to be Pig Latined!');
  // Create variables used to hold latinized word and identify vowels
  let pigLatined = '';
  let vowel = /["a", "e", "i", "o", "u", "y"]/gi;

  // Check if the first character is a vowel
  if (word[0].match(vowel)) {
    pigLatined = word + 'yay';

  } else {

    // Find how many consonants before the first vowel.
    let vowelIndex = word.indexOf(word.match(vowel)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatined = word.substr(vowelIndex) + word.substr(0, vowelIndex) + 'ay';
  }

  return pigLatined;
}

// test here
pigLatin();


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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

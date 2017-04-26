'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
// Your test code here
  word = prompt('Enter a word to be Pig Latined!');
  // Variables to be used
  var pigLatined = '';
  var vowel = /[aeiouy]/gi;
  // Checking if the first character is a vowel
  if (word[0].match(vowel)) {
    pigLatined = word + 'yay';

  } else {
    // Finding how many consonants occur before the first vowel
    var vowelIndice = word.indexOf(word.match(vowel)[0]);
    // Take the string from the first vowel to the last character
    // then add the consonants that were previously omitted and add the ending.
    pigLatined = word.substr(vowelIndice) + word.substr(0, vowelIndice) + 'ay';
  }
  return pigLatined;
}
pigLatin();

// function getPrompt() {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

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

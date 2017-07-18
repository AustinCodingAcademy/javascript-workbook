'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin (word) {
  // List out vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  // Set word to lowercase and trim off any extra input
  word = word.toLowerCase().trim();

  // Break word up into an array
  var result = word.split('');

  // Test first index of array for a vowel
  if (vowels.includes(word.charAt(0))) {
    return word + 'yay';
  } else {
    for (var i = 0; i < word.length; i++) {
      // Test first letter for consonant
      if (!vowels.includes(word[i])) {
      // if consonant shift out letters and push to end of array.  Works from inside out
        result.push(result.shift());
      } else {
        // If consonant found push 'ay' and join result
        result.push('ay');
        return result.join('');
      }
    }
  }
}

function getPrompt () {
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

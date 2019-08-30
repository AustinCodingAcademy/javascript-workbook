'use strict';

const assert = require('assert');
const readline = require('readline');
const vowels = ["a", "e", "i", "o", "u"];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
  @param word Input word
*/
function pigLatin(word) {
  word = word.toLowerCase().trim();
  // should attach 'yay' if the word begins with vowel
  if (vowels.indexOf(word.charAt(0)) !== -1) {
    return `${word}yay`;
  } else {
    while (vowels.indexOf(word.charAt(0)) === -1) {
      word = word.substring(1) + word.charAt(0);
    }
  }
  return word + "ay";
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

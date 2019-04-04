'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  word = word.trim();
  word = word.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let l = 0; l < word.length; l++) {
    if (vowels.includes(word[l])) {
      if ( l === 0) {
        console.log(word + 'yay');
        return word + 'yay';
      }
      console.log(word.slice(l, word.length) + word.slice(0, l) + 'ay');
      return word.slice(l, word.length) + word.slice(0, l) + 'ay';
    }
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    const callTheFunction = pigLatin(answer);
    console.log("Function call: ", callTheFunction);
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

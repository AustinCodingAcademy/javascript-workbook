'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin (word) {
  word = word.trim().toLowerCase();
  var x = word[0];
  var y = null;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var matches = [];

  if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    return word + 'yay';
  } else {
    for (var i = 0; i < vowels.length; i++) {
      if (word.indexOf(vowels[i]) > -1) {
        matches.push(word.indexOf(vowels[i]));
        matches.sort();
        y = matches[0];
      }
    }
    return word.slice(y) + word.slice(0, y) + 'ay';
  }
  return;
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

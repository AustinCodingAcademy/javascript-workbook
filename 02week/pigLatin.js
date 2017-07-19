'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  // Your code here
  //if vowel add yay at the end of the word; apple add appleyay
  //if not a vowel slice letters until the vowel, then add ay; skirt = irtskay
  word = word.toLowerCase();
  word = word.trim();

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var wordPreFix;

  for (var i = 0; i < word.length; i++) {
    //character of the word at position i
    if (vowels.indexOf(word.charAt(i)) > -1) {
      wordPreFix = word.slice(0, i);
      word = word.slice(i);
      break;
    }
  }

  if (wordPreFix.length > 0) {
    return word + wordPreFix + 'ay';
  }
  return word + 'yay';
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

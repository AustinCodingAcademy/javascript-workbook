'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
  var word = input.toLowerCase();
  var vowels = "aeiouAEIOU";
  let lowestVowel = word.length();
  function pigLatin(input) {
    for (i = 0; i < lowestVowel; i++) {
        if (word.contains(""+vowels.charAt(i))) {
            var prefix = input.substring(0, i);
            var suffix = input.substring(i);
            var answer = prefix + suffix + 'ay';
            console.log(answer);
          } else {break;
        }
      /*  else (word.charAt(0) === 'a' || word.charAt(0) === 'e' || word.charAt(0) === 'i' || word.charAt(0) === 'o'
      || word.charAt(0) === 'u')  {
          console.log(word + 'yay') ;
        }*/
    }
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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

};

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Create a function that adds the first consonant to the end
// of the string plus 'ay'.  If vowel is at the begining of the
// string, add 'yay' to the end of the string.
function pigLatin(word) {
  // Your code here
  let firstPosition = findVowel(word);

  if(firstPosition > 0) {
    return word.slice(firstPosition).toLowerCase().trim() +
    word.slice(0, firstPosition).toLowerCase().trim() + 'ay';
  }
  return word.toLowerCase().trim() + 'yay';
}

const findVowel = (word) => {
  for(let i = 0; i < word.length; i++) {
    if("aeiou".indexOf(word[i]) !== -1)  {
      return i;
    }
  }
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

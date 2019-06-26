'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  word = word.toLowerCase();
  word = word.trim();
  if (!vowels.includes(word[0])) {
    if (vowels.includes(word[1])) {
      removedLetter = word.slice(0,1);
      console.log(word.substr(1)+`${removedLetter}`+'ay');
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
      removedLetters = word.slice(0,2);
      console.log(word.substr(2)+`${removedLetters}`+'ay');
      } 
    } else if (vowels.includes(word[0])) {
      console.log(`${word}`+'yay');
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

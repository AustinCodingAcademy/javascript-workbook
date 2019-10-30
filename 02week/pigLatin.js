'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
const vowels = ['a','e','i','o','u','y'];
const end = 'ay';
  // Your code here

  //  eg ex 
  // if (word[0] === 'a'|| 'e' || 'i' || 'o' || 'u') {
  //   return word + 'yay';
  // }
  // Most basic case where the word starts with a vowel
  // Just return the word with 'yay' on the end
  if (vowels.includes(firstLetter)) {
    return word + 'yay';
  }

  // create variables with possible endings

  // test each letter until you find a vowel

  // remove everything before the vowel and store

  // put the removed letters at the end of the word

  // add ay

  // if word begins with a vowel, add 'yay' to the end
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

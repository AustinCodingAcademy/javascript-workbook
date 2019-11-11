'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  // trim and make everything lowercase
  word = word.toLowerCase().trim();
  // define vowels with an array
const vowels = ['a','e','i','o','u','y'];
  // define first letter to determine vowel position
const firstLetter = word[0];
  // define a variable for loop to find vowels
let vowelPos = 0;
  // if a word befins with vowel, add 'yay'
  if (vowels.includes(firstLetter)) {
    return word + 'yay';
  } else {
    // if not, find the first vowel and move consonants to the end
    for (let char of word) {
      if (vowels.includes(char)) {
        vowelPos = word.indexOf(char);
        break;
      }
    }
    // return the correct word in pig latin
    return word.slice(vowelPos) + word.slice(0, vowelPos) + 'ay';
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

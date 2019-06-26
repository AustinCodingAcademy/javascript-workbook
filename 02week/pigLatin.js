'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // Turns the string to lower case and trims
  word = word.toLowerCase();
  word = word.trim();

  // First 'if' checks to if the first character in the string is NOT in the array vowels
  // Then checks if the seconds charachter in a string IS in the array of vowels.
  if (!vowels.includes(word[0])) {
    if (vowels.includes(word[1])) {
      let removedLetter = word.slice(0,1); // Removes the first letter of the string

      return(word.substr(1)+`${removedLetter}`+'ay'); // Returns the string minues the first letter, then adds the removed letter to the end followed by 'ay'.

      // Checks if the first and second characters ARE NOT in the array vowels.
    } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
      let removedLetters = word.slice(0,2); // Removes the first two letters of the word
      return(word.substr(2)+`${removedLetters}`+'ay'); // Returns the word minus the first 2 letters, then adds the removed letters to the end followed by 'ay'.
      } 
      // Checks if the first letter IS in the array of vowels
    } else if (vowels.includes(word[0])) {
      return(`${word}`+'yay'); // Returns the whole string and adds 'yay' to the end.
      //test
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

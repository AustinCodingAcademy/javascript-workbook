'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelIndex;
  let newWord;
  word = word.trim().toLowerCase();

  let firstLetter = word[0];

  //Check if the word begins with a vowel.
  //If so, make that word

  if(vowels.includes(firstLetter)) {
    newWord = word + 'yay';
  } else {

    // find the first vowel 
    for(let i = 0 ; i < word.length ; i++ ) {
    // For each letter from the beginning, if this letter is a vowel return the index of the first vowel
      if(vowels.includes(word[i])){
        vowelIndex = i;
        break;
      // If word = chocolate, i = 2, letters to delete equals 2;
      }
    }
  }

  //target the consonants before the first vowel:
  let firstConsonants = word.slice(0, vowelIndex);
  //target the end of the word after first consnants:
  let endOfWord = word.slice((word.length*(-1) + vowelIndex));

  newWord = endOfWord + firstConsonants + 'ay';
  

  return newWord;
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

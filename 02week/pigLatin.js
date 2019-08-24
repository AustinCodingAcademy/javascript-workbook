'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  var word = word.toLowerCase().trim();

  // Holds index of the first vowel, found with the findVowel function
  var firstVowelIndex = findVowel(word);

  if (firstVowelIndex > 0){

    /* Returns word minus first consonant(s) and returns at end of word with 'ay', or returns word with 'way' */
    return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
  } else {
    return word + 'way';
  }
}

function findVowel(word) {
  /* Finds first vowel in the word and assigns its index to i, which is then held in the findVowel function */
  for(var i=0; i<word.length; i++){

    /* if any character in 'aeiou' is found in the word, and its index is not -1, its index will be held and assigned to i */
    if('aeiou'.indexOf(word[i]) !== -1){
      return i;
    }
  }
}
pigLatin('');

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

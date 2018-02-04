'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin() {
  return
}

  // Your code here

  const pigLatinGame = (str) => {

    //looking for the first vowel occurring vowel
    const firstVowel = str.match(/[aeiou]/);

    //using the indexOf() method of the string searching within the firstVowel
    const firstVowelPosition = str.indexOf(firstVowel);

    //console.log(firstVowelPosition)

    //if the first position is greater than the index 0; if it doesnt start with a vowel,
    //return using the str.slice() method to chance when there is a vowel and add'ay'
    if(firstVowelPosition > 0) {
      return str.slice(firstVowelPosition) + str.slice(0, firstVowelPosition) + 'ay';
    }
    // if the word does not start with a vowel add 'way'
    return str + 'way';
  }



  pigLatinGame('consonant');


function getPrompt() {
  rl.question('orange ', (answer) => {
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

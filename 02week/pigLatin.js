'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  word = word.trim().toLowerCase();

  word=word.toLowerCase();

    // for words that start with a vowel:
    if (["a", "e", "i", "o", "u"].indexOf(word[0]) > -1) {
        return word=word+"yay";
    }

    // for words that start with one or more consonants
   else {
   //check for multiple consonants
       for (var i = 0; i<word.length; i++){
           if (["a", "e", "i", "o", "u"].indexOf(word[i]) > -1){
               var firstcons = word.slice(0, i);
               var middle = word.slice(i, word.length);
               word = middle+firstcons+"ay";
               break;}
            }
    return word;}
  

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

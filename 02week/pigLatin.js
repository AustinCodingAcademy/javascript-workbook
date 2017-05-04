//I'm going to keep working on this, but I'm submitting this now so it won't be late.

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var pigLatin = '';
  var lowerCase = pigLatin.toLowerCase();
  var startVowel = /[aeiou]/gi;
  var startConst = /[bcdfghjklmnpqrstvwxyz]/gi;
  var vowelIndice = str.indexOf(str.match(startVowel)[0]);

//This figures out if word starts with a vowel.
if (str[0].match(startVowel)) {
 return(lowerCase + 'way');
 //figures out if word stars with consonant.
 } else (str[0].match(startConst)){
   return(string.substring(1,25));
   return(string.substring(1,string.length)+string.charAt(0));
   pigLatin = string.substring(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

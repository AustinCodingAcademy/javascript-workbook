'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var pigLatin =''.toLowerCase();
  // var lowerCase = pigLatin.toLowerCase();   I reckon this ain't necessary?
  var startVowel = /[aeiou]/gi;
//This figures out if word starts with a vowel.
  if (str[0].match(startVowel)) {
   pigLatin = str + 'way';

 } else {

   // Find how many consonants before the first vowel.
   var vowelIndice = str.indexOf(str.match(startVowel)[0]);

   // Take the string from the first vowel to the last char
   // then add the consonants that were previously omitted and add the ending.
   pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
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

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

translatePigLatin("car");
translatePigLatin("dog");
translatePigLatin("create");
translatePigLatin("valley");
translatePigLatin("egg");
translatePigLatin("emission");
translatePigLatin("HeLlO");
translatePigLatin("RoCkEt");

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
      assert.equal(translatePigLatin('car'), 'arcay');
      assert.equal(translatePigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(translatePigLatin('create'), 'eatecray');
      assert.equal(translatePigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(translatePigLatin('egg'), 'eggyay');
      assert.equal(translatePigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', () => {
      assert.equal(translatePigLatin('HeLlO'), 'ellohay');
      assert.equal(translatePigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

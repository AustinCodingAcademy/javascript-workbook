'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
word = word.toLowerCase();
var firstVowel = -1;


if ( ( word.indexOf('a') > -1 && word.indexOf('a') < firstVowel ) || firstVowel === -1 ) {
  firstVowel = word.indexOf('a');
}
         
if ( ( word.indexOf('e') > -1 && word.indexOf('e') < firstVowel ) || firstVowel === -1 ) {
    firstVowel = word.indexOf('e');
}
if ( ( word.indexOf('i') > -1 && word.indexOf('i') < firstVowel ) || firstVowel === -1 ) {
    firstVowel = word.indexOf('i');
}
if ( ( word.indexOf('o') > -1 && word.indexOf('o') < firstVowel ) || firstVowel === -1 ) {
    firstVowel = word.indexOf('o');
}
if ( ( word.indexOf('u') > -1 && word.indexOf('u') < firstVowel ) || firstVowel === -1 ) {
    firstVowel = word.indexOf('u');
}
if ( ( word.indexOf('y') > -1 && word.indexOf('y') < firstVowel ) || firstVowel === -1 ) {
    firstVowel = word.indexOf('y');
}

var firstPart = word.slice(0, firstVowel);
var restWord = word.slice(firstVowel, word.length);


if ( vowelIndex === 0) {
  return word + "yay";
}
return restWord + firstPart + "ay";
//leave the curly brace below alone
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', function () {
    it('should translate a simple word', function () {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', function () {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', function () {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', function () {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

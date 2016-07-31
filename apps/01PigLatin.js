'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

//'a'!=== 'A', so we want to return the string value to all lowercase, so we use string.prototype.toLowerCase so that our new word in Pig Latin will be consistent

  word = word.toLowerCase();

//We need to set the vowelIndex to -1 to find out if a vowel exists in the word. EX: if index of 'a' is -1, then there's no 'a' in the string; if character index > vowelIndex (-1) then a exists. Setting it to -1 updates the value of vowelIndex. we are looking for the first vowel in the string, so we need the least possible vowel index that isn't -1.

    var vowelIndex = -1; // Set it to assume there are no vowels

      if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('a');
      }

      if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('e');
      }

      if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('i');
      }

      if ( ( word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('o');
      }

      if ( ( word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('u');
      }

      if ( ( word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
          vowelIndex = word.indexOf('y');
      }

//We are using string.prototype.slice() here to separate the first part of the word up to the vowel and move it to the end of the rest of the word + 'ay'. The vowel index is our 'cutting point'.

      var firstPart = word.slice(0, vowelIndex);
      var restWord = word.slice(vowelIndex, word.length);


      if (vowelIndex === 0){
        return word + 'yay';
      }
      else {
        return restWord + firstPart + 'ay';
      }
  }

//prompt.get() prompts the user for input, allowing you to record user response in the terminal and make the app interactive (not sure if this is correct/the best explanation)
  function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log( pigLatin(result['word']) );

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

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

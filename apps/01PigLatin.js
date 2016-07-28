'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    // Your code here
    var vowelIndex = -1; // Set it to assume there are no vowels
    var pigWord = word.toLowerCase();

    if ( ( pigWord.indexOf('a') > -1 && pigWord.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('a');
    }

    if ( ( pigWord.indexOf('e') > -1 && pigWord.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('e');
    }

    if ( ( pigWord.indexOf('i') > -1 && pigWord.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('i');
    }

    if ( ( pigWord.indexOf('o') > -1 && pigWord.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('o');
    }

    if ( ( pigWord.indexOf('u') > -1 && pigWord.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('u');
    }

    if ( ( pigWord.indexOf('y') > -1 && pigWord.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = pigWord.indexOf('y');
    }

    if (vowelIndex > 0) {
      var firstPart = pigWord.slice(0, vowelIndex);
      var restWord = pigWord.slice(vowelIndex, pigWord.length);

      return (restWord + firstPart + 'ay');
      // console.log(restWord + firstPart + 'ay');
      // console.log(vowelIndex);
      // console.log(pigWord);
    } else if (vowelIndex > -1) {
      return (pigWord + 'yay');
      // console.log(pigWord + 'yay');
      // console.log(vowelIndex);
      // console.log(pigWord);
    } else {
      return (pigWord + 'ay');
      // console.log(pigWord + 'ay');
      // console.log(vowelIndex);
      // console.log(pigWord);
    }
}


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

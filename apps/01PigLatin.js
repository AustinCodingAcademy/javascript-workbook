'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    //***********************************************************************
    // 4.- should translate a simple word
    word = word.toLowerCase();

    // Your code here
    var firstLetter = word[0];

    //***********************************************************************
    // 1.- should translate a simple word
    // return  word.replace(firstLetter,'') + firstLetter + 'ay';

    //***********************************************************************
    // 2.- should translate a complex word
    var vowelIndex = -1;  // Assume there are no vowels

    // Search if there is 'a' vowel as the firstLetter
    if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('a');
    }
    // Search if there is 'e' vowel as the firstLetter
    if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('e');
    }
    // Search if there is 'i' vowel as the firstLetter
    if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('i');
    }
    // Search if there is 'o' vowel as the firstLetter
    if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('o');
    }
    // Search if there is 'u' vowel as the firstLetter
    if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('u');
    }
    // Search if there is 'y' vowel as the firstLetter
    if ((word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('y');
    }

    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);

    //***********************************************************************
    // 3.- should attach "yay" if word begins with vowel

    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u' || firstLetter === 'y' ) {
      return restWord + firstPart + 'yay';
    } else {
      return restWord + firstPart + 'ay';
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

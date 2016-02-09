'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {
  word = word.toLowerCase();
  var firstLetter = word[0];

  //handle case "begins with vowel" case
  if(firstLetter == 'a'
    || firstLetter == 'e'
    || firstLetter == 'i'
    || firstLetter == 'o'
    || firstLetter == 'u'){
    return word + "yay";
  }

  //handle the case if the first letter is a consonant
  else{
    var vowelIndex = -1;

    //find the index of the first vowel
    if((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex)
      || vowelIndex === -1 ) {
      vowelIndex = word.indexOf('a');
    }

    if((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex )
      || vowelIndex === -1) {
      vowelIndex = word.indexOf('e');
    }

    if((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex)
      || vowelIndex === -1) {
      vowelIndex = word.indexOf('i');
    }

    if((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex)
      || vowelIndex === -1) {
      vowelIndex = word.indexOf('o');
    }

    if((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex)
      || vowelIndex === -1) {
      vowelIndex = word.indexOf('u');
    }

    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);

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

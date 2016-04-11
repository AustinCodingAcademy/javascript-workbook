'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

function pigLatin(word) {

  var lowercaseWord = word.toLowerCase();
  var firstLetter = lowercaseWord[0];

  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var vowelIndex = -1;
    
  if (firstLetter == "a" || firstLetter == "e" || firstLetter == "i" || firstLetter == "o" || firstLetter == "u") {
    
    var pigLatinWord = lowercaseWord + "yay";
    return pigLatinWord;

  } else {

    for (var i = 0; i < vowelArray.length; i ++){
      if (( lowercaseWord.indexOf(vowelArray[i]) > -1 && lowercaseWord.indexOf(vowelArray[i]) < vowelIndex ) || vowelIndex === -1 ) {
        vowelIndex = lowercaseWord.indexOf(vowelArray[i]);
      }
    }

    var firstPart = lowercaseWord.slice(0, vowelIndex);
    var restOfWord = lowercaseWord.slice(vowelIndex, lowercaseWord.length);
    var pigLatin = "ay";

    var pigLatinWord = restOfWord + firstPart + pigLatin;

    return pigLatinWord;
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

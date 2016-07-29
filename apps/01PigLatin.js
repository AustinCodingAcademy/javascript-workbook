'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {
  // Concept Check
  //
  // Please explain why we are using String.prototype.toLowerCase() here.
  // For more info:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  //
  // Your Answer: Since the .indexOf() method is case sensitive, we are using String.prototype.toLowerCase() here to account for string inputs with problematic Capitalization / Lowercase schemes. This way the function will not be disrupted by string inputs that contain some letters Capitalized, some letters Lowercase, as it will simply use 'word = word.toLowerCase();' to convert the string to all Lowercase before continuing to pass the program.
  //
    word = word.toLowerCase();

  // Concept Check
  //
  // What is the significance of setting vowelIndex to -1?
  // This might help:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
  //
  // Your Answer: There are two main reasons why we set vowelIndex to -1.
  // 1)) It's necessary to grasp how the indexOf() method behaves before we can answer this question. The characters in a string are evaluated from left to right, with the last character's index being stated by the .indexOf() method as 'stringName.length() - 1'. Therefore, the .indexOf() method has a default return value of -1. This is because the first index occurence of a given string is [0], and if there is no input whatsoever, then the first index occurence is also considered to be the last index occurence, and so: '[0] - 1 = -1'.
  // 2)) In this 'if' conditional, we have an 'or' comparison operator where setting vowelIndex to -1 is our way of specifying that the 'if' conditional will assume that our input has no vowels. If we use the method .indexOf to determine if there are any occurrences of the specified value - in this case, any vowels - and if the method doesn't find any such occurrences, it will return its default value of -1. In such a case, where 'vowelIndex === -1' evaluates as 'true', then it would render the entire 'or' comparison 'true' as well, thereby accounting for an input which has no vowels.
  //
    var firstLetter = word[0];
    return word.replace(firstLetter, '') + firstLetter + 'ay';

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

    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(VowelIndex, word.length);

    if (vowelIndex === 0) {

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

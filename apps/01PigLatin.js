'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();

function pigLatin(word) {

  // Concept Check
  // Please explain why we are using String.prototype.toLowerCase() here.
  // Your Answer:
  //.toLowerCase makes each letter of a string a lowercase letter

  word = word.toLowerCase();

  // Concept Check
  // What is the significance of setting vowelIndex to -1?
  // Your Answer:
  //setting vowelIndex to -1 assumes that there are no vowels in the string before checking them with the if statements
  //this allows us to step through the if statements if there is no value of each vowel in the string

  var vowelIndex = -1;

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

  // Concept Check
  // Why are we using String.prototype.slice() here? What role does vowelIndex play?
  // Your Answer:
  //slice splices out a specified portion of a string and makes it a new string.
  //vowelIndex tells us where the vowel that we want to splice before is located so we can slice before it

  var firstPart = word.slice(0, vowelIndex);
  var restWord = word.slice(vowelIndex, word.length);

  if (vowelIndex === 0){
    return word + "yay";
  }else{
    return restWord + firstPart +'ay';
  }
}

// Concept Check
// What does prompt.get() do for us?
// Your Answer:
//prompt.get() brings up text that allows for input. This input is then run through pigLatin and the result is returned and printed out

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

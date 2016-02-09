'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {
	word = word.toLowerCase();
  var index;
  index = word.search(/[aeiou]/); //searches for vowel//
  if (index <= 0) {
    return word + "yay";
  } else {
    return word.substring(index, word.length) + word.substring(0, index) + "ay";
  } /*if vowel is after 1st letter, it will return the new word starting with the 1st vowel (index) and going to the end of the word (word.length). It then adds the letters from the beginning (index 0) up to the 1st vowel (index). It then adds  "ay" */
}
console.log(pigLatin('street'));


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

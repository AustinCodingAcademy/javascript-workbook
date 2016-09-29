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
    // Your Answer: That way, even if someone uses uppercase somewhere in their input, the output is always lowercase because we converted everything to lowercase before the program chopped it up and spit it back out.
    //

    word = word.toLowerCase();

    // Concept Check
    //
    // What is the significance of setting vowelIndex to -1?
    // This might help:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
    //
    // Your Answer: A vowel index of -1 assumes there aren't any vowels in the word because the first character in the string will be 0, so having anything less than zero as the index means that no vowels were found.
    //

    var vowelIndex = -1; // Set it to assume there are no vowels

    if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('a');
    }

    if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('e');
    }

    if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('i');
    }
    if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('o');
    }
    if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('u');
    }
    if ((word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('y');
    }


    // Concept Check
    //
    // Why are we using String.prototype.slice() here? What role does vowelIndex play?
    // This might help:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    //
    // Your Answer: word.slice() takes a selection of the original string accourding to the characters you specify in the parentheses and returns a new string.
    //
  
    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);

    if (vowelIndex === 0) {
        return word + 'yay';
    } else {
        return restWord + firstPart + 'ay';
    }


}



// Concept Check
//
// Make sure you run this app with node in the console before answering this question.
// Also, read Lesson 1 in the textbook.
// http://intermediate.austincodingacademy.com/_book/lesson_one.html
//
// What does prompt.get() do for us?
//
// Your Answer: It gets input from the user.
//

function getPrompt() {
    prompt.get(['word'], function(error, result) {

        console.log(pigLatin(result['word']));

        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#pigLatin()', function() {
        it('should translate a simple word', function() {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function() {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function() {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function() {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}

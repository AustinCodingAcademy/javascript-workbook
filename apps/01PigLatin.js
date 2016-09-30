'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

  // function pigLatin(word) {
  //   //for a simple word
  //   //this assigns the first letter of the word to the variable firstLetter
  //     var firstLetter = word [0];
  //   //this takes the first letter c and moves it to the end and adds ay to it
  //     return word.replace (firstLetter, '' ) + firstLetter + 'ay';
  //added in class for notes


    // Concept Check
    //
    // Please explain why we are using String.prototype.toLowerCase() here.
    // For more info:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
    //
    // Your Answer:
    // When people are prompted to put in a word they may not always put in a lowercase letter or an uppercase letter. Because of this when you are looking for those letters later one you would have to code for lowercase and uppercase. To go around that you can add the .toLowerCase to the word which changes whaterver is put into lowercase letters. It simplifies the code.
   word  = word.toLowerCase();

   //find a more complex
   // Concept Check
   //
   // What is the significance of setting vowelIndex to -1?
   // This might help:
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
   //
   // Your Answer: The reason it is set to -1 is because it is the value if there is not a vowel. This set of code uses arrays to check the word for the vowels. Arrays are always 0 - length of word. If there is a vowel it will come back a positive integer. If there is no vowel when the vowelIndex is set to -1 the answer would be -1. If this number was a positive number you would run into issues with longer words. This allows different lengths of words to be placed in the app and the code still works the same.

     var vowelIndex = -1; // Set it to assume there are no vowels

    // Set it to assume there are no vowels
    //this slices the word to see what vowel comes first by giving the vowels a number value and going through all of them in the word. the one with the lower value will be the vowel that comes first in the word-- added in class

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
    //
    // Why are we using String.prototype.slice() here? What role does vowelIndex play?
    // This might help:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
    //
    // Your Answer: vowelIndex is pointing to where the first vowel in the string is. It slices the word from 0 (firstletter of the word) to the vowel (vowelindex). then it slices the word from the after the vowel to the end.
    //
    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);

    //below---this is where if it starts with a vowel it adds yay to the end has an if/then statement so if it doesnt start with an a then it slices the word into seeing what vowel is first.-- added in class

    if (vowelIndex === 0) {
      return word + 'yay';
    }
    else {
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
// Your Answer:
//prompt.get prompts the user to put a word that goes into the code for the piglatin app. You have to have a prompt that tells the user to put something or there would not be a word to start with. 

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

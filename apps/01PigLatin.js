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
 // Your Answer:
 //replaces any upper case letter with lowercase so less lines are required to accomodate them.
 word  = word.toLowerCase();

 // Concept Check
 //
 // What is the significance of setting vowelIndex to -1?
 // This might help:
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
 //
 // Your Answer:
 //used to check if a word starts with a vowel, if so another action takes place. Also to determain where the first vowel is so the app knows where to cut a word.
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

 // Concept Check
 //
 // Why are we using String.prototype.slice() here? What role does vowelIndex play?
 // This might help:
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 //
 // Your Answer:
 //this cuts the word at the place that needs to be moved to the end of the word. considering most words are a consonant followed by a vowel, it would be easy to say just cut the word after the first letter; but some words have things like ch, cr, sh, th they need to be cut after the 2 consonants. pretty much every word that starts with aconsonant needs to be cut at the first vowel.
 var firstPart = word.slice(0, vowelIndex);
 var restWord = word.slice(vowelIndex, word.length);

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
//This creates a prompt box for a person to input a word to be changed into pig latin.
function getPrompt() {
   prompt.get(['word'], function (error, result) {

       console.log( pigLatin(result['word']) );

       getPrompt();
   });

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

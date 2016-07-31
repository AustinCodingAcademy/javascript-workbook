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
  //
  // String.prototype.toLowerCase is a method that returns the value of a called string into lowercase. One of the tests needed to be passed requires that this app should auto lowercase the word before translation.
  //
  //
  // By using .toLowerCase here we ensure that the word will be entirely lower case before any other changes are made. We also limit the number of times we have to search for each vowel.
  //
  //
  // Since 'a' !== 'A' we would normally need search for the uppercase and lowercase strings.
  //
  // Since .toLowerCase makes every letter in a string lowercase we only need to search for each vowel one time.
  //
  //
  word  = word.toLowerCase();

  // Concept Check
  //
  //
  // What is the significance of setting vowelIndex to -1?
  // This might help:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
  //
  // Your Answer:
  //
  // When searching  arrays a return value of -1 indicates that the value being searched for was not found.
  //
  //
  // Initalizing vowelIndex to -1 gives vowelIndex the value of that would be returned if we did not find a vowel searching with 'indexOf'.
  //
  // If the search for a vowel completes and returns -1 then a vowel was not found.
  //
  // -1 helps reveal what is able to be found. If a search is performed and word.IndexOf returns an index > -1 then a vowel had been found.
  //
  //

  var vowelIndex = -1 // Set it to assume there are no vowels

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
  //
  // String.prototype.slice() extracts or cuts text from one string and with that text returns a new string. It starts to extract the string from the parameter beginSlice and stops at the index entered for the parameter endSlice.
  //
  // The index for endSlice' is not extracted in the new string. Any index with a value > endSlice are also not included in the new string.
  //
  // For example:
  //
  // var myName = 'mannyhagman';
  // var mySlicedName = myName.slice(1, 5) ;
  // will return a new string 'anny'
  //
  // We use slice() to extract parts of one string into two different new strings so they can be concatenated into 1 new string.
  //
  // For variable firstPart the vowelIndex entered for the endSlice parameter.
  //
  // We extract from the first letter of word (index 0 and every index before vowelIndex. VowelIndex and no other indices are extracted)
  //
  // For variable restWord we do as the variable suggests and extract the rest of the word starting with and including the index value of vowelIndex through the rest of the word.

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
//
// prompt.get() uses the command line to prompt the user for the input needed to run the 01PigLatin.js app.
//
// This input becomes the initial value for the 'word' variable and this variable is called, searched, sliced and concatenated to give us the new Pig Latin string.
//
//
//
//
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

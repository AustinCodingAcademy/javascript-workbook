'use strict';

var assert = require('assert');
var prompt = require('prompt');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {

  // Concept Check
  //
  // Please explain why we are using String.prototype.toLowerCase() here.
  // For more info:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
  //
  // Your Answer: You want to set the sting to all lower case so that if a user uses CAPS then it doens't
  // matter becasue it will revert to lower case and the program will not crash.
  //
  word  = word.toLowerCase();

  // Concept Check
  //
  // What is the significance of setting vowelIndex to -1?
  // This might help:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
  //
  // Your Answer: setting a variable equal to -1 is often used so that it can return a value if nothing was
  // found, and since the index start at 0, -1 is used.
  //
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
  // Your Answer: vowelIndex is set to determine if a word has a vowel, and lets us know what index it is.
  // index is is important in this rule because when using 'slice' you have have a start and end index number
  // for which to slice a string or array.
  //
  // so for the firstPart, we are getting word from the user and slicing it from the start (0) to the first
  // vowel.
  var firstPart = word.slice(0, vowelIndex);
  // here we are slicing it from first vowel to the end of word.
  var restWord = word.slice(vowelIndex, word.length);

  // if the word begins with a vowel then we return the word with yay at the end
  if (vowelIndex === 0) {
    return word + 'yay';
  }
  // we take the the part of the word and add the first part that was sliced and then add 'ay' to get the final
  // pig latin word.
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
// Your Answer: gets the word from the user and runs the app that we created
// in this case, it is the Pig Latin app.
// I ran it and it works,  ayyy.  I'm the uthtray or normal terms I'm the truth.
//
function getPrompt() {
    rl.question('word ', (answer) => {
        console.log( pigLatin(answer) );
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

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
  //we take the word argument and convert it is a variable
    //now our data is clean
      //and we can make a fair comparison between our word letters and the vowel              //letters
  word  = word.toLowerCase();

  // Concept Check
  //
  // What is the significance of setting vowelIndex to -1?
  // This might help:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
  //
  // Your Answer:
  //we set the vowel index to -1
    //when we call the method indexOf on a word
      //for example "helloWorld".indexOf("z");
        //we will get the value -1 in return
          //because the 'z' letter is not present in the 'helloWorld' String
            //so we can check whether a letter, or in this case, a vowel
              //is present in a word (or not)
                //if not, we get a -1 (no vowels)
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
  //now that we have  vowel index
    //the index of the vowel letter in the word (the first vowel letter in the word)
      //now we can slice from the beg of the word to the vowel index
        //this gives us the first part of the word
  //we can slice again, from the vowel index to the end of the word (word.length);
    //this gives us the rest of the word
  var firstPart = word.slice(0, vowelIndex);
  var restWord = word.slice(vowelIndex, word.length);

//before we form our new word, we check if the vowelIndex is zero
  //this checks our earlier logic
    //someword.indexOf(someLetter)
      //if someLetter was a vowel
        //then the vowel index takes on the value of the index of someLetter
          //if the vowel index is zero, then someLetter would be the first letter
            //if that is the case we add 'yay' to the end of the word
              //otherwise we return the rest of the word + first part + yay
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
//prompt.get() is going to get a word from the user
  //the getPrompt() function is going to take that word and use it as the argument for our pigLatin function
  //we will log that result
  //and then getPrompt() will call itself again
    //to run prompt.get() which will ask for a word
      //then plug that word into our pigLatin function
        //then call itself again
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

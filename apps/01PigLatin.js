'use strict';

var assert = require('assert');
var prompt = require('prompt');
prompt.start();


function pigLatin(word) {

    // Your code here
    
    
     var firstLetter = word[0];
     
 
   if(firstLetter == 'a'
      || firstLetter == 'e'
      || firstLetter == 'i'
      || firstLetter == 'o'
      || firstLetter == 'u'){
         var pigLatinWord = word + "yay";
         return pigLatinWord;
      }

      //Check to see if the first vowel is not true
      //Returns -1 if the item is not found.
      var wordVowels = ["a", "e", "i", "o", "u"];
      for (var i = 0; i < word.length; i++) {
        if (wordVowels.indexOf(word[i])!== -1) {
          var firstWord = word.slice(0, i); 
           var secondWord = word.slice(i); 
          var pigLatinWord = secondWord + firstWord; 
          break;
        }
      }      

      return (pigLatinWord += "ay").toLowerCase();








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

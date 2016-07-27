'use strict';

//external libraries that we're using for this app
var assert = require('assert');
var prompt = require('prompt');
prompt.start();
//When you use function declarations, everythign is hoisted.

function pigLatin(word) {
    var vowelIndex = 0;

    // if (isVowel(word[0])) {
    //   return word + 'yay';
    // }
    // else {
    // dont need the if/else becasue its being repeated
    //}

    while(!isVowel(word[vowelIndex])){
      vowelIndex = vowelIndex +1;
    }
    if(vowelIndex === 0 ){
      return (word + 'yay').toLowerCase();
    } else {
      //When this loop stops, the vowelIndex will hold the index of the first vowel in word.
      //1. I want to slice the word from the beggining until the vowelIndex.
      var consanants = word.slice(0, vowelIndex);//dot notation is object oriented !
      //2. Want to slice again to get the remainder of the word ahter ths first few consanants
      var remainder = word.slice(vowelIndex);//Everything inside the [] is optional.
      return (remainder + consanants + 'ay').toLowerCase();
    }
}


function isVowel(letter){
  if (letter[0] === 'a'|| letter[0]==='e'|| letter[0]==='i'|| letter[0]==='o'|| letter[0]==='u') {
      return true;
  }
}
//when a function isSomething most likely will return true


/*
var firstletter =word[0];
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
if ( ( word.indexOf('o') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('i');
}
if ( ( word.indexOf('u') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('i');
}
if ( ( word.indexOf('y') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf('i');
}

var firstPart = word.slice(0, vowelIndex);
var restWord = word.slice(vowelIndex, word.length);
return restWord + firstPart + 'ay';


}*/

function getPrompt() {
    prompt.get(['word'], function (error, result) {

        console.log( pigLatin(result['word']) );

        getPrompt();
    });
}

// Tests also referred to as Specs TTD Test Driven Development

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

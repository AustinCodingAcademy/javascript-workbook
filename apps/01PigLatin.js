'use strict';var assert = require('assert');
var prompt = require('prompt');
prompt.start();function pigLatin(word) {
   var vowelIndex = 0;    // Your code here
   // 'apple', 'bus'
   if (isVowel(word[0])) {
     return word+'yay';
   } else {
     while(!isVowel(word[vowelIndex])) {
       vowelIndex = vowelIndex+1;
     }
     //when the while loop stops, the vowelIndex will hold the index of the first vowel in word      //1. i want to "slice" the part of the word from the beginning up until the vowelIndex
     var consonants = word.slice(0, vowelIndex);
     //2. i want to "slice" the word to get the remainder after the first few consonants
     var remainder = word.slice(vowelIndex);      return remainder+consonants+'ay';    }}function isVowel(letter) {
 if (letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u' ) {
   return true;
 }
}pigLatin('apple');
pigLatin('car');function getPrompt() {
   prompt.get(['word'], function (error, result) {        console.log( pigLatin(result['word']) );        getPrompt();
   });
}// Testsif (typeof describe !== 'undefined') {    describe('#pigLatin()', function () {
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
} else {    getPrompt();}
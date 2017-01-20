'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  //first test
  // var word /= 'car'; unecessary to define this

word = word.toLowerCase();

var firstLetter = word[0];
console.log('first letter:', firstLetter);

var vowelIndex = -1; //set to assume no vowls are found

// we can 'remove' letters by replace them with and empty string
console.log( word.replace('a', '') );

// build and return the translated word
return word.replace(firstLetter, '') + firstLetter + 'ay';

//next test ~~

console.log( 'crazy'.indexOf('a') );

//if it doesn't find it, it will return -1 look through strings for an integer
console.log( 'crazy'.indexOf('e') );

var word = 'crazy';

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
console.log( 'hello'.slice(0, 2) );

// notice that it returns up until the second index given (before 'l' at index 2)

var firstPart = word.slice(0, vowelIndex);
var restWord = word.slice(vowelIndex, word.length);
console.log ('first part', firstPart)
console.log ('rest word', restWord)


return restWord + firstPart + 'ay';

// next test begins with vowels

if (vowelIndex === 0) {
  return word + 'yay';
} else {
  return restWord
}


}



function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
// Tests

if (typeof describe === 'function') {

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

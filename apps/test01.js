'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var firstLetter = word[0];
  //console.log(firstLetter);

  var vowelIndex = -1; // .indexof when "not found"
  //var word.length;
  var vow = ["a","e","i","o","u"];

// finding the vowel within the word
for (i = 0; i<vow.length;  i++) {
console.log(vow[i]);
  if ( ( word.indexOf(vow) > -1 && word.indexOf(vow) < vowelIndex ) || vowelIndex === -1 ) {
    vowelIndex = word.indexOf(vow);
    i = vow.length+1;
  }

}

  // if ( ( word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('a');
  // }
  //
  // if ( ( word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('e');
  // }
  //
  // if ( ( word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('i');
  // }
  //
  // if ( ( word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('o');
  // }
  //
  // if ( ( word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('u');
  // }
  // if ( ( word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex ) || vowelIndex === -1 ) {
  //   vowelIndex = word.indexOf('y');
  //}

//  changing the input to lower case
  word = word.toLowerCase();
  var firstPart = word.slice(0, vowelIndex);
  var restWord = word.slice(vowelIndex, word.length);

//making sure first letter isn't a vowel, if so, add 'yay'
  if(vowelIndex > 0) {
    return restWord + firstPart + 'ay';
  } else {
    return word + 'yay';
  }
};


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

'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findVowel (vowelIndex,word,vowel) {
  var indexOfSomething;
  if ((word.indexOf(vowel) > -1 && word.indexOf(vowel) < vowelIndex) || vowelIndex === -1) {
    vowelIndex = word.indexOf(vowel);
  }
  return vowelIndex;
}

function pigLatin(word) {
  word = word.toLowerCase();
  var vowelIndex = -1;
  vowelIndex= findVowel(vowelIndex,word,"a");
  vowelIndex= findVowel(vowelIndex,word,"e");
  vowelIndex= findVowel(vowelIndex,word,"i");
  vowelIndex= findVowel(vowelIndex,word,"o");
  vowelIndex= findVowel(vowelIndex,word,"u");

  var firstPart = word.slice(0, vowelIndex);
  var restWord = word.slice(vowelIndex,word.length);
  
  if (vowelIndex === 0) {
    return word + 'yay';
  }
  else {
    return restWord + firstPart + 'ay';
  }
}
  


function getPrompt() {
  rl.question('Please type in a word to translate into Pig Latin: ', (answer) => {
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

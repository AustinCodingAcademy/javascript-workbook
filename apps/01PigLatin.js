'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  word = word.toLowerCase();
  var firstLetter = word[0];
  var vowelIndex = -1;

  var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  for (var i = 0; i < vowels.length; i++) {
    var letter = vowels[i];
    if ( ( word.indexOf(letter) > -1 && word.indexOf(letter) < vowelIndex ) || vowelIndex === -1 ) {
      vowelIndex = word.indexOf(letter);
    }
  }

  //If your vowelIndex is 0, then just attach yay to the end of the word.
  if (vowelIndex === 0) {
    return word + 'yay';
  } else {
    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);

    return restWord + firstPart + 'ay';
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

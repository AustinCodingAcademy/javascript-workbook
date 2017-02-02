'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  //makes word lower case
  word = word.toLowerCase();
  console.log('lowercasing: ' + word);
  var vowelIndex = -1;
  //stores first part of word before vowel
  var firstPart = '';
  //stores vowel and rest of word
  var restWord = '';
  //stores only the vowel
  var vowel = '';
  //checks to see if it starts with a vowel and if it does it adds 'yay' to the end
  // if (word.slice(0, 1) === 'a' || word.slice(0, 1) === 'e' || word.slice(0, 1) === 'i' || word.slice(0, 1) === 'o' || word.slice(0, 1) === 'u' || word.slice(0, 1) === 'y') {
  //   return word + 'yay';
  // }

  //loops through 'word' and finds the first vowel
  for (var i = 0; i < word.length; i++) {
    if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y') {
      //stores first vowel here
      vowel = word.slice(i, i + 1);
      console.log('vowel: ' + vowel);
      //checks index of var vowel vs var vowelIndex and then cuts the word, reorders it, and attaches 'ay' 
      if ((word.indexOf(vowel) > -1 && word.indexOf(vowel) < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf(vowel);
        console.log('vowel index: ' + vowelIndex);
        if (vowelIndex === 0) {
          return word + 'yay';
        }
        firstPart = word.slice(0, vowelIndex);
        console.log('first part: ' + firstPart);
        restWord = word.slice(vowelIndex, word.length);
        console.log('restWord: ' + restWord);
        //returns the final word
        return restWord + firstPart + 'ay';
      }
    }
  }

  //decided all of this was unnessary and commented it out.*************

  // if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf(a);
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }

  // if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf('e');
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }

  // if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf('i');
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }

  // if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf('o');
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }

  // if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf('u');
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }

  // if ((word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex) || vowelIndex === -1) {
  //   vowelIndex = word.indexOf('y');
  //   console.log('VI: ' + vowelIndex);
  //   firstPart = word.slice(0, vowelIndex);
  //   restWord = word.slice(vowelIndex, word.length);
  //   console.log('first part: ' + firstPart);
  //   console.log('restWord: ' + restWord);
  //   return restWord + firstPart + 'ay';
  // }
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
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
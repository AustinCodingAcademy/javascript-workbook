'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Different solution I am still trying to figure out
// function pigLatin(word) {
//   let lowestVowel = word.length;
//   if (word.indexOf('a') === 0 || word.indexOf('e') === 0 || word.indexOf('i') === 0 || word.indexOf('o') === 0 || word.indexOf('u') === 0) {
//     console.log(word.toLowerCase() + 'yay');
//   } else {
//     if (word.indexOf('a') > -1 && word.indexOf('a') < lowestVowel) {
//       lowestVowel = word.indexOf('a');
//     }
//     if (word.indexOf('e') > -1 && word.indexOf('e') < lowestVowel) {
//       lowestVowel = word.indexOf('e');
//     }
//     if (word.indexOf('i') > -1 && word.indexOf('i') < lowestVowel) {
//       lowestVowel = word.indexOf('i');
//     }
//     if (word.indexOf('o') > -1 && word.indexOf('o') < lowestVowel) {
//       lowestVowel = word.indexOf('o');
//     }
//     if (word.indexOf('u') > -1 && word.indexOf('u') < lowestVowel) {
//       lowestVowel = word.indexOf('u');
//     }
//     console.log(word.slice(lowestVowel, word.length) + word.slice(0, lowestVowel) + 'ay');
//   }
// }

function pigLatin(word) {
  // My code here, solution done with arrays and using .substr
  let pigLatin = '';
  // establish an array including all the vowels
  let vowels = /['a', 'e', 'i', 'o', 'u']/;
  // If the first letter, index 0, of a word is a vowel, search by .match(), the word will be added yay
  if (word[0].match(vowels)) {
    pigLatin = word.toLowerCase() + 'yay';
  }
  // The second scenario, where it will try to .match() any vowels and indicate what index is found in
  else {
    var vIndex = word.indexOf(word.match(vowels)[0]);
    pigLatin = word.substr(vIndex).toLowerCase() + word.substr(0, vIndex).toLowerCase() + 'ay';
  }
    // .substr helps take out all the consonants until it found the vowel in vIndex, then adds at the end of the word, then 'ay' at the end
  return pigLatin;
};


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

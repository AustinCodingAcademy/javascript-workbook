'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  var vowels = ['e', 'a', 'i', 'o', 'u'];
  var firstPart;
  var secondPart;
  var results = [];
  for (var i = 0; i <= vowels.length; i++) {
    if (word.indexOf(vowels[i]) > -1) {
      results.push(parseInt(word.indexOf(vowels[i])));
    }
  }
  // the nested function below checks to see if the first letter is a vowel and then concats accordingly
  function printWord(part2, part1) {
    if (part1 === '') {
      console.log(part2 + part1 + 'yay');
    } else {
      console.log(part2 + part1 + 'ay');
    }
  }
  // the bit below to end of parent function operates on data passed to said function and returns arguments for printWord() call
  results.sort();
  var firstVowel = results[0];
  firstPart = word.slice(0, firstVowel);
  secondPart = word.slice(firstVowel);
  printWord(secondPart, firstPart);

return;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    pigLatin(answer);
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
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

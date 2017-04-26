'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function getPrompt() {
  rl.question('word? ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
pigLatin('word')
function pigLatin(input) {
  var word = input.toLowerCase();
  let lowestVowel = word.length;



  if (word.indexOf('a')> -1 && word.indexOf('a') < lowestVowel) {
    lowestVowel = word.indexOf('a')

  }
  if (word.indexOf('e')> -1 && word.indexOf('e') < lowestVowel)  {
    lowestVowel = word.indexOf('e')

  }
  if (word.indexOf('i')> -1 && word.indexOf('i') < lowestVowel) {
    lowestVowel = word.indexOf('i')
  }
  if (word.indexOf('o')> -1 && word.indexOf('o') < lowestVowel)  {
    lowestVowel = word.indexOf('o')

  }
  if (word.indexOf('u')> -1 && word.indexOf('u') < lowestVowel)  {
    lowestVowel = word.indexOf('u')

  }
  if (lowestVowel === 0){
    return word + 'yay';
  }
  console.log(lowestVowel)
  const firstPart = word.slice(0, lowestVowel);
  const secondPart = word.slice(lowestVowel);
  return secondPart + firstPart + 'ay';
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

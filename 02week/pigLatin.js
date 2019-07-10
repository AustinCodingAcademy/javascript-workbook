'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const vowel = "aeiou";

const detectVowel = (word) => {
  for  (let i=0; i < word.length; i++) {
    if (vowel.indexOf(word[i])!== -1)
    return[i]
  }
}

const pigLatin = (word) => { 
  const firstVowel = detectVowel(word);
  if(firstVowel > 0) {
    return word.slice(firstVowel) + word.slice(0, firstVowel) + "ay";
  }
  return word + "way";
}


function getPrompt() {
  rl.question('Please enter a word to convert to pig latin: ', (answer) => {
    console.log( pigLatin(answer) );
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
    it('should attach "way" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggway');
      assert.equal(pigLatin('emission'), 'emissionway');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

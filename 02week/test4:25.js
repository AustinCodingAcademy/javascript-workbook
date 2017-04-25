'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  word = "baggi";

  let lowestVowel = word.length;

  if (word.charAt(0) === 'a')  {
    console.log(word + 'yay') ;
  }
    else if (word.indexOf('a') >= 1 && word.indexOf('a') < lowestVowel)
      {lowestVowel = word.indexOf('a');
        first = word.slice(0, lowestVowel);
        mid = word.slice(lowestVowel);
    console.log(mid + first + 'ay');
  }

  if (word.charAt(0) === 'e')  {
    console.log(word + 'yay') ;
  }
    else if (word.indexOf('e') >= 1 && word.indexOf('e') < lowestVowel)
      {lowestVowel = word.indexOf('e');
        first = word.slice(0, lowestVowel);
        mid = word.slice(lowestVowel);
    console.log(mid + first + 'ay');
  }

  if (word.charAt(0) === 'i')  {
    console.log(word + 'yay') ;
  }
    else if (word.indexOf('i') >= 1 && word.indexOf('i') < lowestVowel)
      {lowestVowel = word.indexOf('i');
        first = word.slice(0, lowestVowel);
        mid = word.slice(lowestVowel);
    console.log(mid + first + 'ay');
  }

  if (word.charAt(0) === 'o')  {
    console.log(word + 'yay') ;
  }
    else if (word.indexOf('o') >= 1 && word.indexOf('o') < lowestVowel)
      {lowestVowel = word.indexOf('o');
        first = word.slice(0, lowestVowel);
        mid = word.slice(lowestVowel);
    console.log(mid + first + 'ay');
  }

  if (word.charAt(0) === 'u')  {
    console.log(word + 'yay') ;
  }
    else if (word.indexOf('u') >= 1 && word.indexOf('u') < lowestVowel)
      {lowestVowel = word.indexOf('u');
        first = word.slice(0, lowestVowel);
        mid = word.slice(lowestVowel);
    console.log(mid + first + 'ay');
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

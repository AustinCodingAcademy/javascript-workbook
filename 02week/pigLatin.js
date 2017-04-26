'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function pigLatin(word) {
  word = word.toLowerCase();
  let lowestVowel = word.length;
  console.log('lowestVowel: ', lowestVowel);

  console.log(`a:`, word.indexOf('a'));
    if (word.indexOf('a') > -1 && word.indexOf('a') < lowestVowel) {
      lowestVowel = word.indexOf('a');
    }
  console.log('lowestVowel: ', lowestVowel);

  console.log(`e:`, word.indexOf('e'));
    if (word.indexOf('e') > -1 && word.indexOf('e') < lowestVowel) {
      lowestVowel = word.indexOf('e');
    }

  console.log('lowestVowel: ', lowestVowel);
  console.log(`i:`, word.indexOf('i'));
    if (word.indexOf('i') > -1 && word.indexOf('i') < lowestVowel) {
      lowestVowel = word.indexOf('i');
    }

  console.log('lowestVowel: ', lowestVowel);
  console.log(`o:`, word.indexOf('o'));
    if (word.indexOf('o') > -1 && word.indexOf('o') < lowestVowel) {
      lowestVowel = word.indexOf('o');
    }

  console.log('lowestVowel: ', lowestVowel);
  console.log(`u:`, word.indexOf('u'));
    if (word.indexOf('u') > -1 && word.indexOf('u') < lowestVowel) {
      lowestVowel = word.indexOf('u');
    }




































































  console.log('lowestVowel: ', lowestVowel);


  if (lowestVowel === 0) {
    return(word + "yay")
  } else {
  let sliced = word.slice(lowestVowel, word.length);
  let leftover = word.slice(0, lowestVowel)
  return(sliced + leftover + "ay")
  }

}
// let vowels = "aeiou";
// let word = "car";
// let lowestVowel = 3;
//
// if (word.indexOf('a') > -1 and
//   word.indexOf('a') < lowestVowel) {
//     lowestVowel = word.indexof('a')
//   }
// if
//
//
//
//
//
//   vowels are aeiou.  can iterate through them as an array.
//   string.includes()
//   indexof(dictionary) gives you the location of aparticular character.
//   what is the index of a
//   what is the index of e
//   index of o
//     dicctionary
//     The lowest value (that isnt negative 1 -- neg 1 is if its not there) will be the one you use. This will be the first vowel.
//     this will be the point at which you break things.
//
//     there's another function that will cut a line.'
//   }
//
//   Your code here



function getPrompt() {
  rl.question('word ', (answer) => {
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

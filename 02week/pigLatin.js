'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //This code stores the list of vowels so that the words can be searched for vowels.
  const vowelArray = ['a', 'e', 'i', 'o', 'u'];

  //This code is to trim the word and change it all to lowercase for the sake of testing.
  word = word.toLowerCase().trim();

  //This code splits the string into individual letters so that each letter can be looped individually.
  let wordArray = word.split('');

  let counter = 0;
  while(!isAVowel(wordArray[0])) {
    wordArray.push(wordArray.shift());
    counter++;
  }
  if(counter === 0) {
    return wordArray.join('') + 'yay';
  } else {
    return wordArray.join('') + 'ay';
  }
}

const isAVowel = (letter) => {
  if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true;
  } else {
    return false;
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

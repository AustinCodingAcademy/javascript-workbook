'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // First, define vowels array
  // Turn string into array
  // Compare each character to the vowels array.
  //   if first letter AND vowel, add yay to end of string and return.
  //   else if nth letter is vowel, add ay to string array and return.
  //   else if nth letter is consonant, remove from front and move to end of array.
  // When returning, turn string array string back into a string

  // NOTE: This code only handles words that contain a traditional vowel.  Does not work for words using y as a vowel.
  // such as: sky, fly, why, try

  word = word.toLowerCase().trim();
  let wordArray = word.split('');

  // This piece of code tests if the current letter is a vowel or not
  const isAVowel = (letter) => {
    const vowelsArr = ['a','e','i','o','u']
    return vowelsArr.some(vowel => letter === vowel);
  }

  // The while loop tests the current letter for a vowel.  If not, then move the consonant to the end.
  // If it finds a vowel, then break.
  let counter = 0;
  while (!isAVowel(wordArray[0])) {
    wordArray.push(wordArray.shift());  // This should move first char to last.
    counter++;
  }

  // This code adds either ay or yay at the end to complete the piglatin conversion.
  if (counter === 0) {
    return wordArray.join('')+'yay';
  } else {
    return wordArray.join('')+'ay';
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

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pigLatin = (word) => {
  // Make sure word is trimmed and put to lowercase first
  word = word.trim();
  word = word.toLowerCase();
  // Set your vowels array to compare to word
  let vowels = ['a', 'e', 'i', 'o', 'u']
  // Loop around the length of word
  for (let l = 0; l < word.length; l++) {
    // Check to see if the index of word is included in the vowels array
    if (vowels.includes(word[l])) {
      // Check to see if the index of the vowel is 0 (the word begins with a vowel)
      if ( l === 0) {
        console.log(word + 'yay');
        // Return the word as-is with "yay" at the end
        return word + 'yay';
      }
      // If the first index is not a vowel, slice word at the vowel index
      // "Chop" it from that point thru the whole length of the word
      // Then take the beginning of the word (a consinent) untl the first vowel index (l)
      // Add 'ay' at the end
      console.log("Slice the last part of the word include the vowel:", word.slice(l, word.length));
      console.log("Grab the first part of the word excluding the vowel: ", word.slice(0, l));
      return word.slice(l, word.length) + word.slice(0, l) + 'ay';
    }
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    const translation = pigLatin(answer);
    console.log("Answer: ", translation);
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

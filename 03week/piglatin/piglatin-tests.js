'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Save pig latin function in fat arrow function
const pigLatin = (word) => {
  // Make sure word is trimmed and put to lowercase first
  word = word.trim();
  word = word.toLowerCase();
  // Set your vowels array to compare to word
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let words = word.split(' ');
  let response = [];
  // Loop around the length of each word
  for(let l = 0; l < words.length; l++) {
    const eachWord = words[l];
    for(let j = 0; j < eachWord.length; j++) {
      const letter = eachWord[j];
      // Check to see if the index of eachWord is included in the vowels array
      if(vowels.includes(letter)) {
        // Check to see if the index of the vowel is 0 (the word begins with a vowel)
        if(j === 0) {
          let vowelWord = eachWord + 'yay';
          response.push(vowelWord);
        } else {
          let otherWords = eachWord.slice(j, eachWord.length) + eachWord.slice(0, j) + 'ay';
          response.push(otherWords);
        }
        break;
      }
    }
  }
  const answer = response.join(' ');
  return answer;
}


function getPrompt() {
  rl.question('word ', (answer) => {
    const translation = pigLatin(answer);
    console.log('Answer: ', translation);
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
    // 'Should separate two words and return them together' 'Hop Fest' => 'Ophay Estfay'
    it('should separate two words and return them together', () => {
      assert.equal(pigLatin('Egg Rocket'), 'eggyay ocketray');
    });
  });
} else {

  getPrompt();

}

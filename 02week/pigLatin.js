'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //define vowel and first letter
  word = word.toLowerCase().trim();
  const wordArray = word.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const firstLetter = wordArray[0];
  //check first letter is not a vowel

  // if word[0] === 'a' || 'e' || 'i' || 'o' || "u" {
  //   return word + 'yay';
  // } else {
  // }

  if (vowels.includes(firstLetter)) {
    return word + 'yay';
  }

    // for (let i = 0; i < word.length; i++) {
    //   console.log(word[i]);
    //   if (i === 0 && vowels.includes(word[i])) {
    //     return word + 'yay';
    //   }

    let pigLatin = '';
    let cutWord = '';
    let wordString = '';
    let cutWordString = '';

    for (let i = 0; i < wordArray.length; i++) {
      if (i > 0 && vowels.includes(wordArray[i])) {

        cutWord = wordArray.splice(i)
        wordString = wordArray.join('')
        cutWordString = cutWord.join('')
        return cutWordString + wordString + 'ay'
      }
    }
    return word + 'ay'
  // const checkEach = (word) => { 
    
  // }

  //check second letter is not a vowel
  //check... letter not a vowel
  //if starts with a vowel add "yay"
  

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

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // Your code here

const pigLatin = (word) => {
      const newWord = word.trim("")
      const wordArray = newWord.split("");
      const vowelArray = ['a,e,i,o,u']
      for(let i = 0; i < wordArray.length; i++){
        for(let x =0; x< vowelArray.length; x++) {
          if(wordArray[i] === 'a'|| wordArray[i] === 'e'|| wordArray[i] === 'i' || wordArray[i] === 'o' ||wordArray[i] === 'u'){
            const way = "way"
            wordArray.push(way)
            return wordArray.join('')
          } else {
            const moveLetter = wordArray.push(wordArray.shift())
            const addLetters ='ay'
            wordArray.push(addLetters)
            return wordArray.join("")
          }
    }
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

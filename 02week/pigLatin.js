'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
let trimWord = word.trim().toLowerCase();
  console.log(trimWord);

const vowels = ["a","e","i","o","u"];

let i;
let vowelIndex;
for (i = 0; i < vowels.length; i++) {
if (trimWord.indexOf(vowels[i]) > -1) {
  vowelIndex = trimWord.indexOf(vowels[i]);
  break;
}
}

console.log(vowelIndex);

//let vowelIndex = trimWord.indexOf(vowels);
 // 
// let i;
// for (i = 0; i < trimWord.length; i++) {
  
  
//   // vowels.includes(trimWord[i]);
//   // if (vowelIndex) {
//   //   console.log(indexOf([i]));
//   // }
// }

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

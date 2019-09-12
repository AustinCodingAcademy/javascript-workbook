'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let fltrdWord = word.toLowerCase().trim();
  // Split word into array
  const yay = ['y','a', 'y'];
  const ay = ['a', 'y']
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const wordArray = fltrdWord.split('');
  for (let v = 0; v <= vowels.length; v++) {
    if(wordArray[0] === vowels[v]){
      // If it starts with a vowel
      let concated = wordArray.concat(yay);
      let strConct = concated.join('');
      return strConct;
    }
  }
  // If it does not start with a vowel.
  let preVowel = [];
  let ifVowel = false;
  
  for (let i = 0; i < wordArray.length; i++){
    while(ifVowel === false){
      let shifted = wordArray.shift(i);
      preVowel.push(shifted);
      // console.log(`>>> ${shifted} was pushed.`);
      for (let v = 0; v < vowels.length; v++){
        if (wordArray[i] === vowels[v]) {
          ifVowel = true;
          // console.log('Vowel hit. Base case reached.');
          break;
        }
      }
    }
    
  }
  let concated = wordArray.concat(preVowel, ay);
  let strConct = concated.join('');
  return strConct;
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

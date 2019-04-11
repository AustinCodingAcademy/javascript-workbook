'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function pigLatin(word) {

//const words = wordword.toLowerCase().trim().split(' ');  
//for(var i=0;i<word.length;i++){
word = word.toLowerCase().trim();

const vowels = ["a", "e", "i", "o", "u"];
//find if the first letter is a vowel
let vowelIndex = 0;
//if a vowel add "yay" to the end
if (vowels.includes(word[0])){
  return word.split() + "yay";
}
//if cons add "ay"
else{ 
  for (let i of word){
    if (vowels.includes(i)){
      vowelIndex = word.indexOf(i);
      break;
    }
  }
  return word.slice(vowelIndex).split() + word.slice(0, vowelIndex).split() + "ay";
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
    it('Should separate two words and return them together', () => {
      assert.equal(pigLatin('Hello there'), 'ellohay heretay');
      assert.equal(pigLatin('What now'), 'atwhay ownyay');
    });
  });
} else {

  getPrompt();

}

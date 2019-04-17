'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  word=word.toLowerCase();
  const vowels=['a','e','i','o','u'];
  let vowelIndex=0;
if (vowels.includes(word[0])){
  return word + 'yay';
}else{
  for(let char of word){
    if(vowels.includes(char)){
      vowelIndex=word.indexOf(char)
      break;
    }
  }
   // Compose final string
   return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
}
}
// function checkNum(num){
//   const num=[1, 2, 3] 
//   return num==false;
// }
// function checkNum(num);

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
      // my test
      assert.equal(pigLatin('chair'),'airchay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    // my other test
    it('should return false for number'), ()=>{
      assert.equal(pigLatin(1), false);
    };
  })
} else {

  getPrompt();

}

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

const pigLatin = (input) => {
  const vowelArray = ["a","e","i","o","u"]
  if(typeof input === typeof "String"){
    input = input.trim().toLowerCase()
    if(vowelArray.includes(input[0])){
      return input + "yay"
    }else{
       let lowestVowelIndex = 45
       let splitLetter
       vowelArray.forEach((vowel)=> {
         let vowelIndex = input.indexOf(vowel)
         if((vowelIndex > -1) && (vowelIndex < lowestVowelIndex)){
           lowestVowelIndex = vowelIndex
           splitLetter = input[lowestVowelIndex]
          }
       })
       return input.substr(lowestVowelIndex) + input.split(splitLetter)[0] + "ay"
   }
  }else {'please enter a word to be translated'}
 }





function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}



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

'use strict';

//global storage
  //const pigLatinStr = ('choose your word here') => {}
  //const vowels = ('aeiou')

//function names, purpose, method
  //checkFirstVowel(), use a for loop to look for where the first vowel is in the array, indexOf method
  //strToArray(), convert the word you used into an array, split method, split on first vowel index
  //moveToEnd(), move all array elements before the first vowel to the end, use push and shift method with value returned from indexOf
  //addAY(), add the letters a and y to the end of the array, push method
  //arrayToStr(), convert the array back into a string, join method
  //print out result

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatinr=(word)=> {
  const lowerCase = word.toLowerCase().trim()
  
  //checkFirstVowel goes here!!!
  word.split(``);
  word.push(`ay`);
  word.join(``);
  return word;
}

pigLatin(`scram`);




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

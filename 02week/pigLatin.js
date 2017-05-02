'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  word = word.toLowerCase(); // first auto lowercase word before translation
  let vowels = ['a','e','i','o','u'], //declare all vowels in an array and assign to variable vowels
      result = word.split(''); //split the string and assign to result
      
  if(vowels.includes(word.charAt(0))) { //if first letter is a vowel
    return word += 'yay'; // add yay to the end of the word
  } else { //if the first letter is not a vowel
    for (var i=0; i < word.length; i++) { //loop through each letter
      if(!vowels.includes(word[i])) { //if the letter isn't a vowel
        result.push(result.shift()); //take the first letter and add it to the end
      } else { //until you reach a vowel
        result.push('ay'); //add ay to the end
        return result.join(''); //make it a string
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
    it('should auto lowercase word before translation', () => {
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin('RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

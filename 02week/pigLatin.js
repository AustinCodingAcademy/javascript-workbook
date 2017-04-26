'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  word = prompt('Please enter any word'); //Asking user to enter a word
  var vowels = ['a','e','i','o','u'];

  var firstLetter = word.substring(0,1); // here substring() method returns the first character

  var secondLetter = word.substring(1,2); // here substring() method returns the second character


  if(firstLetter === (firstLetter.toUpperCase())) { // check if first character is capitalized
    firstLetter = firstLetter.toLowerCase(); // first character lowercase
    word = word.toLowerCase(); // word lowercase
  }
  if((firstLetter === vowels[0]) || (firstLetter === vowels[1]) || (firstLetter === vowels[2]) || (firstLetter === vowels[3]) || (firstLetter === vowels[4])) { // if first character is a vowel
    word = word + 'yay'; // add 'yay' to the end of the word
    console.log(word);
  }else if((secondLetter === vowels[0]) || (secondLetter === vowels[1]) || (secondLetter === vowels[2]) || (secondLetter === vowels[3]) || (secondLetter === vowels[4])) { //if the first character is not vowel and second character is vowel
    word = word.slice(1) + firstLetter + 'ay'; //take out first character and add it to the end with 'ay'
    console.log(word);
  }else{ // if first and second characters are not vowels
    word = word.slice(2) + word.slice(0,2) + 'ay'; //take out both 1st and 2nd characters and add them to the end with 'ay'
    console.log(word);
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

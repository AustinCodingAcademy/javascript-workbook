'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  //lowerCase and trim word
  word = word.toLowerCase().trim();
  
  // Your code here
  // create a variable for vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  //create a variable for word position 0
  const firstLetter = word[0];
  const space = ' ';
  //most basic case where word starts with a vowel
  //If it does start with a vowel, attach "yay" on the end
  // for (let j = 0; j < space.length; j++) {

    // if (word.includes(space[j])) {
    //   let newWord = word.split(" ").toString(j);
    //   return newWord + "ay";

    // }
     if (vowels.includes(firstLetter)) {
      return word + "yay";
      
    }
    //create else condition for all remaining words that don't start with vowels
    //Use a for loop to run through the word until it finds the first vowel
    //Once it finds the first vowel return the word cut from the first vowel on
    //Add that to the word from position 0 until the first vowel and add "ay"
    else {
      for (let i = 1; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          return word.slice(i) + word.slice(0, i) + "ay";
        }
  
      }
    }
    }
  
  // }

  



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
      assert.equal(pigLatin('Hop Fest'), 'ophay estfay');
      assert.equal(pigLatin('Beer Time'), 'eerbay imetay');
    });
  });
} else {

  getPrompt();

}

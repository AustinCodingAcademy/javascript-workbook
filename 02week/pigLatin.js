'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//trim the word at the first letter
// append "ay" to it

// function pigLatin(word) {
//     // Convert string to lowercase
//     word = word.toLowerCase()
//     // Initialize array of vowels
//     const vowels = ["a", "e", "i", "o", "u"];
//     // Initialize vowel index to 0
//     let vowelIndex = 0;
  
//     if (vowels.includes(word[0])) {
//       // If first letter is a vowel
//       return word + "way";
//     } else {
//       // If the first letter isn't a vowel i.e is a consonant
//       for (let char of word) {
//         // Loop through until the first vowel is found
//         if (vowels.includes(word)) {
//           // Store the index at which the first vowel exists
//           vowelIndex = word.indexOf(char);
//           break;
//         }
//       }
//       // Compose final string
//       return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
    
//   }
// }

function pigLatin(word) {
  word = word.toLowerCase();

  const vowels = ["a", "e", "i", "o" , "u", "y"];

  let vowelPos =  word[0];

  if (vowels.includes(vowelPos)){
    return word + "ay";
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

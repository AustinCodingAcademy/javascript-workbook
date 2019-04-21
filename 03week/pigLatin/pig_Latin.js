'use strict';
alert("hello");

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//   // Your code here
// Convert string to lowercase
 // Initialize array of vowels
 // Initialize vowel index to 0
 // If first letter is a vowel
 // If the first letter isn't a vowel i.e is a consonant
 // Loop through until the first vowel is found
  // Store the index at which the first vowel exists
   // Compose final string
function scrubbing(str) {
   let scrubStr = str.toLowerCase().trim();
  return scrubStr;
}

function pigLatin(str) {
  str = scrubbing(str);
  console.log(str);
 const vowels = ["a", "e", "i", "o", "u"];
  let vowelIndex = 0;
    if (vowels.includes(str[0])) {
    return str + "yay";
  } else {
    for (let char of str) {
    if (vowels.includes(char)) {
        vowelIndex = str.indexOf(char);
        break;
      }
    }
   return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
   }
}
function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
document.getElementById("answer").innerHTML = str;
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
      assert.equal(pigLatin('HeLlO'), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();


}

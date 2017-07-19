'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Deprecated
// function pigLatin(word) {
//
//   var array = word.split('');
//
//   var vowels = ['a','e','i','o','u'];
//
//   var newWord = '';
//
//   for(var y = 0; y < word.length-1; y++) {
//
//     for(var i = 0; i < vowels.length-1; i++) {
//
//       if(word[y] === vowels[i]) {
//
//           for (var x = y; x < word.length; x++) {
//               newWord = newWord + word[x];
//           }
//
//           for (var n = 0; n < y; n++) {
//               newWord = newWord + word[n];
//           }
//
//         return newWord + "ay";
//       }
//     }
//   }
// }

// Refactor of pigLatin
// Declare pigLatin as a function and 'str' as a placeholder for a given string
const pigLatin = word => {

  // Make a list of vowels to test each letter of str against
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  // Turn the given string into an array and put it into 'result' var
  let result = word.split('');

  // If the vowels array includes the first indexed letter of str
  if (vowels.includes(word[0])) {

    // Return the given string with 'yay' added at the end
    return word += 'yay';

    // The vowels array DOES NOT include the first indexed letter of str
  } else {

    // Loop over each letter in the string given
    for (let i=0; i<word.length; i++) {

      // Using the iterator declared above, test each letter in str
      // If the iterator DOES NOT include a letter in the vowel array
      if (!vowels.includes(word[i])) {

        // Using str in array form, remove the first letter on the array, then add it to the end
        result.push(result.shift());

        // Once the iterator DOES match a letter in the vowel array
      } else {

        // Add 'ay' to the end of the str
        result.push('ay');

        // Turn the rearranged str (var result) back into a string and return it
        return result.join('');
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
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}

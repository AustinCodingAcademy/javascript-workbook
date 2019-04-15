// 'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let arrayLength = (wordArray.length - 1)
// let firstToBack = wordArray.splice(arrayLength,0,wordArray[0])
//   function pigLatin(word) {
//   let str = word.trim().toLowerCase();
//   result = str.split('');
//   const vowel = ['a', 'e', 'i', 'o', 'u'];
//   if (vowel.includes(str.charAt(0))) {
//     return result += 'way';
//   } else {
//     for (let i=0; i<result.length; i++) {
//       if (!vowel.includes(result[1])) {
//         result.push(result.shift());
//       } else {
//         result.push ('ay');
//         return result.join('');
//       }
//     }
//   }
// }

function pigLatin(original) {
  //remove whitespace and change to lower case
  let str = original.trim().toLowerCase();
  let word = str.split("");
  const vowel = ['a','e','i','o','u'];
  // for (let i=0; i<word.length; i++){
    if (vowel.includes(str.charAt(0))) {
      return str += 'yay';
    } else {
    for (let i=0; i < word.length; i++){
      if (!vowel.includes(str[i])) {
        word.push(word.shift());
        }
      else {
        word.push('ay');
        return word.join('');
        }
    }
  };
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
};

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

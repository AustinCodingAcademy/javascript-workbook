'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });



translate.addEventListener('click', function() {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let textArea = document.getElementById('to-translate').value;
  let toLatin = document.getElementById('to-latin');


  if (!vowels.includes(textArea[0])) {
    if(vowels.includes(textArea[1])) {
      let removedLetter = textArea.slice(0,1);
      toLatin.value = textArea.substr(1)+`${removedLetter}`+'ay';
    } else if (!vowels.includes(textArea[0]) && !vowels.includes(textArea[1])) {
      let removedLetters = textArea.slice(0,2);
      toLatin.value = textArea.substr(2)+`${removedLetters}`+'ay';
    } 
  } else if (vowels.includes(textArea[0])) {
    toLatin.value = textArea+'yay';
  }
});


//     } else if (!vowels.includes(word[0]) && !vowels.includes(word[1])) {
//       let removedLetters = word.slice(0,2); // Removes the first two letters of the word
//       return(word.substr(2)+`${removedLetters}`+'ay'); // Returns the word minus the first 2 letters, then adds the removed letters to the end followed by 'ay'.
//       } 
//       // Checks if the first letter IS in the array of vowels
//     } else if (vowels.includes(word[0])) {
//       return(`${word}`+'yay'); // Returns the whole string and adds 'yay' to the end.
//   }
// }





























// function getPrompt() {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Tests

// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }

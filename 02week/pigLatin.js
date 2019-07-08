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

clear.addEventListener('click', function() {
  document.getElementById('to-translate').value = '';
  document.getElementById('to-latin').value = '';
});
































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

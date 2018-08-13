'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Plan:
//function pigLatin() - parent function
//isInputValid() - evaluation function
//order of nested functions:
//lowercase and trim
//vowel loop? for yay
//complex word loop until you find a vowel 
//simple word


//checks if the first letter is a vowel
const checkForVowel = (word)=>{
  const splitWord = word.split('')
  if(splitWord[0]==='a'||splitWord[0]==='e'||splitWord[0]==='i'||splitWord[0]==='o'||splitWord[0]==='u'){
    return true
  } else {
    return false
  }
}

//changes the input word into a pig latin word (simple)
const changeWord = (word)=>{
  const wordArr = word.split('');
  const firstLetter = wordArr.shift();
  const pushFirstLetter = wordArr.push(firstLetter);
  const ay = 'ay';
  const pushAy = wordArr.push(ay);
  const completeWord = wordArr.join('');
  return completeWord
}

const complexWord = (word)=>{
    const vowelWordArr = word.split('');
    const yay = 'yay';
    const pushYay = vowelWordArr.push(yay)
    const completeVowelWord = vowelWordArr.join('');
    return completeVowelWord
}

// const complexWord = (word)=>{
//   const vowelArr = ['a', 'e', 'i', 'o', 'u'];
//   for(let i = 0; i < word.length; i++){
//     if(vowelArr.includes(word[0])){
//       return word + 'yay'
//     } else if(vowelArr.includes(word[i])){
//       const beforeVowel = word.substring(0, i);
//       const afterVowel = word.substring(i);
//       return afterVowel + beforeVowel + 'ay';
//     }
//   }
// }

//checks to see if the word is not a number
//return true or false
const isInputValid = (word)=>{
  const pattern = new RegExp(/[a-z]/);
  for(let i = 0; i<word.length; i++){
    if(pattern.test(word[i]) !== true){
      return false;
    }
  } 
  return true;
}

//the varible word is whatever string the user inputs
function pigLatin(word) {
  word = word.toLowerCase().trim()
  if(isInputValid(word)){
    if(checkForVowel(word)){
      return complexWord(word)
    } else{
      return changeWord(word)
    } 
  } else {
    console.log('INVALID WORD')
  }
}

//dont do anything to this
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

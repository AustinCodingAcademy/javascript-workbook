//CODE PLAN//
//write a function strIsValid()
  //check for word input

//function scrubString()
  //check for extra spaces before and after 
  //check for consistent case 

//write a function chkForVowelStart()
  //use conditional to evaluate if input string starts with a,e,i,o,u (look into index of as a shorter method)
  //if truthy return original string concatinating 'yay' to the end

//function chkForConsonant()
  //remove consonants or consonant strings through intial vowel using for look and indexOf
  //move all consonants prior to initial vowel to end of word by storing in new variable toFirstVowel
  //store all characters from initla vowel to end of the word into a new variable firstVowelToEnd
  //return concat of toFirstVowel, firstVowelToEnd and 'ay' to make pigLatin version


'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//checks for no entry and a string entry
const strIsValid = (word) => {
  if (word && typeof word === 'string') {
    return true;
  }
}
//cleans up spaces on both ends of entry and changes case to lower case
const scrubInput = (word) => {
  return word.trim().toLowerCase();
}
//checks for vowel as first index of string.
const chkForVowelStart = (word) => {
  if (word[0] === 'a' || 
      word[0] === 'e' || 
      word[0] === 'i' || 
      word[0] === 'o' || 
      word[0] === 'u') {
    return true;
  }
}
//checks all words starting with consonants and determines how to handle according to test case
const startsWithConsonant = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']; //list of vowels
  let firstVowel; //will hold index position of first vowel using let since undefined
  for (let i = 0; i < vowels.length; i++) {  //iterates through vowels array to find first vowel index
    const vowelIndex = word.indexOf(vowels[i]); //assigns variable to store each iteration of a vowel in word
    if (vowelIndex >= 0 &&  // checking to make sure no -1 
      (!firstVowel || 
        firstVowel > vowelIndex )) { //finds position of first vowel index using comparison 
        firstVowel = vowelIndex; //reassigns firstVowel to the smallest vowelIndex found        
      }
    }  
  const toFirstVowel = word.slice(0,firstVowel); //stores first index through first vowel (exclusive) of word
  const firstVowelToEnd = word.slice(firstVowel,word.length); //stores first vowel thrugh end of word
    return firstVowelToEnd+toFirstVowel+"ay" //returns concat of above variables and 'ay' to make piglatin word
}
//main game function
function pigLatin(word) {
  if (strIsValid(word)) {   
    word = scrubInput(word); //since function returns value it needs to be reassigned  
    if (chkForVowelStart(word)) {
      return word + 'yay';
    } else {
      return startsWithConsonant(word); //returns value of words starting with consonant
    }  
  }else {
    return "Please enter a word."
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

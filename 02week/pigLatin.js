/*'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});*/



const pigLatin = (word)  => {
 word = word.toLowerCase().trim();
  if(checkWord(word.charAt(0))){
    return word + "yay"; 
  }else if(checkWord(word.charAt(1))){
  //else if(checkWord(word.indexOf[1]))
    return word.slice(1) + word.charAt(0) + 'ay';
  }
  else if(checkWord(word.charAt(2))){//?? two word slice methods below???
    return word.slice(2) + word.slice(0, 2) + 'ay';
  }
  else if(checkWord(word.charAt(3))){
    return word.slice(3) + word.slice(0,3) + 'ay';
  }
  else
    return "Invalid input" 
};

const checkWord = (word) =>{
  //go through the word and 
  //the if statement checks the word for the vowel
    if(word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u'){
      return true;        
      //seperate the word where the vowel is found, and implement the part1, part2,part3 values  
    }
    else{
        return false;
    }

};
console.log(checkWord('dog'));
console.log(pigLatin('valley'));
console.log("Hello");
//pigLatin( ,);
//??????
//vowelCheck = word.match(/aeiou/gi);
//use a for loop to find tne position of the first vowel
//use indexOf to find the vowel






//1. if the word starts with a vowel, add "yay" to the end
//2. if the word has a vowel:
// a. find the first vowel.
// b. split the word into 2 parts:
// - starting at the beginning and stopping just before the first vowel
// - starting at the first vowel and to the end of the word
// c. make a new word, where you flip the 2 parts
// d. add "ay" to the end of the new word`
  // Your code here




const getPrompt = () => {
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

};

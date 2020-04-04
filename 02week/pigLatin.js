'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {
 word = word.toLowerCase().trim();
//const vowels = ['a', 'e', 'i', 'o', 'u'];
//for(let i = 0; i <= word; i++){

  if(checkWord.charAt(word[0]) != -1){
    word.concat("yay"); 
}
  else if(checkWord(word.indexOf[1]) //???? May just be able to use the checkWord function inside the else if... 
  {
  part1 = word;
  part2 = 
  part3 = part2 + part1;
    part3.concat("ay");
  //for(let i = 0; i <= vowels.length; i++){}
}else{
  //if no vowel
}
};

const checkWord = (word) =>{
  //go through the word and 
  //the if statement checks the word for the vowel
    if(word === 'a' || word === 'e' || word === 'i' || word === 'o' || word === 'u'){
              
      //seperate the word where the vowel is found, and implement the part1, part2,part3 values  
    }
    else{
        return false;
    }

}
console.log(checkword(tourist));
pigLatin( ,);
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

}

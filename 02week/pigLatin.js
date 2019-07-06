'use strict';

//I dont need this block of code because I'm taking user input from a textarea instead of a readline

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let finalPhrase = [];

function pigLatin(word) {
  //the first thing I need to do is to create an array of just words. If the user puts in multiple words, this condition should separate these words and add them to an array I called twoWords
  let twoWords = word.split(' ');

//once I have each word as an array, I'm going to create another array of just letters (for each word). Using a for loop, I'm going to cy 
  for (let x=0; x < twoWords.length; x++){
    let pigString = twoWords[x];
    pigString = pigString.trim().toLowerCase().split('');
//breaks two words into two arrays

  let newWord = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  if (vowels.includes(pigString[0])) {
    newWord = pigString.join('') + 'ay';
    finalPhrase.push(newWord);
  }  
  else {

    for (let i = 0; i < pigString.length; i++) {
      let yArray = ['y'];
      let ohArray = ['o', 'u']

      if (! (vowels.includes(pigString[i]))){
        newWord.push(pigString[i]);
      } else if (ohArray.includes(pigString[1])) {
        newWord.push(pigString[0]);
      } else if (yArray.includes(pigString[i])) {
        newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay';
      } else {
        newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay';
        break;    
      };
    };
  finalPhrase.push(newWord);
  };
  finalPhrase.join(' ');
};
};
//I won't need this function anymore because I am taking user input from a textarea on a webpage.

function getPrompt() {
  rl.question('phrase: ', (answer) => {
    pigLatin(answer);
    console.log( finalPhrase.join(' ') );
    getPrompt();
    function empty(){
      finalPhrase.length = 0;
    };
    empty();
  });
};



//this area is where I will work on an online version of my pig latin translator. I will need to manipulate the DOM

//first, I need to take text from the user's input and run it through my pig latin function. this will only work with an onClick function. Other examples I've seen convert in real-time, but I want my users to submit via a button to run the function

// let userPhrase = document.getElementById("input").value;

//i've created a variable called userPhrase that takes in the value of whatever the user types into my textarea box on the webpage. Now, I want to make a function that runs my pig latin translator whenever the user clicks the translate button

// document.getElementById("translateButton").onclick = function () {returnTranslation()};

// function returnTranslation() {
//   pigLatin(userPhrase);
//   document.getElementById("output").innerHTML = finalPhrase.join(' ');
//   function empty(){
//     finalPhrase.length = 0;
//   };
//   empty();  
// }

// Tests - I'm not using these for the website I'm building

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

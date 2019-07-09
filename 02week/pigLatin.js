'use strict';

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
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(pigString[0])) {
    newWord = pigString.join('') + 'ay';
    finalPhrase.push(newWord);
  }  
   else {

    for (let i = 0; i < pigString.length; i++) {
      let yArray = ['y'];
      let ohArray = ['o', 'u']
      // if i is not a vowel
      if ((! (vowels.includes(pigString[i]))) && (! yArray.includes(pigString[0]))){
        // push the consonant to newWord
        if (yArray.includes(pigString[i])) {
          newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay';
          return newWord;
        } else {
          newWord.push(pigString[i]);
        }
      } else if ( (yArray.includes(pigString[0])) && (ohArray.includes(pigString[1])) ) {
        console.log(2)
         newWord = pigString.slice(1, pigString.length).concat(newWord).join('') + 'yay';
         return newWord;
         break;
      } else {
        console.log(3)
        newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay'; 
        break;
      };
    };
    finalPhrase.push(newWord);
    console.log('3 return: ' + newWord);
    console.log('4 return: ' + finalPhrase);
    return newWord;
  };
};
};


//i've created a variable called userPhrase that takes in the value of whatever the user types into my textarea box on the webpage. Now, I want to make a function that runs my pig latin translator whenever the user clicks the translate button

document.getElementById("translateButton").onclick = function () {returnTranslation()};

function returnTranslation() {
  let userPhrase = document.getElementById("input").value;
  console.log('1 ' + userPhrase);
  pigLatin(userPhrase);
  console.log('word: ' + pigLatin(userPhrase))
  console.log('finalPhrase: ' + finalPhrase.join(' '))
  document.getElementById("output").innerHTML = pigLatin(userPhrase);
  function empty(){
    finalPhrase.length = 0;
  };
  empty();  
};
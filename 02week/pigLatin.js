'use strict';
//this is a global variable, but I can't get the translator to work without it yet
let finalPhrase = [];

function pigLatin(word) {
  //the first thing I need to do is to create an array of just words. If the user puts in multiple words, this condition should separate these words and add them to an array I called twoWords
  let twoWords = word.split(' ');


//once I have each word as an array, I'm going to create another array of just letters (for each word).
  for (let x=0; x < twoWords.length; x++){
    let pigString = twoWords[x];
    pigString = pigString.trim().toLowerCase().split('');
//breaks two words into two arrays

  let newWord = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  //if the word starts with a vowel, all I need to do is push the word and add ay at the end
  if (vowels.includes(pigString[0])) {
    newWord = pigString.join('') + 'ay';
    finalPhrase.push(newWord);
  }  
  //if the word doesn't start with a vowel, things get more complicated
   else {
    for (let i = 0; i < pigString.length; i++) {
      let yArray = ['y'];
      let ohArray = ['o', 'u']
      // if i is not a vowel and doesn't start with y, then I want to check to see if there are any vowels at all, or only y's (such as spy, sky, my, etc.)
      if ((! (vowels.includes(pigString[i]))) && (! yArray.includes(pigString[0]))){
        // push the consonant to newWord
        if (yArray.includes(pigString[i])) {
          newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay';
        } else {
          newWord.push(pigString[i]);
        }
      //some words have a y, but it doesn't act like a vowel. The only common words I can think of are you, yours, yourself, yussef, etc. For these words, I want y to be treated as a consonant still
      } else if ( (yArray.includes(pigString[0])) && (ohArray.includes(pigString[1])) ) {
         newWord = pigString.slice(1, pigString.length).concat(newWord).join('') + 'yay';
         break;
      //once the vowel is reached, slice it and serve it
      } else {
        newWord = pigString.slice(i, pigString.length).concat(newWord).join('') + 'ay'; 
        break;
      };
    };
    //there's something wrong with this step because my output is returning the entire input twice. Very disturbing
    finalPhrase.push(newWord);
  };
};
return finalPhrase.join(' ');
};


//i've created a variable called userPhrase that takes in the value of whatever the user types into my textarea box on the webpage. Now, I want to make a function that runs my pig latin translator whenever the user clicks the translate button

document.getElementById("translateButton").onclick = function () {returnTranslation()};

//onclick function here
function returnTranslation() {
  let userPhrase = document.getElementById("input").value;
  pigLatin(userPhrase);
  document.getElementById("output").innerHTML = pigLatin(userPhrase);
  function empty(){
    finalPhrase.length = 0;
  };
  //calling this function at the end returns the temporary array to empty and keeps the generated text from building up on itself
  empty();  
};

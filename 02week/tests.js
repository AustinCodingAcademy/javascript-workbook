'use strict';

function pigLatin(word) {//Return function to original page
  // Your code here

  const vowels = ['a','e','i','o','u','y'];
  const splitWord = word.split('');//['c','a','r']
  
  let ending, vowelPositions = new Array('a','y');
  let firstVowelPosition = new Number();
  let firstLetter = splitWord[0];


    if (vowels.includes(firstLetter)) {//is the firest letter a vowel?
      const myTranslation = word.concat('yay'); //then add 'yay' and we are done!
      return myTranslation;
    } else {
 
      splitWord.push((splitWord.shift()));//send the first consonant to end
      // let myTranslation = splitWord.concat(ending);
      for (let i=1;i<splitWord.length;i++) {
        //check the next letters (is or isNotVowel)
        if (vowels.includes(splitWord[i])===false) {//if not vowel
          splitWord.push((splitWord.shift()));
        } else {
          splitWord.push(ending);
          return splitWord.join('');
        }
      }

    } 
  }
//Get Started
let myTranslation = pigLatin('create');
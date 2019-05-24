"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // Your code here

// const pigLatin = word => {
//   // created variables that trim a word and splits word into a string
//   const newWord = word.trim("");
//   const wordArray = newWord.split("");
//   // created an array of vowels
//   const vowelArray = ["a,e,i,o,u"];
//   if (
//     wordArray[0] === "a" ||
//     wordArray[0] === "e" ||
//     wordArray[0] === "i" ||
//     wordArray[0] === "o" ||
//     wordArray[0] === "u"
//   ) {
//     // method used to add way to the end 'new word' array
//     const yay = "way";
//     wordArray.push(yay);
//     // joining the string to create a 'new word'
//     return wordArray.join("");
//   } else {
//     const word = wordArray;
//     // created a loop that will go through my array and split ....
//     for (let i = 0; i < wordArray.length - 1; i++) {
//       if (
//         wordArray[i] !== "a" &&
//         wordArray[i] !== "e" &&
//         wordArray[i] !== "i" &&
//         wordArray[i] !== "o" &&
//         wordArray[i] !== "u"
//       ) {

//       } else {
//         break;
//       }
//     }
//     const addLetters = "ay";
//     word.push(addLetters);
//     return word.join("");
//   }
// };

const pigLatin = word => {
  // makes array that split the passed in word 
  // into an array uses trim and lowercase the numbers

  let wordArray = word.toLowerCase().trim().split("");
  // creates an array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  
  // Your code here
  
  if (vowels.includes(word[0])) {
    // adds way to the end of words that start with a vowel
    return (word += "way");
  } else {
    //loop starts at the 0 in the array until it get to a vowel
    for (let i = 0; i < wordArray.length; i++) {
      if (!vowels.includes(wordArray[i])) {
        //pushes the last element to the end and shift removes the first item
        wordArray.push(wordArray.shift());
        i--;
      } else {
        // push "ay" to the end of the array
        wordArray.push("ay");
        return wordArray.join("");
      }
    }
  }
  };
  
  


function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "way" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggway");
      assert.equal(pigLatin("emission"), "emissionway");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}

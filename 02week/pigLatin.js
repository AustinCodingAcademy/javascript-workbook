"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// declare global variables

let vowel = "";
let backOfWord = "";
let i = 0;
let j = 0;

function pigLatin(word) {
  // Your code here
  // find the first vowel,
  //checking for vowel
  backOfWord = "";
  word = word.toLowerCase().trim();
  checkEachLetter(word);
  word = word.substring(backOfWord.length);
  //console log
  word += backOfWord;
  //console log
  if (i === 0) {
    word += "yay";
  } else {
    word += "ay";
  }
  //console log
  return word;

  // //for (let i = 0; i < wordVowelConditions.length; i++) {
  //   if (word === "a" && word) {
  //     return vowel;
  //   }
}
//define all vowels, create an array, iterate through word until we find a vowel
// index of first
//take everything before that vowel and it to the end
//after that add an ay to the end of the new word
//}

// checking each letter of word
function checkEachLetter(checkWord) {
  let wordVowelConditions = ["a", "e", "i", "o", "u"];
  for (i = 0; i < checkWord.length; i++) {
    console.log("checking for letter " + checkWord[i]);

    // checking if letter is a vowel
    for (j = 0; j < wordVowelConditions.length; j++) {
      console.log(
        "checking if letter " +
          checkWord[i] +
          " equals vowel " +
          wordVowelConditions[j]
      );
      // add letters to backOfWord before vowels

      //if letter equals a vowel determine that and  assign it to vowel variable.
      if (checkWord[i] === wordVowelConditions[j]) {
        console.log(
          "letter " + checkWord[i] + " equals " + wordVowelConditions[j]
        );
        vowel = wordVowelConditions[j];
        return;
      }
    }

    // if no letters equal a vowel
    console.log("letter " + checkWord[i] + " does not equal any vowels");
    backOfWord += checkWord[i];
    console.log(" checking backofword " + backOfWord);
  }
  return checkWord;
}
function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    i = 0;
    j = 0;
    backOfWord = "";
    vowel = "";
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
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
  });
} else {
  getPrompt();
}

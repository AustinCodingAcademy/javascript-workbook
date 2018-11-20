"use strict"

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//declaration of global varaibles
let vowel = "";
let backOfWord = "";
let i = 0;
let j = 0;

//pigLatin function with variables that handle next steps and applying other letter to words after certain criteria are met.
function pigLatin(word) {
  backOfWord = "";
  word = word.toLowerCase().trim();
  checkEachLetter(word);
  word = word.substring(backOfWord.length);
  word += backOfWord;
  console.log(backOfWord);
  if (i === 0) {
    word += "yay";
  } else {
    word += "ay";
  }
  return word;
}
//function for checking each letter of word
function checkEachLetter(checkLetter) {

  let wordVowelConditions = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < checkLetter.length; i++) {
    console.log("checking letter " + checkLetter[i])

    //checking for Vowel
    //nested for loop?
    for (let j = 0; j < wordVowelConditions.length; j++) {
      console.log("checking if letter " + checkLetter[i] + " is a vowel " + wordVowelConditions[j]);

      if (checkLetter[i] === wordVowelConditions[j]) {
        console.log("letter " + checkLetter[i] + " equals " + wordVowelConditions[j]);
        vowel = wordVowelConditions[j];
        return;
      }
    }
    // no letter equals a vowel
    console.log("letter " + checkLetter[i] + " does not equal any vowels");
    backOfWord += checkLetter[i];
  }
  return checkLetter;
}

//resetting input after each word
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
//testing

if (typeof describe === "function") {
  describe("pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatcray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equak(pigLatin("emission"), "emmisionyay");
    });
    it("should lowercase and trim words before translation", () => {
      assert.equal(pigLatin("HeLio "), "ellohay");
      assert.equal(pigLatin(" rOcKeT"), "ocketray");
    });
  });
} else {
  getPrompt();
}
"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vowel = "";
let backofWord = "";
let i = 0;
let j = 0;

function pigLatin(word) {
  // Your code here
  backofWord = "";

  console.log(word);
  word = normalize(word);

  //Find the first vowel
  findFirstVowel(word);

  word = word.substring(backofWord.length);
  console.log("word is now " + word);
  //add backofword to end of original word
  word += backofWord;
  console.log("word is now " + word);

  //add 'ay'
  if (i === 0) {
    word += "yay";
  } else {
    word += "ay";
  }

  console.log("word is now " + word);
  return word;
}

function normalize(wordToNormalize) {
  wordToNormalize = wordToNormalize.toLowerCase().trim();
  return wordToNormalize;
}

function findFirstVowel(wordToCheck) {
  //set up array up vowels
  const vowels = ["a", "e", "i", "o", "u"];

  //loop through word until find first vowel
  for (i = 0; i < wordToCheck.length; i++) {
    console.log("Checking letter " + wordToCheck[i]);

    for (j = 0; j < vowels.length; j++) {
      console.log(
        "Checking if letter " + wordToCheck[i] + " equals letter " + vowels[j]
      );
      if (wordToCheck[i] === vowels[j]) {
        //found vowel
        console.log(
          "Letter " + wordToCheck[i] + " does equal letter " + vowels[j]
        );

        vowel = wordToCheck[i];

        console.log("Vowel found is " + vowel);
        return;
      } else {
        console.log(
          "Letter " + wordToCheck[i] + " does not equal letter " + vowels[j]
        );
      }
    }
    console.log(
      "Letter " +
        wordToCheck[i] +
        " does not equal any vowels. Moving to backOfWord."
    );

    backofWord += wordToCheck[i];
    console.log("backofword is now: " + backofWord);
  }
}

function getPrompt() {
  rl.question("word ", answer => {
    console.log(pigLatin(answer));
    i = 0;
    j = 0;
    backofWord = "";
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

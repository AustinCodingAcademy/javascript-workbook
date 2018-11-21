"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  //normalize the word
  return shiftWord(normalize(word));
}

function normalize(word) {
  return word.toLowerCase().trim();
}

function shiftWord(word) {
  let shiftedWord = word;
  let wordSplit = word.split("");
  if (isVowel(wordSplit[0])) {
    return shiftedWord + "yay";
  }

  for (let i = 0; i < wordSplit.length; i++) {
    if (!isVowel(wordSplit[i])) {
      shiftedWord = moveLetter(shiftedWord);
    } else {
      break;
    }
  }
  return shiftedWord + "ay";
}

function moveLetter(word) {
  return word.substr(1) + word.substr(0, 1);
}

function isVowel(letter) {
  let vowels = ["a", "e", "i", "o", "u"];
  let result = vowels.indexOf(letter);
  return result > -1;
}

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

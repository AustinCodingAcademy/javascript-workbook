"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  // define all the vowels
  // iterate through the word till we find a vowel
  // take everything before that vowel
  // add to the end
  // add ay

  word = word.trim().toLowerCase();
  let word2 = word;
  let append;

  function isVowel(char) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    return vowels.includes(char);
  }

  if (isVowel(word[0])) {
    append = "yay";
  } else {
    for (let i = 1; i < word.length && !append; i++) {
      if (isVowel(word[i])) {
        append = word.slice(0, i) + "ay";
        word2 = word.slice(i);
      }
    }
  }

  return word2 + append;
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

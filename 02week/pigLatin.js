"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  word = word.toLowerCase().trim();
  const vowels = ["a", "e", "i", "o", "u", "y"];
  let append;

  function isVowel(char) {
    if (vowels.includes(char)) {
      return true;
    } else {
      return false;
    }
  }

  if (isVowel(word[0])) {
    append = "yay";
  } else {
    for (let i = 1; i < word.length && !append; i++) {
      if (isVowel(word[i])) {
        append = word.slice(0, i) + "ay";
      }
    }
  }

  word = word + append;

  return word;

  // find the first vowel
  //define all the vowels
  // iterate through the word till we find a vowel

  //take everything before that vowel
  //add to the end
  // add ay
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

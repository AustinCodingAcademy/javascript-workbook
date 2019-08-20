"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  // Global variables
  const vowels = ["a", "e", "i", "o", "u"];
  const splitWord = word.split("");

  // Slice Word at first Vowel
  function firstPart(param1, param2) {
    for (let v = 0; v < vowels.length; v++) {
      for (let w = 0; w < splitWord.length; w++) {
        if (vowels[w] === splitWord[v]) {
          return splitWord.slice(v, splitWord.length);
        }
      }
    }
  }
  console.log(firstPart(vowels, splitWord));
  console.log(splitWord);
}

// Console
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

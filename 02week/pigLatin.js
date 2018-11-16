"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  // Your code here
  // Take the first letters of the word up to the first vowel, move them to the back, and add 'ay' to the end of it
  // split up the string so we can do something with it
  const wordArray = word.split("");

  // find the first vowel
  const vowel = [a, e, i, o, u];
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === vowel[i]) {
      return "success";
    }
  }
  // define all the vowels

  // iterate through the word till we find a vowel

  // take everything before that vowel

  // move it to the end

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

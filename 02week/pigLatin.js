"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(str) {
  // define all the vowels
  // iterate through the word till we find a vowel
  // take everything before that vowel
  // add to the end
  // add ay
  str = str.trim().toLowerCase();
  var vowel = "aeiou";
  var match = -1;
  var index = -1;
  // find index of first vowel
  for (var x = 0; x < str.length && match < 0; x++) {
    match = vowel.indexOf(str.charAt(x));
    if (match >= 0) {
      index = x;
    }
  }

  if (index > 0) {
    str = str.slice(index) + str.substring(0, index) + "ay";
  } else {
    str = str.slice(index) + str.substring(0, index) + "yay";
  }
  return str;
}
// console.log(PigLatin("consonant"));
// console.log(PigLatin("california"));
// console.log(PigLatin("paragraphs"));
// console.log(PigLatin("glove"));
// console.log(PigLatin("algorithm"));
// console.log(PigLatin("eight"));

function getPrompt() {
  rl.question("str", answer => {
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

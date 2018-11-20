"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
  var vowels = ["a", "e", "i", "o", "u"],
    result = word.split(""); //The split() method is used to split a string into an array of substrings, and returns the new array.

  if (vowels.includes(str.CharAt(0))) {
    //charat return characters of specific index
    return (word += "way"); //+="way" plus word // The includes() method determines whether an array includes a certain element
  } else {
    for (var i = 0; i < word.length; i++) {
      //for loop
      if (!vowels.includes(word[i])) {
        result.push(result.shift());
      } else {
        result.push("ay"); //push element to the end
        return result.join(""); //joining element
      }
    }
  }
}
console.log(pigLatin("cat"));

word = word.toLowerCase().trim();
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

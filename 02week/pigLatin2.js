"use wordict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatin(word) {
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
    str = str.slice(index) + str.substring(0, index) + "way";
  }
  return str;
}
console.log(pigLatin("consonant"));
console.log(pigLatin("california"));
console.log(pigLatin("paragraphs"));
console.log(pigLatin("glove"));
console.log(pigLatin("algorithm"));
console.log(pigLatin("eight"));
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
  }


"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Take the first letters of the word up to the first vowel, move them to the back, and add 'ay' to the end of it or 'yay' if word starts with vowel

function firstVowel(word) {
  // find the first vowel
  for (let i = 0; i < word.length; i++) {
    // loop through the word until you find 'if' (which are vowels)
    const vowel = ["a", "e", "i", "o", "u"];
    if (vowel.indexOf(word[i]) != -1) {
      return i; // return the index of the first vowel and use firstVowel() with pigLatin function
    }
  }
}

function pigLatin(word) {
  word = word.toLowerCase().trim(); // convert word to lowercase
  const firstLetter = firstVowel(word);
  if (firstLetter > 0) {
    // if the word doesn't start with a vowel slice it at the first vowel and attach to the end plus 'ay'
    return word.slice(firstLetter) + word.slice(0, firstLetter) + "ay"; //
  } else if (firstLetter === 0) {
    // if the word starts with a vowel just add 'yay' to the end
    return word + "yay";
  } else {
    console.log("you need to enter a vowel");
  }
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

// function pigLatin(word) {
//   // Your code here
//   // Take the first letters of the word up to the first vowel, move them to the back, and add 'ay' to the end of it

//   // split up the string so we can do something with it
//   const wordArray = word.split("");

//   // find the first vowel
//   let vowel = [a, e, i, o, u];

//   // scan through the letters of the word inputted and stop when it gets to the first vowel
//   for (let i = 0; i < wordArray.length; i++) {
//     for (let i = 0; i < vowel.length; i++) {}
//     if (wordArray[i] === vowel[i]) {
//       const pLProgram = "success";
//       return pLProgram;
//     }
//   }

//   // define all the vowels

//   // iterate through the word till we find a vowel

//   // take everything before that vowel

//   // move it to the end

//   // add ay
// }

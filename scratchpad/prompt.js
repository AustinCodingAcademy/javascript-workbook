/*"use strict";

var prompt = require("prompt")

prompt.start();

prompt.get(["first", "second"], function(error, result)) {
  console.log("First Input: " + result["first"]);
  console.log("Second Input: " + result["second"]);

}
*/

function pigLatin (word) {
  var newWord = word.substring(0,1).toLowerCase();

  var oldWord = word.substring(1, word.length).toLowerCase();

  var ending = "ay";

  console.log(oldWord + newWord + ending);
}

pigLatin("Greg");
pigLatin("dog");
pigLatin("create");
pigLatin("Blast HardCheese");

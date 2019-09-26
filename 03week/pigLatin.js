"use strict";

// const assert = require("assert");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
console.log("i am here");

function pigLatin(word) {
  let positionA = word.indexOf("a");
  let positionE = word.indexOf("e");
  let positionI = word.indexOf("i");
  let positionO = word.indexOf("o");
  let positionU = word.indexOf("u");
  //sets all the words to lowercase and trims them
  word = word.trim().toLowerCase();
  //splitting word into indivudual letters
  var splitWord = word.split("");
  if (
    positionA == 0 ||
    positionE == 0 ||
    positionI == 0 ||
    positionO == 0 ||
    positionU === 0
  ) {
    return word + "yay";
  } else {
    return (
      splitWord
        .slice(positionA || positionE || positionI || positionO || positionU)
        .join("") +
      splitWord
        .slice(0, positionA || positionE || positionI || positionO || positionU)
        .join("") +
      "ay"
    );
  }
}

function handleTranslate() {
  console.log("lol handleTranslate()");
  //get input value from input box
  var inputBox = document.getElementById("plainText");
  console.log(inputBox);
  var englishWord = inputBox.value;
  console.log(englishWord);

  //call the pig latin function wiht this value
  var pigLatinWord = pigLatin(englishWord);
  console.log(pigLatinWord);
  //write the result that the pig latin function returns to the screen
  var spanElement = document.getElementById("pigLatinText");
  console.log(spanElement);

  spanElement.innerText = pigLatinWord;
}

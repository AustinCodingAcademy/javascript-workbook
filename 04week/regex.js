// let re = /p+l/;
// const re = new RegEx('p+l')
let firstPart = /^austin/;
let lastPart = /t!$/;
let fullWord = /^austin coding academy$/;
let middle = /a+c/;

let startingWord = "austin coding academy is the best!";
let section = startingWord.search(/coding/i);
console.log(section);
let replaceIt = startingWord.replace("coding", "running");
console.log(replaceIt);


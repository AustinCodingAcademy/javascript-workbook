function test(){
  console.log("hello")
}

function translateWord(){
  let input = document.getElementById("english").value;
  let output = document.getElementById("pig_latin");
  let translated = pigLatin(input);
  output.innerHTML = translated;

}

function pigLatin(word) {
  
  let tempWord = word.trim().toLowerCase();
  tempWord = tempWord.split("");
  if (
    tempWord[0] === "a" ||
    tempWord[0] === "e" ||
    tempWord[0] === "i" ||
    tempWord[0] === "o" ||
    tempWord[0] === "u"
  ) {
    const yay = "yay";
    tempWord = tempWord.join("").concat(yay);

    console.log(tempWord);
    return tempWord;
  } else {
    let consonantWord = [];
    for (let i = 0; i < word.length; i++) {
      if (
        tempWord[i] !== "a" &&
        tempWord[i] !== "e" &&
        tempWord[i] !== "i" &&
        tempWord[i] !== "o" &&
        tempWord[i] !== "u"
      ) {
        consonantWord.push(tempWord[i]);
      } else {
        let oldWorld = tempWord.slice(i, tempWord.length).join("");
        consonantWord = consonantWord.join("");
        oldWorld = oldWorld.concat(consonantWord) + "ay";
        console.log(oldWorld);
        return oldWorld;
        break;
      }
    }
  }
}
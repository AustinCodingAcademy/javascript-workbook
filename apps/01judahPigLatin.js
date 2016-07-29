var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];


function pigLatin(word){
  //want to assign first part to var
    //so I can add that var to end of word and concatenate
  var firstPartWord = firstPart(word);
  var newWord = word.replace(firstPartWord,"") + firstPartWord + "ay";
  return newWord;

}

function firstPart(word){
  var newWord = word + "firstpart";
  for(i = 0; i < word.length; i++){
    // console.log(word[i]);
    for(j = 0; j < vowels.length; j++){
      // console.log(vowels[j]);
      if(word[i].toLowerCase() === vowels[j].toLowerCase()){
        return word.slice(0,i);
      }
    }
  }
}

console.log(pigLatin('pfluggerville'));

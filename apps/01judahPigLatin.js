var vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];

function firstPart(word){
  var newWord = word + "firstpart";
  for(i = 0; i < word.length; i++){
    // console.log(word[i]);
    for(j = 0; j < vowels.length; j++){
      // console.log(vowels[j]);
      if(word[i].toLowerCase() === vowels[j].toLowerCase()){
        firstPart = word.slice(0,i);
        return firstPart;
      }
    }
  }
}

function pigLatin(word){
  //want to assign first part to var
    //so I can add that var to end of word and concatenate
  return firstPart(word);
}


console.log(pigLatin('tripper'));

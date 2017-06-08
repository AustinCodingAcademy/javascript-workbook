'use strict';

function pigLatin(word) {
  var vowel = ['a', 'e'. 'i', 'o', 'u', 'y'];
  var small = word.toLowerCase();
  var split = small.split("");

  //Word starts with vowel
  if(vowel.includes(split[0])){
    return(small + "yay");
  }

  //Simple word
  else if(split.length === 3){
    var body = small.slice(i)
    return(body+split[0] + "ay");
  }

  //2nd letter vowel
  else if(vowel.includes(split[i])){
    var body = small.slice(i)
    return(body + split[0] + "ay");
  }

  //3rd letter vowel
  else if(vowel.includes(split[2])){
    var body = small.slice(2)
    return(body + split[0]) + split[1] + "ay");
  }
};

function longestString(sentence) {
  
    let sentenceArr = sentence.trim().split(" ");
    let longestCandidate = sentenceArr[0];
    for (let i=0; i< sentenceArr.length; i++) {
      let currentWord = sentenceArr[i];
      if (currentWord.length > longestCandidate.length) {
        longestCandidate = currentWord;
      }
    }
    return longestCandidate;
      
    }
    console.log(longestString("The lazy dog jumped over the brown cow")); 
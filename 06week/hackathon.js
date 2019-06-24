const str1 = "The quick brown fox jumps over the lazy dog and the sleeping cat early i666n the day??";

const str2 = "doggie$$$";
// const isAlphabet = /^[A-Za-z]+$/;


const getFrequency = word => {
    word = word.replace(/[^A-Za-z]/g, ' ');
    word = word.replace(/\s/g, '')
    var freq = {};
    for (var i=0; i< word.length;i++) {
        var character = word.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};

getFrequency(str2);
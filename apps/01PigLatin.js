'use strict';

var assert = require('assert');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function pigLatin(word) {
    word = word.toLowerCase();
    // var prompt = require('prompt');
    // prompt.get(["Enter a word"], function(word, ))
    var firstLetter = word[0];
    console.log(firstLetter);
    //

    var vowelIndex = -1;
    if ((word.indexOf('a') > -1 && word.indexOf('a') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('a');
    }
    if ((word.indexOf('e') > -1 && word.indexOf('e') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('e');
    }
    if ((word.indexOf('i') > -1 && word.indexOf('i') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('i');
    }
    if ((word.indexOf('o') > -1 && word.indexOf('o') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('ao');
    }
    if ((word.indexOf('u') > -1 && word.indexOf('u') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('u');
    }
    if ((word.indexOf('y') > -1 && word.indexOf('y') < vowelIndex) || vowelIndex === -1) {
        vowelIndex = word.indexOf('y');
    }
    var firstPart = word.slice(0, vowelIndex);
    var restWord = word.slice(vowelIndex, word.length);
    console.log("First word", firstPart);
    console.log("Rest word", restWord);
    return restWord + firstPart + 'ay';

    return word.replace(firstLetter, '') + firstLetter + 'ay';

    if (vowelIndex === 0) {
        return word + 'yay';
    } else {
        return restWord + firstPart + 'ay'
    }
}

//
//
// Your code here




function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', function() {
        it('should translate a simple word', function() {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', function() {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', function() {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should auto lowercase word before translation', function() {
            assert.equal(pigLatin('HeLlO'), 'ellohay');
            assert.equal(pigLatin('RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}

//MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git status
// On branch gh-pages
// Your branch is up-to-date with 'origin/gh-pages'.
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git checkout -- <file>..." to discard changes in working directory)
//
//         modified:   apps/01PigLatin.js
//         modified:   homework/01LessonOne.js
//
// no changes added to commit (use "git add" and/or "git commit -a")
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git add apps/01PigLatin.js
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git status
// On branch gh-pages
// Your branch is up-to-date with 'origin/gh-pages'.
// Changes to be committed:
//   (use "git reset HEAD <file>..." to unstage)
//
//         modified:   apps/01PigLatin.js
//
// Changes not staged for commit:
//   (use "git add <file>..." to update what will be committed)
//   (use "git checkout -- <file>..." to discard changes in working directory)
//
//         modified:   homework/01LessonOne.js
//
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git add homework/01LessonOne.js
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git status
// On branch gh-pages
// Your branch is up-to-date with 'origin/gh-pages'.
// Changes to be committed:
//   (use "git reset HEAD <file>..." to unstage)
//
//         modified:   apps/01PigLatin.js
//         modified:   homework/01LessonOne.js
//
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git commit -m "First Week - Second class"
// [gh-pages 2b7033a] First Week - Second class
//  2 files changed, 121 insertions(+), 78 deletions(-)
//  rewrite apps/01PigLatin.js (75%)
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git push origin gh-pages
// Counting objects: 6, done.
// Delta compression using up to 8 threads.
// Compressing objects: 100% (6/6), done.
// Writing objects: 100% (6/6), 1.41 KiB | 0 bytes/s, done.
// Total 6 (delta 4), reused 0 (delta 0)
// remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
// To github.com:Morgakd/javascript-workbook.git
//    bef441c..2b7033a  gh-pages -> gh-pages
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $ git status
// On branch gh-pages
// Your branch is up-to-date with 'origin/gh-pages'.
// nothing to commit, working tree clean
//
// MDean@PC053025 MINGW64 ~/Documents/GitHub/javascript-workbook (gh-pages)
// $

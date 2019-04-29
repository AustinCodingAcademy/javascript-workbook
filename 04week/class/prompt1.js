const unsortedScores = [37, 89, 41, 65, 91, 53, 100];

var numbersInDesc = unsortedScores.sort(function(a, b) {
    return b-a;
});
console.log(numbersInDesc);
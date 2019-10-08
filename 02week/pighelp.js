let word = "elephant";

let positionA = word.indexOf("a");
let positionE = word.indexOf("E");

console.log("position of A = ", positionA);
console.log("position of E =", positionE);
console.log("position of I =", positionI);

//

var numbers = [5, 3, 72, 8, 3, 55];

var currentMax = null;
for (var index = 0; index < numbers.length; index++) {
  var numberToLookAt = numbers[index];
  if (currentMax == null) {
    currentMax = numberToLookAt;
  } else if (currentMax < numberToLookAt) {
    currentMax = numberToLookAt;
  }
}

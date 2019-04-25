let array = [3,2,1];

// function reverse(a) {
//     let x = a.reverse();
//     return x;
// }
// const reversal = reverse(array);
// console.log(reversal);

function reverseArray(arr) {
    var newArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
}
const answer = reverseArray(array);
console.log(answer);
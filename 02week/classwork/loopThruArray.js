// Take array of numbers, raise them by power of 2 and return sum of the array.

let arr1 = [4];
let arr2 = [];
let sum = "";

for (let i = 0; i < arr1.length; i++) {
  arr2 = arr1[i] * arr1[i];
  sum = arr2 + arr2;
}
//console.log(arr2);
console.log(sum);

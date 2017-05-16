let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(x) {
  return x % 2 === 0;
}
let filtered = number.filter(isEven);
console.log(filtered);

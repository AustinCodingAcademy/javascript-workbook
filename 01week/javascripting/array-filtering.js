let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenNumbers(number) {
  return (number % 2 === 0);
}
let filtered = numbers.filter(evenNumbers);
console.log(filtered);

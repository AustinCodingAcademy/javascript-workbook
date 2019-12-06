let numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

filtered = numbers.filter(evenNumbers = (number) => {
  return number % 2 === 0
});

console.log(filtered);
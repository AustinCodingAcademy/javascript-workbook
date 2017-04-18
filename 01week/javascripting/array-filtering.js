function evenNumbers(number) {
    return number % 2 == 0;
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(evenNumbers);
console.log(numbers); // prints out [2, 4, 6]

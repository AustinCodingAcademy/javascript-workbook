// length
var cars = ["ford", "chevy", "vauxhall", "toyota"];
console.log(cars.length);
//get 4 as result

// concat
var moreCars = ["kia", "hyundai", "porsche", "honda"];
var totalCars = cars.concat(moreCars);
console.log(totalCars);
//this returns a column of 'ford','chevy','vauxhall','toyota','kia','hyundai','porsche','honda'


// indexOf
totalCars.indexOf(7);
console.log(totalCars[7]);
//this returns honda

//lastIndexOf
totalCars.lastIndexOf(0);
console.log(totalCars[0]);
//this returns ford

// join -(into a string)
totalCars.join('');
stringOfCars= totalCars.toString();
console.log(stringOfCars);
// this returns a row with only commas: ford,chevy,vauxhall,toyota,kia,hyundai,porsche,honda

// split
var totalCars = stringOfCars.split();
console.log(totalCars);
// blank parentheses returns a row with brackets/tics/commas: [ 'ford,chevy,vauxhall,toyota,kia,hyundai,porsche,honda' ]
//note that using '' in the parentheses resulted in column of the individual letters of the values

// reverse
var carsInReverse = totalCars.reverse();
console.log(carsInReverse);
//made this go back to orig carsInReverse from concat string, it returns a column of [ 'honda','porsche','hyundai','kia','toyota','vauxhall','chevy','ford' ]

// sort
carsInReverse.sort();
console.log(carsInReverse);
//my prediction including location ID is:  0chevy 1ford 2honda 3hyundai 4kia 5porsche 6toyota 7vauxhall
//outcome is [ 'chevy', 'ford', 'honda', 'hyundai', 'kia', 'porsche', 'toyota', 'vauxhall' ]
//from directions- how to use this? -- alert(carsInReverse.indexOf('yourPrediction'));


//slice
var removedCars = carsInReverse.slice(1, 7);
console.log(removedCars);
//this var references the sorted string above--removed chevy and vauxhall, returned row of [ 'ford', 'honda', 'hyundai', 'kia', 'porsche', 'toyota' ]


// splice
var removed = carsInReverse.splice(1, 2, "ford", "honda");
console.log(carsInReverse);
// returned column of ['chevy','ford','honda','hyundai','kia','porsche', 'toyota','vauxhall' ]
console.log(removed);
//returned the removed cars with row of [ 'ford', 'honda' ]


//push
carsInReverse.push("porsche", "hyundai");
console.log(carsInReverse);
//returned a column with porsche and hyundai added at the end


//pop
carsInReverse.pop(7);
console.log(carsInReverse);
//hyundai from the end was removed first try- later reattempted
// =========================no longer true repl.it added porsche 2x and kept hyundai?


//shift
var shifted = carsInReverse.shift(0);
console.log(shifted);
//this returned the first element ["chevy"]


//unshift
carsInReverse.unshift("subaru");
console.log(carsInReverse);
//returns a column adding subaru as the first element of 9


//forEach
let numbers = [23, 45, 0, 2];
let newNumbers = [];

function AddToNewArray (elem) {
    newNumbers.push (elem + 2);
}
if (numbers.forEach) {
    numbers.forEach (AddToNewArray);
    console.log(newNumbers);
} else {
    alert ("Your browser does not support forEach method");
}
//returns a row of [ 25, 47, 2, 4 ]

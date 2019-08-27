var cars = ['ford', 'mazda', 'kia', 'toyota']

console.log(cars.length)

var moreCars = ['dodge', 'lexus', 'chevy', 'honda']

var totalCars = cars.concat(moreCars)

console.log(totalCars)

var honda = totalCars.indexOf('honda')

 console.log(honda)

 var ford = totalCars.lastIndexOf('ford')

 console.log(ford)

 var stringOfCars = totalCars.join(';')
 console.log(stringOfCars)
 
 var totalCars=stringOfCars.split(';')
 console.log(totalCars)

 var carsInReverse = totalCars.reverse()
 console.log(carsInReverse)

 console.log(carsInReverse.sort())

// alert((carsInReverse.indexOf('chevy')))

 var removedCars = carsInReverse.slice(2 , 4)
 
 console.log(removedCars)

carsInReverse.splice(1 , 2 , "ford", "honda") 
console.log(carsInReverse)

carsInReverse.push("dodge", "ford")
console.log(carsInReverse)

var popped = carsInReverse.pop()
console.log(popped)

var shifted = carsInReverse.shift()
console.log(shifted)

carsInReverse.unshift("Tesla")
console.log(carsInReverse)

var numbers = [23 , 45, 0, 2 ]

numbers.forEach(function(element) {
 console.log(element + 2)
});

//array1.forEach(function(element) {
  //console.log(element);
//});
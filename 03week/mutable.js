// length is immutable
var cars = ['ford','mazda','caddilac','bently'] 
console.log(cars.length)

// concat is immutable
var moreCars = ['subaru','jeep','chevy','honda']
var totalCars = cars.concat(moreCars)
console.log(totalCars, moreCars);

// indexOf and lastIndexOf are immutable
console.log(totalCars.indexOf('honda'))
console.log(totalCars.lastIndexOf('ford'))

// join is immutable
var stringOfCars = totalCars.join()
console.log(stringOfCars, totalCars);

// split is immutable
var totalCars1 = stringOfCars.split()
console.log(stringOfCars, totalCars1)

// reverse is mutable
var carsInReverse = totalCars.reverse()
console.log(carsInReverse, totalCars)

// sort is mutable
carsInReverse.sort()
console.log(carsInReverse.indexOf('bently'), carsInReverse)

// slice is immutable
var removedCars = carsInReverse.slice(3, 5)
console.log('removed', removedCars, carsInReverse)

// splice is mutable
carsInReverse.splice(1, 2, 'Ford', 'Honda')
console.log(carsInReverse)

// push is mutable
carsInReverse.push('caddilac','chevy')
console.log(carsInReverse);

// pop is mutable
console.log(carsInReverse.pop(), carsInReverse)

//shift is mutable
console.log(carsInReverse.shift(), carsInReverse);

//unshift is mutable
carsInReverse.unshift('Ferrari')
console.log(carsInReverse)

// forEach is immutable
var numbers = [23,45,0,2]
numbers.forEach(function(number) {
console.log(number + 2);
})
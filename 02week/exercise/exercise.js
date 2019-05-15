// .length
let cars = ['Ford', 'Chevy', "GMC", "Dodge"]
console.log(cars.length)

// more strings
let mCars = ['Toyota', 'Mazda', 'Acura', 'Honda']
let numbers = [ 23, 45, 0, 2]


// .concat
let totalCars = cars.concat(mCars) 
console.log(totalCars)


//indexOF andlast indexOf
var n = totalCars.indexOf('Honda')
var m = cars.lastIndexOf('Ford')
console.log(n)
console.log(m)

// .join
var stringOfCars = (totalCars.join(' '))
console.log(stringOfCars)

//split
var res = stringOfCars.split('');
console.log(res)

//reverse
var carsInReverse = totalCars.reverse();
console.log(carsInReverse)

//sort
var l = carsInReverse.sort()
console.log(l)

//slice
var removedCars = carsInReverse.slice(0, 1) + " " + carsInReverse.slice(-1);
console.log(removedCars)

//splice
var k = carsInReverse.splice(1, 2, 'Honda', 'Ford')
console.log(k)

//push
var j = k.push('Honda', 'Ford')
console.log(j)
//pop
var p = carsInReverse.pop()
console.log(p)
//shift
var a = carsInReverse.shift()
console.log(a)
//unshift
var v = carsInReverse.unshift('Jeep')
console.log(v)

//forEach
let numbers = [ 23, 45, 0, 2]
numbers.forEach(function(add) {
    console.log(add + 2);
});
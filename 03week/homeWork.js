// //************************************** */
// // Number 1 ----- Length - Imutable
// //************************************** */

let cars = ["ford", "mazda", "toyota", "subaru"];
// console.log(cars.length);

// //************************************** */
// // Number 2 ----- Concat - Imutable
// //************************************** */

let moreCars = ["audi", "lexus", "lambo", "honda"];

let totalCars = cars.concat(moreCars);
// console.log(cars, totalCars);

// //************************************** */
// // Number 3 ----- IndexOf and lastIndexOf - Imutable
// //************************************** */

// console.log('index of honda = ' + moreCars.indexOf('honda'))
// console.log('index of ford = ' + cars.lastIndexOf('ford'))

// //************************************** */
// // Number 4 ----- Join - imutable
// //************************************** */

// let stringOfCars = totalCars.join()
// console.log(stringOfCars, totalCars)

//************************************** */
// Number 5 ----- Split - immutable
//************************************** */

// totalCars = stringOfCars.split(' ');
// console.log(totalCars);

//************************************** */
// Number 6 ----- Reverse - mutable
//************************************** */

let carsInReverse = totalCars.reverse();
// console.log( totalCars);

//************************************** */
// Number 7 ----- Sort - mutable
//************************************** */

let sortedCars = carsInReverse.sort();
// console.log(sortedCars, carsInReverse);
// console.log(carsInReverse.indexOf('audi'));

//************************************** */
// Number 8 ----- Slice - Immutable
//************************************** */

let removedCars = carsInReverse.slice(1, 3);
// console.log(removedCars, carsInReverse);

//************************************** */
// Number 9 ----- Splice - Mutable
//************************************** */

let splicedCars = carsInReverse.splice(1, 2, "Ford", "Honda");
// console.log(splicedCars, carsInReverse);

//************************************** */
// Number 10 ----- Push - Mutable
//************************************** */

carsInReverse.push(splicedCars);
// console.log(carsInReverse);

//************************************** */
// Number 11 ----- Pop - Mutable
//************************************** */
carsInReverse.pop();
// console.log(carsInReverse);

//************************************** */
// Number 12 ----- Shift - mutable
//************************************** */

carsInReverse.shift();
// console.log(carsInReverse)

//************************************** */
// Number 13 ----- unshift - mutable
//************************************** */

carsInReverse.unshift("Maserati");
// console.log(carsInReverse);

//************************************** */
// Number 14 ----- forEach -
//************************************** */
let numbers = [23, 45, 0, 2];

numbers.forEach(numbers => {
  console.log(numbers + 2);
});



// ////////////   CAN I GET A RIDE? ///////////////////////////

const carsInReverse = ['honda', 'toyota', 'bmw',' jeep', 'ford', 'tesla'];

for (let i=0; i < carsInReverse.length; i++){
  console.log(carsInReverse[i]);
}
// ///////////////  ARE YOU EVEN A PERSON??  /////////////////////////
let persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}

for (let x in persons){
  console.log(x);

}

for (let x in persons){
  if (x === 'birthDate'){
    console.log(persons[x])
  }
// ///////////////////// YOU CAN COUNT ON IT     //////////////////////
}

for (let i=0; i<1001; i++){
  console.log(i);
}

let number =1;
while (number <1001){
  console.log (number);
  number ++;
}

let doNumber = 1;
do {
  console.log(doNumber);
  doNumber ++;
} while (doNumber < 1001);


//////////////// RAISE YOUR HAND IF YOU HAVE A question ///////////////////////

// When is a for loop better than a while loop?
// a for loop is better when you KNOW how many iterations.  A WHILE loop is better when you are NOT SURE how many iterations you need.

//Readability matters.  If you are going to evaluate a variable that is defined outside of the loop, then a While Loop could be the better choice but generally speaking, my FAVORITE 211 Instructor EVER prefers FOR loops.  :)

// A FOR loop iterates through ARRAYS.  A FOR IN loop looks for keys in an OBJECT.

//A DO WHILE loop evaluates the condition LAST.  A WHILE loop evaluates the condition first.

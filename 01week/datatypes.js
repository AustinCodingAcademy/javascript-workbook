// Current Date and Time//
const today = new Date();
  const day = today.getDay();
  const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log(`Today is : ${daylist[day]}.`);
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Noon';
  }
  else
  {
  hour=12;
  prepand=' PM';
  }
  }
  if (hour===0 && prepand===' AM ')
  {
  if (minute===0 && second===0)
  {
  hour=12;
  prepand=' Midnight';
  }
  else
  {
  hour=12;
  prepand=' AM';
  }
  }
console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);

//Convert numbers to string

function numToString(num){
   return numToString();
};

function numToString(x){
  const x = 7;
  console.log(numToString);
};

//Convert a string to numbers

function stringsToNumber(str){
  return Number(str);
}
function carColor1(car1,car2){
  const car1 = red;
  const car2 = blue;
console.log (car1 + car2);
};

//Datatypes Question 4

const name = 'Sunny';
console.log(name);

const lastName = 'Parker';
console.log(lastName);

//number
const age = 25;
console.log(age);

//boolean
const fullAge = true;
console.log(fullAge);

//string
const name = 'Sunny';
const age = '25';
console.log(name + lastName + 'is' + age +'tomorrow');

//NaN
const class = twenty;
console.log(class + third)

//Undefined
const a;
console.log(a);

//Null
const lastName = prompt('What is the last name');
console.log(lastName);

//Add 2 numbers
const car1 = 1;
const car2 = 2;
console.log(car1 + car2);

//true and false Q 6-8
const name = Parker;
const moneyGreen = 'yes';

if (moneyGreen === yes);{
  console.log (name + 'moneyGreen');
}
else {
  console.log (name + ' no money is not green');

}


}

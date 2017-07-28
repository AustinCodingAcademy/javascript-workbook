'use strict';

function reverseCars () {
  carsInReverse.reverse();
  return;
}

var object = "persons";
var persons = {firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female"};

var text = "";
var x;
for (x in persons) {
  text += persons [x];
}

function whileLoop () {
  let i = 0;
  while (i <= 1000) {
    console.log (i);
    i ++;
  }
}

function doWhile () {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <=1000);
}

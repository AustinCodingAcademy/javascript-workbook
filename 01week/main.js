'use strict'

console.log("hello")

let myDate = new Date();

console.log("the current date is", myDate);

//get span from the page 
let mySpan =document.getElementById("theTime");
//change innertext of span
mySpan.innerText = myDate.toString();

let add =document.getElementById("add");
add.innerText = 14;

let fun =document.getElementById("fun")
fun.innerText = "True";

const sect = document.querySelector('section');


const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
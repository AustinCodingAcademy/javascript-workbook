'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here

  //the value in input box
  document.querySelector("input").value;

  // event listener to button
  document.querySelector("button").onclick = function() {
    console.log(document.querySelector("input").value);
    document.querySelector("input").value = "";
  }

  //add an element to the board
  let div = document.createElement("div");
  div.innerText = "hello";
  document.querySelector('#board').appendChild(div);
});

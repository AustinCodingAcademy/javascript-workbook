"use strict"

window.onload = function() {
  getUsers();
};

console.log("hello")

// document.getElementById('apiButton').addEventListener('onclick', getUsers);

let arrayOfUsers = [];

function getUsers() {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)

      data.results.map(user => {
        arrayOfUsers.push(user)
      })

      let output = "<h2>Contacts</h2>";
      data.results.forEach(function(results){
        // let li = document.createElement('li')
        // let button = document.createElement('button')
        output += `
        <ul id='${results.dob.age}'>
          <li><b>Name:</b> ${results.name.first} ${results.name.last}</li>
          <li><b>Country:</b> ${results.location.country}</li>
          <img src="${results.picture.large}">
          <br><button id="infoButton" onclick="displayInfo(${results.dob.age}, '${results.location.city}', '${results.location.state}', '${results.cell}')">
          More Info</button>
          </ul>
          `
      })
      document.getElementById("users").innerHTML=output
      })
};

function displayInfo(age, city, state, cell) {
  console.log('results', age)
    let input = `
      <ul>
      <li><b>Location:</b>${city}, ${state}</li>
      <li><b>Age:</b>${age}</li>
      <li><b>Phone #:</b>${cell}</li><br>
      </ul>
      `
      console.log(input)
    document.getElementById(`${age}`).innerHTML += input
}




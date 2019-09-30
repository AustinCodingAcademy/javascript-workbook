"use strict"

//fetch multiple users on window onload
window.onload = function() {
  getUsers();
};

//create empty array of users
let arrayOfUsers = [];

//fetch users from API given, JSON file
function getUsers() {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      //map through array of users and push users into array
      data.results.map(user => {
        arrayOfUsers.push(user)
      })

      //output equals an h2 element and print data(results) for each user
      let output = "<h2>Contacts</h2>";
      data.results.forEach(function(results){
        //let output equal ul- a list of user information, name, country, img tag, and more info button
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
      //get element by user id and insert into the DOM by variable name 
      document.getElementById("users").innerHTML=output
      })
};

//get more info button function, pass in objects
function displayInfo(age, city, state, cell) {
    //let display equal another ul- a list of more user information, city, state, img age, and cell
    let display = `
      <ul>
      <li><b>Location:</b>${city}, ${state}</li>
      <li><b>Age:</b>${age}</li>
      <li><b>Phone #:</b>${cell}</li><br>
      </ul>
      `
      //get element by user id and insert into the DOM by variable name 
      document.getElementById(`${age}`).innerHTML += display
}




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
        output += `
        <ul>
          <li><b>Name:</b> ${results.name.first} ${results.name.last}</li>
          <li><b>Location:</b> ${results.location.country}</li>
          <img src="${results.picture.large}">
          <br><button id="infoButton" onclick="displayInfo()">More Info</button>
        `
      })
      document.getElementById("users").innerHTML=output
      document.getElementById('infoButton').addEventListener('onclick', displayInfo);
      })
};



function displayInfo() {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(data => {
    console.log(data.results)
    let input = 
    data.results.forEach(function(results){
      input += `
      <ul>
      <li>${results.location.city}, ${results.location.state}</li>
      <li>${results.dob}</li>
      <li>${results.location.phone}</li>
      `
    })
    document.getElementById("users").innerHTML=input
  })
}




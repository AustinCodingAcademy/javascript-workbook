"use strict"
console.log("hello")

document.getElementsById('apiButton').addEventListener('onclick', getUsers);
document.getElementById('infoButton').addEventListener('onclick', displayInfo);

let arrayOfUsers;

function getUsers() {
  fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      let output = "<h2>Contatcs</h2>";
      data.results.forEach(function(results){
        output += `
        <ul>
          <li>${results.name.last}, ${results.name.first}</li>
          <li>${results.location.city}</li>
          <img src="${results.picture.large}">
          <button id='infoButton' onclick="displayInfo()">More Info</button>
        `
      })
      document.getElementById("users").innerHTML=output
      })

      function displayInfo() {
        fetch('https://randomuser.me/api/?results=3')
        .then(res => res.json())
        .then(info => {
          console.log(info.results)
          let display = 
          info.results.forEach(function(results) {
            display += `
            <ul>
            <li>${results.dob}</li>
            <li>${results.location.street}</li>
            <li>${results.location.city}</li>
            `
          })
          document.getElementById("more-info").innerHTML=display
        })
      }
};




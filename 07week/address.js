"use strict";

const listing = document.getElementById("listing");

document.getElementById("user").addEventListener("click", getUser);
document.getElementById("listUsers").addEventListener("click", listUsers);
document
  .getElementById("getMultiUsers")
  .addEventListener("click", getMultipleUsers);

const peopleArray = [];

function getUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(user => {
      console.log(user.results);
      peopleArray.push(user.results[0]);
      console.log(peopleArray);
    });
}

function getMultipleUsers() {
  fetch("https://randomuser.me/api/?results=10")
    .then(res => {
      return res.json();
      console.log(res);
    })
    .then(users => {
      console.log(users.results);
      users.results.forEach(result => {
        peopleArray.push(result);
      });
      console.log(peopleArray);
    });
}

function listUsers() {
  listing.innerHTML = null;
  console.log(peopleArray);
  peopleArray.map(user => {
    const li = document.createElement("li");
    const pic = document.createElement("img");
    const infoButton = document.createElement("button");
    infoButton.innerHTML = " User Info";
    pic.setAttribute("src", user.picture.thumbnail);
    li.innerHTML = user.name.first + " " + user.name.last;
    li.appendChild(pic);
    li.appendChild(infoButton);
    listing.append(li);
    const infoDiv = document.createElement("div");
    li.appendChild(infoDiv);
    infoButton.addEventListener("click", function() {
      const details =
        "DOB: " + user.dob.date + "address: " + user.location.street;
      if (infoDiv.innerHTML === "") {
        infoDiv.innerHTML = details;
      } else {
        infoDiv.innerHTML = "";
      }
    });
  });
}

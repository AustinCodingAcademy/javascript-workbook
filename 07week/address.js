"use strict";

//Save address
let addr = []

// fetch function

function fetchReq(url) {
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log("Something went wrong"));
}


  fetchReq("https://randomuser.me/api/")
.then(data => {
    console.log(data)

    const image = data.results["0"].picture.large;
    const firstName = data.results["0"].name.first;
    const lastName = data.results["0"].name.last;
    const address = data.results["0"].location.street;

    getImage(image);   
    getPerson(firstName, lastName);  
    pushAddress(address);

});



//functions that place data where I need it

function getPerson(f,l) {
    document.getElementById("aPerson").innerHTML = f +" "+ l;
  }
  
  function getImage(img) {
    cardImg.innerHTML = `<img src=${img}>`
  }

  function pushAddress(add){
      addr.push(add)
  }

  // show address on click

  function getData(){
      moreData.innerHTML = addr
  }
  
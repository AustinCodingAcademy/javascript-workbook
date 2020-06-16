

"use strict";

let p1 = null;
let p1name = null;
let p1value = null;
let p2 = null;
let p2name = null;
let p2value = null;

let getPokemon1 = () => {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
    return response.json() //gets the pokemon object and api
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * 20)
      console.log('random: ', random)
      let player = data.results[random]
      p1 = player //the object
      return fetch(player.url) //access that api within that pokemon
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // getting pokemon name here!
      p1value = data.base_experience
      let p1name = data.species.name
        let display = `<h1> ${p1name} </h1>`
        display += 
    // Experience: ${p1value}
        `
        <br>
        <img src="   ${data.sprites.front_shiny}" >
        `
        document.getElementById('pokeName1').innerHTML = display;
    })
    .catch(function (error) {
      console.log('Requestfailed', error)
    });
}

let getPokemon2 = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon`)
      .then(function (response) {
        return response.json()//getis the pokemon object and api
      })
      .then(function (data) {
        let random = Math.floor(Math.random() * 20)
        console.log('random: ', random)
        let player = data.results[random]
        p2 = player 
        return fetch(player.url) 
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       
        p2value = data.base_experience
        let p2name = data.species.name
        let display = `<h1> ${p2name} </h1>`
        display += 
        
        `
        <br>
        <img src="${data.sprites.front_shiny}" >
        `
        document.getElementById('pokeName2').innerHTML = display;
      })
      .catch(function (error) {
        console.log('Requestfailed', error)
      });
  }

  let checkForWin = ()=> {
      if(p1 !== null && p2 !== null){
          console.log('working here')
          console.log(p1value, p2value)
          console.log(p1.name, p2.name)
        if(p1value === p2value){
            console.log(`It's a draw!`)
            document.getElementById('Announcement').innerHTML = `It's a Draw!`
          } else if(p2value > p1value){
            console.log(`Winner: ${p2.name}!`)
            document.getElementById('Announcement').innerHTML = `${p2.name} wins!`
          } else if(p1value > p2value){
            console.log(`Winner: ${p1.name}!`)
            document.getElementById('Announcement').innerHTML = `${p1.name} wins!`

          }
      }
  }

  let restart = () => {
    window.location.href=window.location.href
  }

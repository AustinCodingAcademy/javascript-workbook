"use strict";

var pokemon = [];
function getPokemon() {
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      let random = Math.floor(Math.random() * 20)
      return fetch(data.results[random].url)
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.species.name)
      pokemon.push(data)
      // return (data)

    })
    .catch(function (error) {
      console.log('Requestfailed', error)
    });
}


function comparePokemon(){
  if(pokemon.length >= 2){
    document.getElementById('output').innerHTML = ''
    document.getElementById('pics').innerHTML = ''
    let poke1 = pokemon[pokemon.length-1]
    let poke2 = pokemon[pokemon.length-2]  
    let poke1_stats = poke1.stats[5].base_stat
    let poke2_stats = poke2.stats[5].base_stat
    console.log(poke1_stats)
    if(poke1_stats > poke2_stats){
      document.getElementById('output').innerHTML += poke1.species.name + " is cooler than " + poke2.species.name
      document.getElementById('pics').innerHTML += `<img src = ${poke1.sprites.front_default}></img>    <img src = ${poke2.sprites.front_default}></img>`
    }
    else if(poke2_stats > poke1_stats){
      document.getElementById('output').innerHTML += poke2.species.name + " is cooler than " + poke1.species.name
      document.getElementById('pics').innerHTML += `<img src = ${poke2.sprites.front_default}></img>    <img src = ${poke1.sprites.front_default}></img>`
    }
    else{
      document.getElementById('output').innerHTML += poke1.species.name + " and " + poke2.species.name + " are equals"
      document.getElementById('pics').innerHTML += `<img src = ${poke1.sprites.front_default}></img>    <img src = ${poke2.sprites.front_default}></img>`
    }
  }
  else{
    document.getElementById('output').innerHTML = 'You need two pokemon to compare'
  }
  
}
// document.getElementById('get1').addEventListener('click', () =>{
//   console.log(pokemon);
  
// })


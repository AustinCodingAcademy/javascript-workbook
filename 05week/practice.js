'use strict'

//dot notation vs bracket notation

const fakeClientInput = (input) => '$[input]'
// this below is static
const user = {
  jerry: {
    job: 'comedian',
    enemies: {
      1: 'newman',
      2: 'bannier',
    },
  },
  elaine: {
    job: 'assistant editor',
  },
  george: {
    job: 'architect',
  },
  kramer: {
    job: '???',
  },
}

console.log(users.jerry.job) //"comedian"
console.log(users.jerry.enemies[1]) //"newman"
console.log(users.jerry.enemies['1']) //"newman"
//this below is dynamic
const user = {
  jerry: {
    job: 'comedian',
    enemies: () => {
      return 'newman'
    }
  },
  elaine: {
    job: 'assistant editor',
  },
  george: {
    job: 'architect',
  },
  kramer: {
    job: '???',
  },
}

console.log(users.jerry.enemies) //"newman"

//use dots with values working with known name
//use brackets when values are unknown

const user = {
  jerry: {
    job: 'comedian',
    enemies: {
      1: 'newman',
      2: 'bannier',
    },
  },
  elaine: {
    job: 'assistant editor',
  },
  george: {
    job: 'architect',
  },
  kramer: {
    job: '???',
  },
}

console.log(users.jerry[enemies]) // [oject Oject]1:"newman" 2:"bannier"
console.log(users.jerry.enemies) // [oject Oject]1:"newman" 2:"bannier"

console.log(fakeClientInput('elaine'))
console.log(users[fakeClientInput('jerry')]);

'use strict';
let pokeObj1 = {};
let pokeStats1 = [];
let pokeObj2 = {};
let pokeStats2 = []

const assert = require('assert')

function getPokemon(fetch, key) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/squirtle/`)
    .then(response => response.json())
    .then(data => data.results[0])
}

function getPokemonKey(fetch, key) {
  return fetch(`https://pokeapi.co/api/${key}/v2/pokemon/squirtle/`)
    .then(response => response.json())
    .then(data => data.results[0])
}

function getPokemonUsers(fetch, users) {
  return fetch('https://pokeapi.co/api/v2/pokemon/squirtle/$users=' + users)
    .then(response => response.json())
    .then(data => data.results[0])
}

describe('fakeFetchin', () => {
  it('calls fetch with the correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://pokeapi.co/api/v2/pokemon/squirtle/'
      )
      return new Promise(function (resolve) {

      })
    }
    getPokemon(fakeFetch)
  })

  it('requests the correct number of users', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://pokeapi.co/api/v2/pokemon/squirtle/$users=10'
      )
      return new Promise(function (resolve) {

      })
    }
    getPokemonUsers(fakeFetch, 10)
  })

  it('parses the response of fetch correctly', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { name: 'squirtle' }
          ]
        })
      })
    }
    getPokemon(fakeFetch)
      .then(result => {
        assert(result.name === 'squirtle')
        done()
      })
  })

  it('request all of the fire type pokemon', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { type: 'fire' }
          ]
        })
      })
    }
    getPokemon(fakeFetch)
      .then(result => {
        assert(result.type === 'fire')
        done()
      })
  })

  it('calls fetch with the correct API key', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://pokeapi.co/api/12345/v2/pokemon/squirtle/'
      )
      return new Promise(function (resolve) {

      })
    }
    getPokemonKey(fakeFetch, 12345)
  })


})

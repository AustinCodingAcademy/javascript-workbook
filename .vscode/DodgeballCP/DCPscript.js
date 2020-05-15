'use strict'
const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
  const listOfPlayers = []
  const blueTeam = []
  const redTeam = []
  // creating player class
  class player {
    constructor(name, age, skillSet){
      this.name = name
      this.age = age
      this.skillSet = skillSet
      this.placeBorn = this.placeBorn
    }
    // adding the class to the people of the array
    addToArrayOfPeople() {
      arrOfPeople.push(this)
    }
  }
  // creating blue team class
  class blueTeammate extends player {
    constructor(name, age, skillSet, placeBorn, team){
      super (name, age, skillSet, placeBorn);
      this.team = team
      this.color = blue
      this.mascot = Sky
    }
    // adding the class and attributes to the people of the blue team array
    joinTeam() {
      if (this.team === 'blue') {
        blueTeam.push(this.name)
      }
    }
  }
  // creating red team class
  class redTeammate extends player {
    constructor(name, age, skillSet, placeBorn, team,){
      super (name, age, skillSet, placeBorn);
      this.team = team
      this.color = red
      this.mascot = Tomato
    }
    // adding the class and attributes to the people of the red team array
    joinTeam() {
      if (this.team === 'red') {
        redTeam.push(this.name)
      }
    }
  }
  const listPeopleChoices = () => {
    const listElement = document.getElementById('people')
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {
        makePlayer(person)
        removeFromList(button)
      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }
  //creating a function that removes people from the List People list
  const removeFromList = (button) => {
    const parentLi = button.parentElement
    parentLi.remove()
  }
  // creating a function that removes people and buttons from the bodgeball players list
  const removeFromSort = (li, redButton, blueButton) => {
    li.remove()
    redButton.remove()
    blueButton.remove()
  }
  // creating a function that adds people to the red team and pushes the redTeam class and its attributes onto them by adding them to the redTeam array
  const joinRed = (person) => {
    const red = document.getElementById('red')
    const li = document.createElement('li')
    li.innerHTML = `${person.name}`
    red.append(li)
    redTeam.push(person.name) 
  }
  // creating a function that adds people to the blue team and pushes the blueTeam class and its attributes onto them by adding them to the blueTeam array
  const joinBlue = (person) => {
    const blue = document.getElementById('blue')
    const li = document.createElement('li')
    li.innerHTML = `${person.name}`
    blue.append(li)
    blueTeam.push(person.name) 
  }

  // creating players
  const makePlayer = (player) => {
    console.log(`li ${player.id} was clicked!`)
    // finding people in the array who's id's match those of the people who were clicked
    const person = arrOfPeople.find((p)=> {
      console.log(p)
      return p.id === player.id;
    })
    const listElement = document.getElementById("players")
    const li = document.createElement('li')
    li.appendChild((document.createTextNode(person.name + " - " + person.skillSet)))
    listOfPlayers.push(player)
    console.log('this is the new list of players', listOfPlayers)
    // making a button for the red team that adds them to the red team when clicked
    const redButton = document.createElement('button')
    redButton.innerHTML = 'Red Team'
    redButton.classList.add('red')
    redButton.addEventListener('click', function() {
      removeFromSort(li, redButton, blueButton)
      joinRed(person)
  })
    // making a button for the blue team that adds them to the blue team when clicked
    const blueButton = document.createElement('button')
    blueButton.innerHTML = 'Blue Team'
    blueButton.classList.add('blue')
    blueButton.addEventListener('click', function() {
      removeFromSort(li, blueButton, redButton)
      joinBlue(person)
  })
  // adding the buttons to the ul
  listElement.append(li,blueButton, redButton)
  }


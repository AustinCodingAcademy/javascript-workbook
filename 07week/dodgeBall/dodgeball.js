const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "Welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "Fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "Tic-Tac-Toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "Pipe Fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "Boom-a-Rang Throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "Acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "Jump Rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []

const blueTeam = []
const redTeam = []

class player {
  constructor(id, name, age, skillSet, placeBorn){
  this.id = id;
  this.name = name;
  this.age = age;
  this.skillSet = skillSet;
  this.placeBorn = placeBorn;
  // this.canThrowBall = true;
  // this.canDodgeBall = true;
  // this.hasPaid = true;
  // this.isHealthy = true;
  // this.yearsExperience = Math.floor(Math.random() * 10);
  }
}
class blueTeammate extends player{
  constructor(color, mascot, id, name, age, skillSet, placeBorn){
    super(id, name, age, skillSet, placeBorn);
    this.color = color;
    this.mascot = mascot;
  }
}
class redTeammate extends player{
  constructor(color, mascot, id, name, age, skillSet, placeBorn){
    super(id, name, age, skillSet, placeBorn);
    this.color = color;
    this.mascot = mascot;
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {
      makePlayer(person.id);
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

//
const makePlayer = (id) => {
  const listPlayers = document.getElementById('players')
  let findPlayer = arrOfPeople.find(player => {
    return player.id == id;//find the key values of the player clicked on 
  })
  // console.log(findPlayer)
  let indexOfPlayer = arrOfPeople.indexOf(findPlayer)//find index of player
  // console.log(indexOfPlayer)
  let newPlayer = new player(
    findPlayer.id,
    findPlayer.name,
    findPlayer.age,
    findPlayer.skillSet,
    findPlayer.placeBorn,
    findPlayer.color,
    findPlayer.mascot,
    // findPlayer.canDodgeBall,
    // findPlayer.canThrowBall,
    // findPlayer.hasPaid,
    // findPlayer.isHealthy,
    // findPlayer.yearsExperience
    );
  console.log(newPlayer)
  listOfPlayers.push(newPlayer)//add new player to list of players
  arrOfPeople.splice(indexOfPlayer, 1)//remove from lists of people and add to dodgeball players
  const li = document.createElement("li")

  const redButton = document.createElement("button")
  redButton.innerHTML = "Red Team";
  redButton.style.background = "red"
  redButton.addEventListener('click', function() {
    addToRedTeam(newPlayer)
    listPlayers.removeChild(li)
  })

  const blueButton = document.createElement("button")
  blueButton.innerHTML = "Blue Team";
  blueButton.style.background = "blue"
  blueButton.addEventListener('click', function() {
    addToBlueTeam(newPlayer)
    listPlayers.removeChild(li)
  })

  li.appendChild(redButton)
  li.appendChild(blueButton)
  li.appendChild(document.createTextNode(newPlayer.name))
  listPlayers.append(li)
}

function addToRedTeam(newPlayer) {
redTeam.push(newPlayer)//add new player to list of players

let indexOfPlayer = listOfPlayers.indexOf(newPlayer)//find index of player
listOfPlayers.splice(indexOfPlayer, 1)//remove from lists of people and add to dodgeball players

let listElement = document.getElementById('red')
listElement.innerHTML = null;

redTeam.map(player => {
  const li = document.createElement("li")
  const button = document.createElement("button")
  button.innerHTML = "Remove Player"
  button.style.background = "red"
  button.addEventListener('click', function() {
    makePlayer(player.id);
    listElement.removeChild(li)
  })
  li.appendChild(button)
  li.appendChild(document.createTextNode(player.name))
  listElement.append(li)
})
}

function addToBlueTeam(newPlayer) {
  blueTeam.push(newPlayer)//add new player to list of players
  
  let indexOfPlayer = listOfPlayers.indexOf(newPlayer)//find index of player
  listOfPlayers.splice(indexOfPlayer, 1)//remove from lists of people and add to dodgeball players
  
  let listElement = document.getElementById('blue')
  listElement.innerHTML = null;

  blueTeam.map(player => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Remove Player"
    button.style.background = "blue"
    button.addEventListener('click', function() {
      makePlayer(player.id);
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(player.name))
    listElement.append(li)
  })
  }

  function removePlayer() {
    listOfPlayers.push(newPlayer)//add new player to list of players
  
    let indexOfPlayer = listOfPlayers.indexOf(newPlayer)//find index of player
    listOfPlayers.splice(indexOfPlayer, 1)//remove from lists of people and add to dodgeball players
    
    let remove = document.getElementById("team")
    remove.innerHTML = null;
  
    blueTeam.map(player => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Remove Player"
      button.style.background = "blue"
      button.addEventListener('click', function() {
        removePlayer(player.id);
        remove.removeChild(li)
      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(player.name))
      remove.append(li)
    })
  }
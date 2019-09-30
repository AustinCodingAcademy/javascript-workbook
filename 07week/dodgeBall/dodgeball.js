const arrOfPeople = [
  {
    id: 1,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 2,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 3,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 4,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 5,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 6,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 7,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []

const blueTeam = []
const redTeam = []

class player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
  this.id = id;
  this.name = name;
  this.age = age;
  this.skillSet = skillSet;
  this.placeBorn = placeBorn;
  this.canThrowBall = canThrowBall;
  this.canDodgeBall = canDodgeBall;
  this.hasPaid = hasPaid;
  this.isHealthy = isHealthy;
  this.yearsExperience = yearsExperience;
  }
}
class blueTeammate {
  constructor(color, mascot){
    this.color = color;
    this.mascot = mascot;
  }
}
class redTeammate {
  constructor(color, mascot){
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
    findPlayer.placeBorn
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
  })

  const blueButton = document.createElement("button")
  blueButton.innerHTML = "Blue Team";
  blueButton.style.background = "blue"
  blueButton.addEventListener('click', function() {
    addToBlueTeam(newPlayer)
  })

  li.appendChild(redButton)
  li.appendChild(blueButton)
  li.appendChild(document.createTextNode(newPlayer.name))
  listPlayers.append(li)
}
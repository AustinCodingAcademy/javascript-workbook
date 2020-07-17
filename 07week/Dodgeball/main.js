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
  {
    id: 9,
    name: "Sam Table",
    age: 88,
    skillSet: "weight lifting",
    placeBorn: "RoundRock"
  }
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(){}
}
class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
}

// This function adds a button to remove ppl from the array of ppl and put them into players area

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  listElement.innerHTML = ""
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

// This splices a person from array of people using their index and pushes them into the players area
const makePlayer = (person) => {
  console.log(person)
  let i = arrOfPeople.indexOf(person)
  arrOfPeople.splice(i,1)
  listOfPlayers.push(person)
  console.log(arrOfPeople,listOfPlayers)
  listPeopleChoices()
  listPlayers()
}

// This includes a blue team and a red team button for the players that have been pushed into this array
const listPlayers = () => {
  const listElement = document.getElementById('players')
  listElement.innerHTML = ""
  listOfPlayers.map(player => {
    const li = document.createElement("li")
    const buttonBlue = document.createElement("button")
    buttonBlue.innerHTML = "Blue"
    buttonBlue.addEventListener('click', function() {makeBluePlayer(player)})
    li.appendChild(document.createTextNode(player.name + " + " + player.skillSet))
    li.appendChild(buttonBlue)
    const buttonRed = document.createElement("button")
    buttonRed.addEventListener('click', function() {makeRedPlayer(player)})
    buttonRed.innerHTML = "Red"
    li.appendChild(buttonRed)
    listElement.append(li)
   
  })
}

// This is where we make the players from the players list go onto the blue or red team by splice and push
const makeBluePlayer = (player) => {
  let i = listOfPlayers.indexOf(player)
  listOfPlayers.splice(i,1)
  blueTeam.push(player)
  listPlayers()
  listBluePlayers()
}

// This is where the blue team players live, I managed to create a button for them to go back to the players list but failed
// to make the player dissappear from the blue list, so they are viewable twice, oops
const listBluePlayers = () => {
  const listElement = document.getElementById('blue')
  listElement.innerHTML = ""
  blueTeam.map(player => {
    const li = document.createElement("li")
    const buttonRemove = document.createElement("button")
    buttonRemove.innerHTML = "Remove"
    console.log(players)
    li.appendChild(document.createTextNode(player.name + "-" + player.skillSet))
    buttonRemove.addEventListener("click",function(){
      listOfPlayers.push(player)
      listPlayers(player.id)
      blueTeam.splice(index,1)
      listBluePlayers()
      listOfPlayers()
    })
    li.appendChild(buttonRemove)
    listElement.append(li)
    })
}

const makeRedPlayer = (player) => {
  let i = listOfPlayers.indexOf(player)
  listOfPlayers.splice(i,1)
  redTeam.push(player)
  listPlayers()
  listRedPlayers()
}

// Same situation as above, and it's driving me crazy bcs Emilio talked to me about this and showed me
// how to make them not be in two lists at once, but no matter what I have tried I can't make it work
const listRedPlayers = () => {
  const listElement = document.getElementById('red')
  listElement.innerHTML = ""
  redTeam.map(player => {
    const li = document.createElement("li")
    const buttonRemove = document.createElement("button")
    buttonRemove.innerHTML = "Remove"
    console.log(players)
    li.appendChild(document.createTextNode(player.name + "-" + player.skillSet))
    buttonRemove.addEventListener("click",function(){
      listOfPlayers.push(player)
      listPlayers(player.id)
      redTeam.splice(index,1)
      listRedPlayers()
      listOfPlayers()
    })
    li.appendChild(buttonRemove)
    listElement.append(li)
    })
}




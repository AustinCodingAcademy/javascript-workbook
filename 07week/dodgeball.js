const arrOfPeople = [
  {
    id: 0,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 1,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 2,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 3,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 4,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 5,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 6,
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
  constructor(listOfPlayers, arrOfPeople, id){

  }
      
}
class blueTeammate {
  constructor(blueTeam, listOfPlayers){

  }

}
class redTeammate {
  constructor(redTeam, listOfPlayers){

  }

}










const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}



const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  var p = arrOfPeople.find(element => {

    return element.id == id
  
  }) 
  console.log(arrOfPeople[id])
  listOfPlayers.push(p)
  console.log(listOfPlayers)
}


const choseTeam = (id) => {
  const elementList = document.getElementById('players')
  const list = document.createElement("li")
  const button = document.createElement("button")
  const button2 = document.createElement("button")
  button.innerHTML = "Red Team"
  button2.innerHTML = 'Blue Team'
  button.addEventListener('click', function() {makePlayer(person.id)} )
  button2.addEventListener('click', function() {makePlayer(person.id)} )
  list.appendChild(button)
  list.appendChild(button2)
  list.appendChild(document.createTextNode(p.name + " - " + p.skillSet))
  elementList.append(list)
  
}

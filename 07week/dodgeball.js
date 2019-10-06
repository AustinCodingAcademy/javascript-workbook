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
  // console.log(`li ${id} was clicked!`)
  var p = arrOfPeople.findIndex(element => {
    
    // console.log(element)
    return element.id == id

    
  }) 
  document.getElementById("people").innerHTML = null;
  const q = arrOfPeople.splice(p, 1);
  // console.log(q, 'qqqqqq')

  listOfPlayers.push(q[0]);
  const playerList = document.getElementById('players')
  const li = document.createElement("li");
  const button = document.createElement("button")
  const button2 = document.createElement("button")
  button.innerHTML = "Red Team"
  button2.innerHTML = 'Blue Team'
  console.log(q[0], 'qqqqqq')

  button.addEventListener('click', function() {
    moveToRed(q[0].id)
    playerList.removeChild(li)
  } )
  button2.addEventListener('click', function() {
    moveToBlack(q[0].id)
    playerList.removeChild(li)

  } )
  li.appendChild(button)
  li.appendChild(button2)
  li.appendChild(document.createTextNode(q[0].name + "-" + q[0].skillSet))
  playerList.appendChild(li)
  listPeopleChoices()
}

const moveToRed = (id) => {
  console.log(`li ${id} was clicked!`)
  var r = listOfPlayers.find(element => {
    
    console.log(element)
    return element.id == id
    
  }) 
  let index = listOfPlayers.indexOf(r)
  console.log("index: " +index)
  // listOfPlayers.splice(index, 1)
  // console.log(r,'arr')
  const a = listOfPlayers.splice(index, 1);
  // console.log(listOfPlayers);
  redTeam.push(a[0]);
  console.log(listOfPlayers)
  const redList = document.getElementById('red')
  const li = document.createElement("li");
  const button = document.createElement("button")
  button.innerHTML = "Remove"
  // button.addEventListener('click', function() {moveToRed(p.id)} )
  li.appendChild(button)
  li.appendChild(document.createTextNode(a[0].name + "-" + a[0].skillSet))
  redList.appendChild(li)
}

// const moveToBlack = () => {
//   var b = listOfPlayers.find(element => {

//     return element.id == id
    
//   }) 
//   blueTeam.push(b)
// }


const moveToBlack = (id) => {
  console.log(`li ${id} was clicked!`)
  var b = listOfPlayers.find(element => {
    
    console.log(element)
    return element.id == id
    
  }) 

  // console.log(r,'arr')
  const c = listOfPlayers.splice(b, 1);
  // console.log(listOfPlayers);
  blueTeam.push(c);
  const redList = document.getElementById('blue')
  const li = document.createElement("li");
  const button = document.createElement("button")
  button.innerHTML = "Remove"
  // button.addEventListener('click', function() {moveToRed(p.id)} )
  li.appendChild(button)
  li.appendChild(document.createTextNode(b.name + "-" + b.skillSet))
  redList.appendChild(li)
}
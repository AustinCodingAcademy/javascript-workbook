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
const White = []
const Black = []

class Player {
  constructor(id, name, age, skillSet, placeBorn){
    //player properties
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;

    //adds new properties for players
    this.canThrowBall = true;
    this.isPaid = true;
    this.isHealthy = true;
    this.yearsExperience = 0;
  }
}
class Teammate extends Player {
  //adds teams mascots and colors
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, isPaid, isHealthy, yearsExperience, mascot, teamColor){

    
    super(id, name, age, skillSet, placeBorn, canThrowBall, isPaid, isHealthy, yearsExperience)
    
    //new properties
    this.mascot = mascot
    this.teamColor = teamColor;
  }
}

const listPeopleChoices = () => {
  //targets dom element to append list
  const listElement = document.getElementById('people')

  //clears the dom element so lists doesnt add up
  listElement.innerHTML = '';

  //for each 'person' in arrOfPeople
  arrOfPeople.map(person => {
    //create li
    const li = document.createElement("li")

    // button for makePlayer
    const button = document.createElement("button")
    button.innerHTML = "Make Player"

    //adds event listener to trigger makePlayer(id) function when clicked. passes in this person.id
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))

    //appends li to the ul element
    listElement.append(li)
  })
}


const indexById = (element) => element.id === id;

//helper function to take in an id and return a person from arrOfPeople
const getPlayer = (id) => {

  //finds index of person with input id
  const index = arrOfPeople.findIndex(element => element.id === id);

  //returns person
  return arrOfPeople[index];
}

const listPlayers = () => {
  //targets dom element to list players (ul)
  const playerList = document.getElementById('players');

  //clears dom so lists don't pile up
  playerList.innerHTML = '';

  //for each 'player' in listOfPlayers... 
  listOfPlayers.forEach(player => {
    //creates li
    let li = document.createElement('li');
    //sets innerText
    li.innerText = `${player.name}: ${player.skillSet}`

    //appends li
    playerList.appendChild(li);

    //adds buttons for white team and black team. uses helpfer function teamButton function which will return a button element:
    li.appendChild(teamButton('black', player.id));
    li.appendChild(teamButton('white', player.id));
  })
}

//helper function for creating 'black team' 'white team' buttons. takes color and id
const teamBlack = (color, id) => {
  //creates button
  let button = document.createElement('button');
  //sets innertext using color input
  button.innerText = `${color} Team`;
  //adds class using color input (in case we want to make red for red or blue for blue)
  button.classList.add(`${color}-button`);
  //adds data-id to button element, but this is not actually neccessary i dont think...
  button.dataset.id = id;
  // adds event listener, so when button is clicked, makeTeammate is called on the correct player
  button.addEventListener('click', ()=>{
    //console log for testing purposes:
    console.log('color', color, 'id', id);
    makeTeammate(color, id);
  })
  //returns the button element
  return button
}

const makePlayer = (id) => {
  //console log for testing purposes:
  console.log(`li ${id} was clicked!`);
  
  const index = arrOfPeople.findIndex(element => element.id === id)
  
  const player = getPlayer(id);
  
  const newPlayer = new Player(player.id, player.name, player.skillSet, player.placeBorn);
  //pushes new player to players array
  listOfPlayers.push(newPlayer);
  
  console.log(listOfPlayers);
  //removes previous person from people array
  arrOfPeople.splice(index, 1);
  //updates dom display of people and players
  listPeopleChoices();
  listPlayers();
}

const makeTeammate = (color, id) => {
  // variables we will later assign.
  let mascot = null;
  let teamColor = color;
  let team = null;

  
  if(color === 'black') {
    mascot = 'dogs'
    team = blackTeam;
  } else {
    mascot = 'cats'
    team = whiteTeam
  }
  //finds index of player with input id
  const index = listOfPlayers.findIndex(player => player.id === id);
  //gets player with correct index
  const player = listOfPlayers[index];

  //creates new Teammate using selected players properties
  const newTeammate = new Teammate(player.id, player.name, player.age, player.skillSet, player.placeBorn, player.canThrowBall, player.isPaid, player.isHealthy, player.yearsExperience, mascot, teamColor);
  //push teammate to team array:
  team.push(newTeammate);
  //remove previous player from players array
  listOfPlayers.splice(index, 1);
  
  listPlayers();
  listTeammate(newTeammate, color);
}

const listTeammate = (teammate, color) => {
  
  const teamList = document.getElementById(`${color}`);
  
  let li = document.createElement('li');
  
  li.innerText = `${teammate.name}: ${teammate.skillSet}`
  
  teamList.
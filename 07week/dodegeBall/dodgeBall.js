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

class player {
  constructor(player){
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

class blueTeammate extends player{
  constructor(canThrowBall,canDodgeBall,hasPaid,isHealthy,yearsExperience,mascot,teamColor){
    super(canThrowBall,canDodgeBall,hasPaid,isHealthy,yearsExperience);
    this.mascot = BlueDevils;
    this.teamColor = teamColor;
  }
}
class redTeammate extends player{
  constructor(canThrowBall,canDodgeBall,hasPaid,isHealthy,yearsExperience,mascot,teamColor){
    super(canThrowBall,canDodgeBall,hasPaid,isHealthy,yearsExperience);
    this.mascot = RedRaiders;
    this.teamColor = teamColor;
}
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.setAttribute('id','remove')
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.name)}, {once:true})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}
//pass person.name through player
const makePlayer = (player) => {
  console.log(`li ${player} was clicked!`)
  
  //set variables to html elements
  const players = document.querySelector('#players')
  const redRaiders = document.createElement('button')
  redRaiders.innerHTML = 'Red Raiders'
  redRaiders.setAttribute('id','removeRaider')
  const blueDevils = document.createElement('button')
  blueDevils.innerHTML = 'Blue Devils'
  blueDevils.setAttribute('id','removeBlue')
  redRaiders.addEventListener('click', function() {addToRaiders(player)});
  blueDevils.addEventListener('click',function() {addToBlueD(player)});
  //append buttons to players ul
  players.appendChild(redRaiders)
  players.appendChild(blueDevils)

  }
  //removes blue and red team buttons after click
  function removeButts(){
    removeRaider.remove()
    removeBlue.remove()
    
  }

  const addToRaiders = player =>{
  
    redTeam.push(player);
    var redPlayer = document.querySelector('#red');
    const li2 = document.createElement('li')
    li2.appendChild(document.createTextNode(player));
    redPlayer.appendChild(li2);
    removeButts();

    

  }

  const addToBlueD = player =>{
    //grab blue id element
    blueTeam.push(player);
    var bluePlayer = document.querySelector('#blue');
    const li3 = document.createElement('li');
    li3.appendChild(document.createTextNode(player));
    bluePlayer.appendChild(li3);
    removeButts();
    
  }
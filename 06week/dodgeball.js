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
//take list of people and create new player instances
//there should NOT be two teammate classes only one not blueTeammate and redTeammate
//teammate class which represents a player once they get selected for a team
//attribute of teammate class should be teamname all teammates have an attribute called team name
//if you blue your attribute will say blue if youre red your attribute will say red
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

    //listPeopleChoices
  }
}

//the parent class is player, the child is teammate
class Teammate extends player {
  constructor(id, name, age, skillSet, placeBorn, teamName){
    super(id, name, age, skillSet, placeBorn);//super calls player constructor
      this.teamName = teamName;
    /*if your a blue teammate you attribute will say blue,
    if you a red teammamte your attribute will say red*/
    }
}
//teammate class should extend the player class
//Ex: truck extends vehicle
//every teammate has the same attributes of player plus one more
//which is which team theyre on 
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    //loops through arrOfPeople array
    //creates list item tag
    const li = document.createElement("li")
    //creates button element
    const button = document.createElement("button")
    //text in button reads make player
    button.innerHTML = "Make Player"
    //when the button is clicked...
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  let playerElement = arrOfPeople.find(function(player){
    //find players with "id" in arrOfPeople
    return player.id == id;

});
  //goes through index of arrOfPeople with id
  let index = arrOfPeople.indexOf(playerElement);
  //takes out selected value 
  arrOfPeople.splice(index, 1);
  //removes 1 item from arrayOfPeople array
  let newPlayer = new player (playerElement.id, playerElement.name, playerElement.age, playerElement.skillSet, playerElement.placeBorn);
  //creates a new player object
  //adds newPlayer object to listOfPlayers array
  listOfPlayers.push(newPlayer);
  //calls PlayerDisplay function from below
  //PlayerDisplay();
  console.log(newPlayer)
  PlayerDisplay();
  };

const makeBluePlayer = (player) => {

  blueTeam.push(player);
  //push value into blueTeam array

  let bluePlayer = listOfPlayers.indexOf(player);
  //index of player in listOfPlayers array
  //the indexOf listOfPlayers array is assigned to bluePlayer
  //takes out one item, bluePlayer value from listOfPlayers array
  listOfPlayers.splice(bluePlayer, 1)
  document.getElementById("blue").innerHTML = "";
  PlayerDisplay();
  const blueEl = document.getElementById('blue')
  //loops (map) through blueTeam array
  blueTeam.map(players => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${players.name} - ${players.id}`))
    blueEl.append(li);
  })
  };

  const makeRedPlayer = (player) => {
  //push value into redTeam array
  redTeam.push(player);
  //indexOf player in listOfPlayers array is assigned to redPlayer
  const redPlayer = listOfPlayers.indexOf(player);
  //take out 1 item, redPlayer of listOfPlayers array
  listOfPlayers.splice(redPlayer, 1)
  document.getElementById("red").innerHTML = "";
  PlayerDisplay();
  const redEl = document.getElementById('red');


  //loops (map) through redTeam array
  redTeam.map(players => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${players.name} - ${players.id}`))
    redEl.append(li);
  })
  };

  const PlayerDisplay = () => {
    const listElement = document.getElementById('players')
    listElement.innerHTML = "";
    //finds the id player and assigns it to list element  
    listOfPlayers.map(person => {
      //loops through listOfPlayers array
      //creates "li" tag
      const li = document.createElement("li")
      //li.appendChild(document.createTextNode(`${person.name} - ${person.skillSet}`))
      listElement.append(li)
      document.getElementById("people").innerHTML = "";
      listPeopleChoices();
     //creates button
      const button1 = document.createElement("button")
      //creates button
      const button2 = document.createElement("button")
      //text in "button1" reads blue team
      button1.innerHTML = "Blue Team"
      // text in "button2" reads read team
      button2.innerHTML = "Red Team"
      //when button1 is clicked calls makeBluePlayer function
      button1.addEventListener('click', function() {makeBluePlayer(person)} )
      li.appendChild(button1)
      //li.appendChild(document.createTextNode(person.id + " - " + person.name))
      listElement.append(li)
      //when button2 is clicked calls makeRedPlayer function
      button2.addEventListener('click', function() {makeRedPlayer(person)} )
      li.appendChild(button2)
      li.appendChild(document.createTextNode(person.name + " - " + person.age))
      listElement.append(li)
    })
    };
//var judy = new player (3, "Judy Twilight", 35, "fishing", "Louisville, Kentucky")
//console.log(judy);

 /*if your a blue teammate you attribute will say blue,
    if you a red teammamte your attribute will say red*/

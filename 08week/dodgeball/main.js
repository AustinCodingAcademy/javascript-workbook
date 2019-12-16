const arrOfPeople = [
  // arr of available people
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
// arr of players
const listOfPlayers = []
// arrays for each team
const blueTeam = []
const redTeam = []
// create a class template for 'player'
class player {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
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
// update for red and blue 'teammates'
class blueTeammate {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
    // Object.setPrototypeOf(blueTeammate, player);
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
    // add team mascot and color
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}
class redTeammate {
  constructor(id, name, age, skillSet, placeBorn, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience, mascot, teamColor){
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
     // add team mascot and color
    this.mascot = mascot;
    this.teamcolor = teamColor;
    // Object.setPrototypeOf(redTeammate, player);
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
// Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick
const makePlayer = (id) => {
  // choose a person to add by ID
  let getPlayer = arrOfPeople.find(function(person) {
    return person.id === id
    })
  // set 'li' to add once created to the ul
  const li = document.createElement("li");
  // create new player, and add if reqs are true
  const newPlayer = new player(
    getPlayer.id, 
    getPlayer.name, 
    getPlayer.age, 
    getPlayer.skillSet, 
    getPlayer.placeBorn, 
    getPlayer.canThrowBall = true, 
    getPlayer.canDodgeBall = true, 
    getPlayer.hasPaid = true, 
    getPlayer.isHealthy = true, 
    getPlayer.yearsExperience = 1
    );

  // remove player from list of available people
  const playerIndex = arrOfPeople.indexOf(getPlayer);
  arrOfPeople.splice(playerIndex, 1);
  document.getElementById('people').innerHTML = ""
     // add player to arr of players
     listOfPlayers.push(newPlayer);
    //  add to list of players
  const listElement = document.getElementById('players');
  li.appendChild(document.createTextNode(newPlayer.name));

  // Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team
  const blueButt = document.createElement("button")
  // style button
  blueButt.style.backgroundColor = "blue";
  blueButt.style.fontSize = '120px';
  blueButt.style.borderRadius = '10px';
  blueButt.style.width = '70px';
  blueButt.style.height = '25px';
  blueButt.style.marginLeft = '10px';
  // add event listener for click
  blueButt.addEventListener('click', function() {
    // if clicked, run funtion to add to team
    turnBlue(newPlayer.id);
    listElement.removeChild(li);
  });

  const redButt = document.createElement("button")
  redButt.style.backgroundColor = "red";
  redButt.style.borderRadius = '10px';
  redButt.style.width = '70px';
  redButt.style.height = '25px';
  redButt.style.marginLeft = '10px';
   // add event listener for click
  redButt.addEventListener('click', function() {
     // if clicked, run funtion to add to team
    turnRed(newPlayer.id);
    listElement.removeChild(li);
  });
  // display the name of the new player
  li.appendChild(document.createTextNode(this.name));
  // add buttons with player name
  li.appendChild(redButt);
  li.appendChild(blueButt);
  listElement.append(li);
  // add a player to a team function
  const turnBlue = (id) => {
    // grab id from list in HTML
    const listElement = document.getElementById('blue');
    // find the person being added
    const bluePlayer = listOfPlayers.find(person => person.id === id);
    // run in teammate class
    const newBlue = new blueTeammate(
      // use previously established values
      bluePlayer.id,
      bluePlayer.name,
      bluePlayer.age,
      bluePlayer.skillSet,
      bluePlayer.placeBorn,
      bluePlayer.canThrowBall,
      bluePlayer.canDodgeBall,
      bluePlayer.hasPaid,
      bluePlayer.isHealthy,
      bluePlayer.yearsExperience,
      // define team values
      "Blues",
      "Blue"
    )
    // add new teammate to arr of team members
    blueTeam.push(newBlue);
    const playerIndex = listOfPlayers.indexOf(bluePlayer);
    // remove from players list
    listOfPlayers.splice(playerIndex,1);
    listElement.innerHTML = "";
    listElement.style.color = 'blue';
    // run function to add to team list
    listBlue()
  }
  const listBlue = () => {
    // grab id from HTML
    const blueList = document.getElementById('blue');
    // add object to team list by name
    blueTeam.map((player) => {
      const li = document.createElement('li');
      const name = player.name;
      li.appendChild(document.createTextNode(name))
      blueList.appendChild(li)
    })
  }
  // do the same for both teams
  const turnRed = (id) => {
    const listElement = document.getElementById('red');
    const redPlayer = listOfPlayers.find(player => player.id === id);
    const newRed = new redTeammate(
      redPlayer.id,
      redPlayer.name,
      redPlayer.age,
      redPlayer.skillSet,
      redPlayer.placeBorn,
      redPlayer.canThrowBall,
      redPlayer.DodgeBallPlayer,
      redPlayer.hasPaid,
      redPlayer.isHealthy,
      redPlayer.yearsExperience,
      "Reds",
      "Red"
    )

    redTeam.push(newRed);
    const playerIndex = listOfPlayers.indexOf(redPlayer);

    listOfPlayers.splice(playerIndex,1);
    listElement.innerHTML = "";
    listElement.style.color = 'red';
    listRed()
  }
  const listRed = () => {
    const redList = document.getElementById('red');
    redTeam.map((player) => {
      const li = document.createElement('li');
      const name = player.name;
      li.appendChild(document.createTextNode(name))
      redList.appendChild(li)
    })
  }
}

// TESTS
if (typeof describe === 'function') {
  describe(object, callback);
  it('should);

  describe(object, callback);
  it('should);

  describe(object, callback);
  it('should);

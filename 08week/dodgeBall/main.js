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
  
  class Player {
    constructor(id, name, age, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = id;
      this.age = age;
      this.name = name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy =isHealthy;
      this.yearsExperience = yearsExperience;
      this.team = null;
    }
  }
  class blueTeammate {
    constructor(){}
  }
  class redTeammate {
    constructor(){}
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
    const clickedPlayer = arrOfPeople.find(function(person) {
      return person.id == id})
    const newPlayer = new Player(clickedPlayer.id, clickedPlayer.name, clickedPlayer.age, true, true, true, true, 2);
    listOfPlayers.push(newPlayer)
    console.log(newPlayer)
    const playerIndex = arrOfPeople.indexOf(clickedPlayer)
    arrOfPeople.splice(playerIndex,1);
    document.getElementById('people').innerHTML = ""
    listPeopleChoices()
    listPlayers()
  };
  
  const listPlayers = () => {
    const listElement = document.getElementById('players')
    listElement.innerHTML = ""

    listOfPlayers.map(player => {
      const li = document.createElement("li")
      const buttonRed = document.createElement("button")
      buttonRed.innerHTML = "Make Red"
      buttonRed.addEventListener('click', () => {makeRed(player.id)})
      const buttonBlue = document.createElement("button")
      buttonBlue.innerHTML = "Make Blue"
      buttonBlue.addEventListener('click', () => {makeBlue(player.id)})
      li.appendChild(buttonRed)
      li.appendChild(buttonBlue)
      li.appendChild(document.createTextNode(player.name))
      listElement.append(li)
    })
  }

  const makeRed = (id) => {
    listOfPlayers.find(player => player.id === id).team = "red";
    listRedPlayers(id)
  }

  const makeBlue = (id) => {
    listOfPlayers.find(player => player.id === id).team = "blue";
  }

  const listRedPlayers = (id) => {
    const redList = document.getElementById('red');
    const li = document.createElement('li');
    const redPlayer = listOfPlayers.filter(player => player.id === id)
    redTeam.push(redPlayer)
    redTeam.map((player, id) => {
      const name = player[id].name;
      console.log(name)
      li.appendChild(document.createTextNode(name))
      redList.appendChild(li)
    })
  }
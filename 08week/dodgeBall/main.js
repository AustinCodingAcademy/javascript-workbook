"use strict";

// const assert = require('assert');

const arrOfPeople = [
    {
      id: 1,
      name: "Alex Borsbach",
      age: 42,
      skillSet: "technician",
      placeBorn: "Berlin, Germany"
    },
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
      buttonRed.innerHTML = "Red Team"
      buttonRed.addEventListener('click', () => {makeRed(player.id)})
      const buttonBlue = document.createElement("button")
      buttonBlue.innerHTML = "Blue Team"
      buttonBlue.addEventListener('click', () => {makeBlue(player.id)})
      li.appendChild(buttonRed)
      li.appendChild(buttonBlue)
      li.appendChild(document.createTextNode(player.name))
      listElement.append(li)
    })
  }

  const makeRed = (id) => {
    listOfPlayers.find(player => player.id === id).team = "red";
    const redPlayer = listOfPlayers.find(player => player.id === id)
    redTeam.push(redPlayer)
    const playerIndex = listOfPlayers.indexOf(redPlayer)
    listOfPlayers.splice(playerIndex,1);
    document.getElementById('red').innerHTML = ""
    listPlayers()
    listRedPlayers()
  }

  const makeBlue = (id) => {
    listOfPlayers.find(player => player.id === id).team = "blue";
    const bluePlayer = listOfPlayers.find(player => player.id === id)
    blueTeam.push(bluePlayer)
    const playerIndex = listOfPlayers.indexOf(bluePlayer)
    listOfPlayers.splice(playerIndex,1);
    document.getElementById('blue').innerHTML = ""
    listPlayers()
    listBluePlayers()
  }

  const listRedPlayers = () => {
    const redList = document.getElementById('red');
    redTeam.map((player) => {
      const li = document.createElement('li');
      const name = player.name;
      console.log(name)
      li.appendChild(document.createTextNode(name))
      redList.appendChild(li)
    })
  }

  const listBluePlayers = () => {
    const blueList = document.getElementById('blue');
    blueTeam.map((player) => {
      const li = document.createElement('li');
      const name = player.name;
      console.log(name)
      li.appendChild(document.createTextNode(name))
      blueList.appendChild(li)
    })
  }

 // Tests

 // when running test comment out line 109, 110, 111, 156 and 167 !!!
 // uncomment line 3!

  if (typeof describe === 'function') {

    describe('#makePlayer()', () => {
      it('should move clicked person to player class', () => {
        makePlayer(1);
        assert.equal(listOfPlayers[0].name, "Alex Borsbach");
      });
      it('should move clicked player to a listBluePlayers list', () => {
        listBluePlayers(1);
        assert.equal(listBluePlayers[0]);
      });
      it('should move clicked player to a listRedPlayers list', () => {
        listRedPlayers(1);
        assert.equal(listRedPlayers[0]);
      });
    });
  }

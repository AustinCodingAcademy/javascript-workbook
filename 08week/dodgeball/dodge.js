'use strict';
let assert = require('assert');

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
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class DodgeBallPlayer {
  constructor(id, name, age, skillSet, placeBorn) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
  }
}
class blueTeammate {
  constructor(id, name, age, skillSet, placeBorn, mascot, teamColor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}
class redTeammate {
  constructor(id, name, age, skillSet, placeBorn, mascot, teamColor) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skillSet = skillSet;
    this.placeBorn = placeBorn;
    this.mascot = mascot;
    this.teamColor = teamColor;
  }
}

const listPeople = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
      listElement.removeChild(li);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

const makePlayer = playerId => {
  const listElement = document.getElementById("players");
  const findPerson = arrOfPeople.find(person => person.id == playerId);
  const personIndex = arrOfPeople.indexOf(findPerson);
  arrOfPeople.splice(personIndex, 1);
  const newPlayer = new DodgeBallPlayer(
    findPerson.id,
    findPerson.name,
    findPerson.age,
    findPerson.skillSet,
    findPerson.placeBorn
  );
  listOfPlayers.push(newPlayer);
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newPlayer.name));
  const blueButton = document.createElement("button");
  blueButton.innerHTML = "Make Blue";
  blueButton.style.backgroundColor = "blue";
  blueButton.style.color = "white";
  li.appendChild(blueButton);
  blueButton.addEventListener("click", function() {
    makeBlue(newPlayer.id);
    listElement.removeChild(li);
  });
  const redButton = document.createElement("button");
  redButton.innerHTML = "Make Red";
  redButton.style.backgroundColor = "red";
  redButton.style.color = "white";
  li.appendChild(redButton);
  listElement.append(li);
  redButton.addEventListener("click", function() {
    makeRed(newPlayer.id);
    listElement.removeChild(li);
  });
};

const makeBlue = id => {
  const listElement = document.getElementById("blue");
  const findPerson = listOfPlayers.find(person => person.id == id);
  const personIndex = listOfPlayers.indexOf(findPerson);
  listOfPlayers.splice(personIndex, 1);
  const bluePlayer = new blueTeammate(
    findPerson.id,
    findPerson.name,
    findPerson.age,
    findPerson.skillSet,
    findPerson.placeBorn,
    "Tigers",
    "Blue"
  );
  blueTeam.push(bluePlayer);
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${bluePlayer.name} Mascot: ${bluePlayer.mascot}`)
  );
  listElement.append(li);
};
const makeRed = id => {
  const listElement = document.getElementById("red");
  const findPerson = listOfPlayers.find(person => person.id == id);
  const personIndex = listOfPlayers.indexOf(findPerson);
  listOfPlayers.splice(personIndex, 1);
  const redPlayer = new redTeammate(
    findPerson.id,
    findPerson.name,
    findPerson.age,
    findPerson.skillSet,
    findPerson.placeBorn,
    "Bears",
    "Red"
  );
  redTeam.push(redPlayer);
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(`${redPlayer.name} Mascot: ${redPlayer.mascot}`)
  );
  listElement.append(li);
};

//tests

if (typeof describe === "function") {
  describe("DodgeballPlayer", function() {
    it("should have a id, name, age, skillSet, placeBorn upon instantiation", function() {
      var player1 = new DodgeBallPlayer(
        8,
        "Rick Martinez",
        35,
        "jump rope",
        "austin texas"
      );
      assert.equal(player1.name, "Rick Martinez");
      assert.equal(player1.age, 35);
      assert.equal(player1.skillset, "jump rope");
    });
  });

  describe("blueTeammate", function() {
    it("should have a id, name, age, skillSet, placeBorn, mascot, teamColor upon instantiation", function() {
      let bluePlayer = new blueTeammate(
        8,
        "Rick Martinez",
        35,
        "jump rope",
        "austin, texas",
        "tigers",
        "blue"
      );
      assert.equal(bluePlayer.name, "Rick Martinez");
      assert.equal(bluePlayer.age, 35);
      assert.equal(bluePlayer.skillSet, "jump rope");
    });
  });

  describe("redTeammate", function() {
    it("should have a id, name, age, skillSet, placeBorn, mascot, teamColor upon instantiation", function() {
      let redPlayer = new redTeammate(
        1,
        "charles young",
        35,
        "welder",
        "austin, texas",
        "bears  ",
        "red"
      );
      assert.equal(redPlayer.name, "charles young");
      assert.equal(bluePlayer.age, 35);
      assert.equal(bluePlayer.skillSet, "welder");
    });
  });
}

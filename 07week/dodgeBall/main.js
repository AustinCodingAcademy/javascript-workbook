// -Checkpoint 2 Dodge Ball!
// 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.

// 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a

// ABOVE - USE makePlayer() to get ID. let clickedPlayer = arrOfPeople.splice(i + 2, 1) THEN listOfPlayers.push(clickedPlayer).

// 20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.

// 20pts - Uses Class - This is not a hack job. You should use class to add the new properties you need and extend when you need.

// 20pts - Make a button to remove Players from Teams and back to the Players list.
// Make a button to remove Player from the Players List and move them into the People List.

// --------------------------------------------------------------------------------------------

// Use the class keyword to create a template of a dodgeBallPlayer that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience

// Push these new dodge ball Player objects into a new array and then display them in the DOM as available players to pick. (listOfPlayers)

// Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team and now has mascot and teamColor (Button - Red Team) (Button Blue Team)

// Use the this keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.

// Display the two teams in a new list in the DOM with appropriate titles.

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
  }
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

class Player {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.id = person.id;
    this.skillSet = person.skillSet;
    this.placeBorn = person.placeBorn;
    this.canThrowBall = true;
    this.canDodgeBall = true;
    this.hasPaid = true;
    this.isHealthy = true;
    this.yearsExperience = true;
  }
}

class blueTeammate {
  constructor() {}
}
class redTeammate {
  constructor() {}
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listElement.append(li);
  });
};

const makePlayer = id => {
  const listPeopleElement = document.getElementById("people");
  const listPlayerElement = document.getElementById("players");

  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through arrOfPeople and look for each object element key: id.
  for (let i = 0; i < arrOfPeople.length; i++) {
    // If that id === above numId
    if (arrOfPeople[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = arrOfPeople.splice(i, 1);

      let temp = new Player(splicedPerson[0])
      listOfPlayers.push(temp)

      // push the first element of the new array splicedPerson into listOfPlayers.
      // listOfPlayers.push(splicedPerson[0]);
    }
  }

  listPeopleElement.innerHTML = "";

  arrOfPeople.map(person => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.addEventListener("click", function() {
      makePlayer(person.id);
    });
    li.appendChild(button);
    li.appendChild(
      document.createTextNode(person.name + " - " + person.skillSet)
    );
    listPeopleElement.append(li);
  });

  listPlayerElement.innerHTML = "";

  listOfPlayers.map(person => {
    const redButton = document.createElement("button");
    const blueButton = document.createElement("button");
    const li = document.createElement("li");

    redButton.innerHTML = "Red Team";
    redButton.addEventListener("click", function() {
      redTeam(person.id);
    });
    li.appendChild(redButton);
    listPlayerElement.append(li);

    blueButton.innerHTML = "Blue Team";
    blueButton.addEventListener("click", function() {
      blueTeam(person.id);
    });
    li.appendChild(blueButton);
    li.appendChild(
      document.createTextNode(`${person.name} - ${person.skillSet}`)
    );
  });

  console.log(`arrayOfPeople: `, arrOfPeople);
  console.log(`listOfPlayers: `, listOfPlayers);
};

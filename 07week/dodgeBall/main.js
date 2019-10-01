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

class blueTeammate extends Player {
  constructor(
    name,
    age,
    id,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      name,
      age,
      id,
      skillSet,
      placeBorn,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    );
    this.mascot = "Dolphins";
    this.color = "Blue";
  }
}

class redTeammate extends Player {
  constructor(
    name,
    age,
    id,
    skillSet,
    placeBorn,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      name,
      age,
      id,
      skillSet,
      placeBorn,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    );
    this.mascot = "Devils";
    this.color = "Fire Red";
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  listElement.innerHTML = "";
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

// Dodge Ball Players Build and Refresh
const playerOptions = () => {
  // Clears printed Player List so no duplicates are made
  const listPlayerElement = document.getElementById("players");
  listPlayerElement.innerHTML = "";
  // Prints update player list
  listOfPlayers.map(person => {
    console.log(person, `hi`);
    const blueButton = document.createElement("button");
    const redButton = document.createElement("button");
    const removePlayerButton = document.createElement("button");
    const li = document.createElement("li");

    // Blue Team Button Setup
    blueButton.innerHTML = "Blue Team";
    blueButton.addEventListener("click", function() {
      blueTeamPlayer(person.id);
    });
    li.appendChild(blueButton);

    // Red Team Button Setup
    redButton.innerHTML = "Red Team";
    redButton.addEventListener("click", function() {
      redTeamPlayer(person.id);
    });
    li.appendChild(redButton);
    listPlayerElement.append(li);
    li.appendChild(
      document.createTextNode(
        ` Name: ${person.name} | Can Dodge: ${person.canDodgeBall} `
      )
    );

    // Remove From List Of Players Button Setup
    removePlayerButton.innerHTML = " Remove";
    removePlayerButton.addEventListener("click", function() {
      removePlayerToPeople(person.id);
    });
    li.appendChild(removePlayerButton);
  });
};

const removePlayerToPeople = id => {
  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through listOfPlayers and look for each object element key: id.
  for (let i = 0; i < listOfPlayers.length; i++) {
    // If that id === above numId
    if (listOfPlayers[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = listOfPlayers.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the teammate constructor.
      // let temp = new blueTeammate(splicedPerson[0]);
      // console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      arrOfPeople.push(splicedPerson[0]);
    }
  }

  // UPDATES player list
  playerOptions();

  // UPDATES people list
  listPeopleChoices();
};

const blueTeamPlayer = id => {
  const listPlayerElement = document.getElementById("players");
  const blueTeamElement = document.getElementById("blue");

  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through listOfPlayers and look for each object element key: id.
  for (let i = 0; i < listOfPlayers.length; i++) {
    // If that id === above numId
    if (listOfPlayers[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = listOfPlayers.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the teammate constructor.
      let temp = new blueTeammate(splicedPerson[0]);
      console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      blueTeam.push(temp);
    }
  }

  // UPDATES player list
  playerOptions();

  blueTeamElement.innerHTML = "";
  blueTeam.map(person => {
    const removeBlueButton = document.createElement("button");
    const li = document.createElement("li");

    removeBlueButton.innerHTML = "Remove!";
    removeBlueButton.addEventListener("click", function() {
      removeFromBlue(person.id);
    });
    li.appendChild(removeBlueButton);
    blueTeamElement.appendChild(li);
    li.appendChild(
      document.createTextNode(
        ` ${person.name} | Team: ${person.mascot} | Color: ${person.color}`
      )
    );
  });
};

const removeFromBlue = id => {
  const listPlayerElement = document.getElementById("players");
  const blueTeamElement = document.getElementById("blue");

  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through blueTeam array and look for each object element key: id.
  for (let i = 0; i < blueTeam.length; i++) {
    // If that id === above numId
    if (blueTeam[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = blueTeam.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the teammate constructor.
      let temp = new Player(splicedPerson[0]);
      console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      listOfPlayers.push(temp);
    }
  }

  playerOptions();

  blueTeamElement.innerHTML = "";

  blueTeam.map(person => {
    const removeBlueButton = document.createElement("button");
    const li = document.createElement("li");

    removeBlueButton.innerHTML = "Remove!";
    removeBlueButton.addEventListener("click", function() {
      removeFromBlue(person.id);
    });
    li.appendChild(removeBlueButton);
    blueTeamElement.appendChild(li);
    li.appendChild(
      document.createTextNode(
        ` ${person.name} | Team: ${person.mascot} | Color: ${person.color}`
      )
    );
  });
};

const redTeamPlayer = id => {
  const listPlayerElement = document.getElementById("players");
  const redTeamElement = document.getElementById("red");

  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through listOfPlayers and look for each object element key: id.
  for (let i = 0; i < listOfPlayers.length; i++) {
    // If that id === above numId
    if (listOfPlayers[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = listOfPlayers.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the teammate constructor.
      let temp = new redTeammate(splicedPerson[0]);
      console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      redTeam.push(temp);
    }
  }

  playerOptions();

  redTeamElement.innerHTML = "";
  redTeam.map(person => {
    const removeRedButton = document.createElement("button");
    const li = document.createElement("li");

    removeRedButton.innerHTML = "Remove!";
    removeRedButton.addEventListener("click", function() {
      removeFromRed(person.id);
    });
    li.appendChild(removeRedButton);
    redTeamElement.appendChild(li);
    li.appendChild(
      document.createTextNode(
        ` ${person.name} | Team: ${person.mascot} | Color: ${person.color}`
      )
    );
  });
};

const removeFromRed = id => {
  const listPlayerElement = document.getElementById("players");
  const redTeamElement = document.getElementById("red");

  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through blueTeam array and look for each object element key: id.
  for (let i = 0; i < redTeam.length; i++) {
    // If that id === above numId
    if (redTeam[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = redTeam.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the teammate constructor.
      let temp = new Player(splicedPerson[0]);
      console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      listOfPlayers.push(temp);
    }
  }

  // UPDATES things
  playerOptions();

  redTeamElement.innerHTML = "";

  redTeam.map(person => {
    const removeRedButton = document.createElement("button");
    const li = document.createElement("li");

    removeRedButton.innerHTML = "Remove!";
    removeRedButton.addEventListener("click", function() {
      removeFromRed(person.id);
    });
    li.appendChild(removeRedButton);
    redTeamElement.appendChild(li);
    li.appendChild(
      document.createTextNode(
        ` ${person.name} | Team: ${person.mascot} | Color: ${person.color}`
      )
    );
  });
};

const makePlayer = id => {
  // Set the variable id to a number
  let numId = parseInt(`${id}`);
  // console.log(`numId: `, numId, Object.prototype.toString.call(numId));

  // Iterate through arrOfPeople and look for each object element key: id.
  for (let i = 0; i < arrOfPeople.length; i++) {
    // If that id === above numId
    if (arrOfPeople[i].id === numId) {
      // remove the object element that contains that id
      let splicedPerson = arrOfPeople.splice(i, 1);
      // Create temporary variable to hold instantiated Player while passing in current key/value pairs through the Player constructor.
      let temp = new Player(splicedPerson[0]);
      // Output the new Player with new key value pairs + old key value pairs into listOfPlayers Array
      listOfPlayers.push(temp);
    }
  }
  // Resets the <ul> in List of People to blank so that the following map prints with out duplicating the map from listPeopleChoices()
  // UPDATES People List
  listPeopleChoices();

  // UPDATES Player List
  playerOptions();

  // Populates Blue Team / Updates Blue Team list and Play List
  blueTeamPlayer();

  // Populates Blue Team / Updates Blue Team list and Play List
  redTeamPlayer();

  // Removes Player from Blue & Update Blue Team list and Play List
  removeFromBlue();

  // Removes Player from Red & Update Blue Team list and Play List
  removeFromRed();

  // console.log(`arrayOfPeople: `, arrOfPeople);
  // console.log(`listOfPlayers: `, listOfPlayers);
  // console.log(`blueTeam array: `, blueTeam);
  // console.log(`redTeam array: `, redTeam);
};

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

// Passed in person from listOfPeople() / arrOfPeople
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

// Extended Player and added blue Team properties
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

// Extended Player and extended Red Team Properties
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

// Deals with the arrOfPeople array and hooks + creates DOM elements associated with that array.
const listPeopleChoices = () => {
  const listElement = document.getElementById("people");
  // Clears the HTML for listElement. Stops duplicate elements from being posted on the DOM.
  listElement.innerHTML = "";
  // Iterates through arrOfPeople
  arrOfPeople.map(person => {
    // For Each person in the array the below tasks are performed.
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "Make Player";
    button.classList.add("personButton")
    // On click, the makePlayer function is called and it passes the person.id for a hook
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
  const listPlayerElement = document.getElementById("players");
  // Clears printed Player List so no duplicates are made
  listPlayerElement.innerHTML = "";
  // Prints update player list and builds the buttons
  listOfPlayers.map(person => {
    // console.log(person, `hi`);
    const blueButton = document.createElement("button");
    const redButton = document.createElement("button");
    const removePlayerButton = document.createElement("button");
    const li = document.createElement("li");

    // Blue Team Button Setup
    blueButton.innerHTML = "Blue Team";
    blueButton.classList.add('blueButton')
    blueButton.addEventListener("click", function() {
      blueTeamPlayer(person.id);
    });
    li.appendChild(blueButton);

    // Red Team Button Setup
    redButton.innerHTML = "Red Team";
    redButton.classList.add("redButton")
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
    removePlayerButton.classList.add("removePlayerButton")
    removePlayerButton.addEventListener("click", function() {
      removePlayerToPeople(person.id);
    });
    li.appendChild(removePlayerButton);
  });
};

// Moves a player to the people Array
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

// Moves a player from listOfPlayers to Blue Team with correct Class info
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

  // Creates a Remove Button and calls the removeFromBlue() onclick
  blueTeamElement.innerHTML = "";
  blueTeam.map(person => {
    const removeBlueButton = document.createElement("button");
    const li = document.createElement("li");

    removeBlueButton.innerHTML = "Remove!";
    removeBlueButton.classList.add("removePlayerButton")
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

// Action of removing from Blue Team
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

  // Creates Remove from Team Button
  blueTeamElement.innerHTML = "";

  blueTeam.map(person => {
    const removeBlueButton = document.createElement("button");
    const li = document.createElement("li");

    removeBlueButton.innerHTML = "Remove!";
    removeBlueButton.classList.add("removePlayerButton")
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

// Moves player from list of players to red team and adds Red Team class properties
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
      // console.log(temp);
      // Output the new Player with new key value pairs + old key value pairs into appropriate teammate Array
      redTeam.push(temp);
    }
  }

  playerOptions();

  // Creates a remove from Red Team button, and calls removeFromRed() onclick
  redTeamElement.innerHTML = "";
  redTeam.map(person => {
    const removeRedButton = document.createElement("button");
    const li = document.createElement("li");

    removeRedButton.innerHTML = "Remove!";
    removeRedButton.classList.add("removePlayerButton")
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

// Removes a player from Red Team and moves them to listOfPlayers with player Class properties.
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

  // UPDATES listOfPlayers
  playerOptions();

  // Makes new remove Button
  redTeamElement.innerHTML = "";

  redTeam.map(person => {
    const removeRedButton = document.createElement("button");
    const li = document.createElement("li");

    removeRedButton.innerHTML = "Remove!";
    removeRedButton.classList.add("removePlayerButton")
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

// The heart of the program. Is called in listPeopleChoices() and takes an id. It is able to grab the id 
// from the object of each person and pass it into the other functions that move players from array to array, while the functions refresh the DOM
// by remapping on a button click.
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

  // Populates Blue Team / Updates Blue Team list and Player List
  blueTeamPlayer();

  // Populates Blue Team / Updates Blue Team list and Player List
  redTeamPlayer();

  // Removes Player from Blue & Update Blue Team list and Player List
  removeFromBlue();

  // Removes Player from Red & Update Blue Team list and Player List
  removeFromRed();

  // console.log(`arrayOfPeople: `, arrOfPeople);
  // console.log(`listOfPlayers: `, listOfPlayers);
  // console.log(`blueTeam array: `, blueTeam);
  // console.log(`redTeam array: `, redTeam);
};

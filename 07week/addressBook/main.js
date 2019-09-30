let userObj;

window.onload = function() {
  getUsers();
};

const getUsers = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(user => (userObj = user));
};

const consoleUsers = () => {
  console.log(userObj.results);
  console.log(userObj.results[0].name.first);
  console.log(userObj.results[0].picture.large);
};

const displayUsers = () => {
  for (let i = 0; i < userObj.results.length; i++) {
    // Grabbing Location to push name info.
    let nameDiv = document.getElementById("name");

    // Creating a new Element Paragraph to place text into
    let newParagraph = document.createElement("p");

    // Creating a TextNode with appropraite info
    const text = document.createTextNode(
      `${userObj.results[i].name.first} ${userObj.results[i].name.last}`
    );
    const moreText = document.createTextNode(
      `${userObj.results[i].name.first} was born: ${userObj.results[i].dob.date} || Their Phone is: ${userObj.results[i].phone}`
    );

    // Placing new paragram into #name div
    nameDiv.appendChild(newParagraph);

    // Appending Text variable into newParagraph
    newParagraph.appendChild(text);

    // Make Image Place and Append
    let imgDiv = document.getElementById("img");
    let newImg = document.createElement("IMG");
    newImg.src = userObj.results[i].picture.large;
    imgDiv.append(newImg);

    // Make Buttons
    let newInfoDiv = document.getElementById("newInfo");
    let buttonPlace = document.getElementById("buttonId");
    const newButton = document.createElement("button");
    newButton.innerHTML = "About";
    newButton.classList.add("button");
    buttonPlace.appendChild(newButton);

    newButton.addEventListener("click", function() {
      newInfoDiv.innerHTML = "";
      newInfoDiv.appendChild(moreText);
      console.log("hi");
    });
  }
};

// getUseUsers

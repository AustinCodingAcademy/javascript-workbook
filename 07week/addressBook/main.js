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
  console.log(userObj.results[0].name);
};

const displayUsers = () => {
  // const user = document.getElementsByClassName("pBox");
  for (let i = 0; i < userObj.results.length; i++) {
    let nameDiv = document.getElementById("name");
    let newParagraph = document.createElement("p");
    // let img = document.getElementById(img);
    const text = document.createTextNode(`${userObj.results[i].name.first} ${userObj.results[i].name.last}`);
    nameDiv.appendChild(newParagraph);
    newParagraph.appendChild(text);
  }
};

// getUseUsers

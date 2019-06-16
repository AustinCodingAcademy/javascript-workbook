let arrayOfUsers = [];

// this function waits for the web page to be loaded and when hit display users will populate 5 users
window.onload = function() {
  get5Users();
  console.log(arrayOfUsers);
};

// this function is going to make a fetch request 1 user at a time
const get1User = () => {
  fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(users =>
      users.results.map(user => {
        arrayOfUsers.push(user);
      })
    )
    .then(console.log(arrayOfUsers));
};
// this function requests 5 users at a time
const get5Users = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(users =>
      users.results.map(user => {
        arrayOfUsers.push(user);
      })
    )
    .then(console.log(arrayOfUsers));
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUser = () => {
  const allUsers = document.getElementById("all-users");
  //clears the li so when array gets dispalyed no duplicates show up
  allUsers.innerHTML = "";
  arrayOfUsers.map((user, index) => {
    const li = document.createElement("li");
    const picture = document.createElement("img");
    picture.setAttribute("src", `${user.picture.thumbnail}`);
    const button = document.createElement("button");
    const moreInfo = document.createElement('p');
    moreInfo.innerHTML = "";
    const infoText = `Phone#: ${user.phone}, State: ${user.location.state}, E-mail: ${user.email}`
    button.innerHTML = "more info";
    const text = document.createTextNode(
      `Contact: ${index}, First Name: ${user.name.first}, Last Name: ${user.name.last + "  "}`
    );
    button.addEventListener('click', function() {
      // toggles the additional info text on/off
      if (moreInfo.innerHTML === ""){
        moreInfo.innerHTML = infoText
      } else {
        moreInfo.innerHTML = ""
      }
    });
    li.appendChild(text);
    li.appendChild(picture);
    li.appendChild(button);
    li.appendChild(moreInfo);
    allUsers.append(li);
  });
};
